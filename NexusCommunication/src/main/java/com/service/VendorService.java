package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Customer;
import com.bean.Employee;
import com.bean.OrderStock;
import com.bean.Retailer;
import com.bean.Vendor;
import com.bean.VendorRegistration;
import com.dao.EmployeeRepository;
import com.dao.VendorDao;
import com.dao.VendorRepository;
//import com.dao.VendorRepository;

@Service
public class VendorService {
	@Autowired
	VendorDao vendorDao;
	@Autowired
	EmployeeRepository er;
	@Autowired
	VendorRepository vr;
	String flag="true";

	public List<Vendor> getAllVendor() {
		return vendorDao.getAllVendorDetails();
	}

	public String addVendor(VendorRegistration v) {
		boolean flag = true;
		Vendor vv = new Vendor();
		vv.setInternetKit(v.getInternetKit());
		vv.setLandlineKit(v.getLandlineKit());
	

		Employee e = new Employee();
		e.setUsername(v.getUsername());
		e.setPassword(v.getPassword());
		e.setDesg("vendor");

		List<Employee> ee = er.findAll();
		for (Employee eee : ee) {
			if (eee.getUsername().equals(v.getUsername())) {
				flag = false;
			}
		}
		if (flag) {

			if (vendorDao.addVendorInfo(vv) > 0) {
				long empid = vendorDao.getEmpId();
				e.setEid(empid);
				Employee emp = er.save(e);
				if (emp != null) {
					return "Vendor Registered Successfully";
				} else {
					return "Vendor registartion failed";
				}
			} else {
				return "Vendor registartion failed";
			}
		} else {
			return "User Already Present try with Difreent Username";
		}
	}

	public String deleteVendor(int pid) {
		if (vendorDao.deleteVendorInfo(pid) > 0) {
			return "Vendor Record deleted successfully";
		} else {
			return "Vendor Record didn't find. Try Again......";
		}
	}

	public String updateInternetKit(Vendor vv) {
		if (vendorDao.updateInternetKit(vv) > 0) {
			return "Internet Kit updated successfully";
		} else {
			return "Updating Internet Kit Failed. Try Again......";
		}
	}

	public String updateLandlineKit(Vendor vv) {
		if (vendorDao.updateLandLineKit(vv) > 0) {
			return "Landline Kit updated successfully";
		} else {
			return "Updating Landline Kit Failed. Try Again......";
		}
	}

	public String replaceVendorWithAnotherE(Retailer r) {
		if (vendorDao.replaceWithAnotherVendorE(r) > 0) {
			return "Replaced Successfully";
		} else {
			return "Replaced Failed";
		}
	}

	public Employee checkEmployeeLogin(Employee e) {
		List<Employee> listOfEmp = er.findAll();
		Employee emp1 = null;
		int flag = 0;
		for (Employee emp : listOfEmp) {
			if ((emp.getUsername().equals(e.getUsername())) && (emp.getPassword().equals(e.getPassword()))) {
				emp1 = emp;
			}
		}
		return emp1;
	}
	
	public String fulfillOrderKit(long oid)
	{
		OrderStock os=vendorDao.getAllOrderStockDetails(oid);
		Retailer ro=vendorDao.getRetailer(os.getRid());
		Vendor v=vendorDao.getVendor(os.getVid());
		String req=os.getRequestedItem();
		if(req.equals("ik"))
		{
			if((v.getInternetKit()-os.getRequestedStock())>0)
			{
				v.setInternetKit(-os.getRequestedStock());
				int result=vendorDao.updateInternetKit(v);
				if(result>0)
				{
					ro.setInternetKit(ro.getInternetKit()+os.getRequestedStock());
					int res=vendorDao.updateRetailer(ro);
					if(res>0)
					{
						int res1=vendorDao.updateOrderStockStatus(os.getOid());
						return "Internet Stock Updated succesfully";
					}
					else
						return "Stock Update failed....!";
				}
				else
					return "Stock Update in Vendor failed";
			}
			else
			{
				return "Internet Out ofStock";
			}
			
			
		}
		else
		{
			if((v.getLandlineKit()-os.getRequestedStock())>0)
			{
				v.setLandlineKit(-os.getRequestedStock());
				int result=vendorDao.updateLandLineKit(v);
				if(result>0)
				{
					ro.setLandlineKit(ro.getLandlineKit()+os.getRequestedStock());
					int res=vendorDao.updateRetailer(ro);
					if(res>0)
					{
						int res1=vendorDao.updateOrderStockStatus(os.getOid());
						return "Land line Stock Updated succesfully";
					}
					else
						return "Stock Update failed....!";
				}
				else
					return "Stock Update in Vendor failed";
			}
			else
			{
				return "Land Line Out ofStock";
			}		
		}
	}

	public List<Vendor> getVendorDetails(long vid) {
		
		return vendorDao.getVendDetails(vid);
	}

	public List<OrderStock> displayOrdersbyvid(long vid) {
		System.out.println(vendorDao.getOrdDetails(vid));
		
		return vendorDao.getOrdDetails(vid);
	}
}
