package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Customer;
import com.bean.OrderRequest;
import com.service.CustomerService;

@RestController
@RequestMapping(value="customer")
public class CustomerController {

	@Autowired
	CustomerService cs;
	
	//http://localhost:9070/customer/displayCustomer
	@GetMapping(value="displayCustomer",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Customer> getCustomer() {
		return cs.getCustomer();
	}
	
	//http://localhost:9070/customer/storeCustomer
	@PostMapping(value="storeCustomer",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.TEXT_PLAIN_VALUE)
	public String storeCustomer(@RequestBody Customer c) {
		return cs.storeCustomer(c);
	}
	
	//http://localhost:9070/customer/deleteCustomer/3333000001
	@DeleteMapping(value ="deleteCustomer/{cid}" ,produces = MediaType.TEXT_PLAIN_VALUE)
	public String deletEmp(@PathVariable("cid") long cid) {
		return  cs.deleteCustomer(cid);	
		
	}
	
	//http://localhost:9070/customer/updateCustomer
	@PutMapping(value ="updateCustomer" , consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.TEXT_PLAIN_VALUE)
	public String updateEmpRepo(@RequestBody Customer c) {
		Customer cust=new Customer();
		cust.setCid(c.getCid());
		cust.setFname(c.getFname());
		cust.setLname(c.getLname());
		cust.setPhone(c.getPhone());
		cust.setAddres(c.getAddres());
		return cs.updateCustomer(c);	
	}
	
	//http://localhost:9070/customer/orderCustomer
//	{
//		a
//
//		}
	@PostMapping(value="orderCustomer" , consumes = MediaType.APPLICATION_JSON_VALUE , produces = MediaType.TEXT_PLAIN_VALUE)
	public String order(@RequestBody OrderRequest o)
	{
		return cs.orderCustomerService(o);
	}
}
