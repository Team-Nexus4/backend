package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Customer;
import com.bean.Employee;
import com.bean.Retailer;
import com.bean.Vendor;
import com.bean.VendorRegistration;
import com.dao.EmployeeRepository;
import com.dao.VendorDao;
//import com.dao.VendorRepository;

@Service
public class VendorService {
	@Autowired
	VendorDao vendorDao;
	@Autowired
	EmployeeRepository er;

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
					return "Vendor Registered Success";
				} else {
					return "Vendor registartion failed";
				}
			} else {
				return "Adding Vendor Failed";
			}
		} else {
			return "User Already Present try with Difreent Isername";
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
			return "Replacd Failed";
		}
	}

	public Employee checkEmployeeLogin(Employee e) {
		List<Employee> listOfEmp = er.findAll();
		Employee emp1 = null;
		int flag = 0;
		for (Employee emp : listOfEmp) {
			if ((emp.getUsername().equals(e.getUsername())) && (emp.getPassword().equals(emp.getPassword()))) {
				emp1 = emp;
				System.out.println("check 1");
			}
		}
		return emp1;
	}
}
