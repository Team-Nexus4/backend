package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Customer;
import com.bean.Order;
import com.bean.OrderRequest;
import com.dao.CustomerDao;
import com.dao.CustomerRepository;
import com.dao.OrderRepository;

@Service
public class CustomerService {

	@Autowired
	CustomerRepository cr;
	
	@Autowired
	CustomerDao cd;
	
	@Autowired
	OrderRepository or;
	
	public List<Customer> getCustomer() {
		
		return cr.findAll();
	}

	public String storeCustomer(Customer c) {
		
		Customer c1 = cr.save(c);
		if(c1!=null) {
			return "Store success";
		}else {
			return "Any Exception is occured";
		}
	}

	public String deleteCustomer(long cid) {
		
		Optional<Customer> c = cr.findById(cid);
		 if(c.isPresent()) {
			 cr.deleteById(cid);
			 if(cr.existsById(cid)) {
				 return "Any Exception Occured";
			 }else {
				 return "Delete Success";
			 }
		 }else {
			 return "Record is not found";
		 }
	}

	public String updateCustomer(Customer c) {
		boolean res = cr.existsById(c.getCid());
		 if(res) {
			 Customer cust = cr.getOne(c.getCid());
			 cust.setCid(c.getCid());
			cust.setAddres(c.getAddres());
			cust.setFname(c.getFname());
			cust.setLname(c.getLname());
			cust.setPhone(c.getPhone());
			 cr.saveAndFlush(cust);
			 return "updated success";
		 }else {
			 return "updated failed";
		 }
	}

	public String orderCustomerService(Customer o,long reqPlan) 
	{
		long rid = cd.checkPincode(o.getPincode());
		if(rid>0)
		{
			Order order = new Order();
			order.setRid(rid);
			order.setCid(o.getCid());
			order.setRequested_plan(reqPlan);
			order.setStatus("false");
			String res = cd.placeOrder(order);
			return res;
		}
		else
		{
			return "Not Reacheable";
		}	
	}
	
	public Customer loginCustomer(Customer c) {
		List<Customer> listOfCust = cr.findAll();
		Customer cust1=null;
		int flag=0;
		for(Customer cust:listOfCust) {
			if(cust.getUsername().equals(c.getUsername())) {
				cust1=cust;
			}
		}
		return cust1;
		
	}

	public List<Object> getCustomersPlan(long cid) {
		// TODO Auto-generated method stub
		return cd.getAllPlan(cid);
	}

}
