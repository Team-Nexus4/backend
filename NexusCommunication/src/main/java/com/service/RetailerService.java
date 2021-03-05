package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Customer;
import com.bean.Employee;
import com.bean.Order;

import com.bean.OrderStock;
import com.bean.Retailer;
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

	public String addRetailer(Retailer r, Employee e) {
		
		Retailer rt = rr.save(r);
		if(rt!=null) {
			long empid=dao.getEmpId(r.getPincode());
			e.setEid(empid);
			Employee emp = er.save(e);
			if(emp!=null) {
				return "Retailer Registered Success";
			}else {
				return "Retailer registartion failed";
			}
			
		}else {
			return "Any Exception is occured";
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
