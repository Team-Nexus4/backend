package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Customer;
import com.bean.Employee;
import com.bean.Order;

import com.bean.OrderStock;
import com.bean.Retailer;
import com.bean.RetailerRegistration;
import com.dao.EmployeeRepository;
import com.dao.RetailerDao;
import com.dao.RetailerRepository;


@Service
public class RetailerService 
{
	@Autowired
	RetailerDao dao;
	@Autowired
	RetailerRepository rr;
	@Autowired
	EmployeeRepository er;
	private void Retailer() {
		// TODO Auto-generated method stub

	}
	
	public List<Order> getAllOrderService(long rid)
	{
		return dao.getAllOrder(rid);
	}
	
	public String placeOrderService(long oid)
	{
		int check = dao.checkStock(oid);
		if(check==1)
		{
			int res = dao.placeOrder(oid);
			if(res == 1)
			{
				return "Order Placed";
			}
			else
			{
				return "Order Didnt Placed";
			}
		}
		else if(check == 2)
		{
			return "Order Didnt Placed";
		}
		else
		{
			return "didn't have sufficient stock You Need To Place Order For Vendor for " + check;
		}
	}



	public String placeOrderStockService(OrderStock o)
	{
		String res = dao.placeOrderStock(o);
		return res;
	}

	public String addRetailer(RetailerRegistration r) {
		boolean flag=true;
		Retailer r1 = new Retailer();
		r1.setInternetKit(r.getInternetKit());
		r1.setLandlineKit(r.getLandlineKit());
		r1.setPincode(r.getPincode());
		r1.setVid(r.getVid());
		
		Employee e1 = new Employee();
		e1.setDesg(r.getDesg());
		e1.setPassword(r.getPassword());
		e1.setUsername(r.getUsername());
		List<Employee> ee = er.findAll();
		for(Employee eee: ee)
		{
			if(eee.getUsername().equals(r.getUsername()))
			{
				flag=false;
			}
		}
		if(flag)
		{
			Retailer rt = rr.save(r1);
			if(rt!=null) {
				long empid=dao.getEmpId(r.getPincode());
			e1.setEid(empid);
			Employee emp = er.save(e1);
			if(emp!=null) {
				return "Retailer Registered Success";
			}else {
				return "Retailer registartion failed";
			}
			
		}else {
			return "Any Exception is occured";
		}
	}
		else
		{
			return "User Already Present try with Difreent Isername";
		}
	}

	public String replaceRetailer(Employee e) {
		if(er.existsById(e.getEid())) {
			 Employee emp = er.getOne(e.getEid());
			emp.setUsername(e.getUsername());
			emp.setPassword(e.getPassword());
			 er.saveAndFlush(emp);
			 return "Replace success";
		}else {
			 return "Replace failed";
		}
		
	}
}
