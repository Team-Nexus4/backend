package com.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Customer;
import com.bean.Order;
import com.bean.PlanBill;
import com.service.CustomerService;

@RestController
@RequestMapping(value="customer")
@CrossOrigin
public class CustomerController {

	@Autowired
	CustomerService cs;
	

	@GetMapping(value="displayCustomer",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Customer> getCustomer() {
		return cs.getCustomer();
	}
	

	@PostMapping(value="storeCustomer",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.TEXT_PLAIN_VALUE)
	public String storeCustomer(@RequestBody Customer c) {
		return cs.storeCustomer(c);
	}
	

	@DeleteMapping(value ="deleteCustomer/{cid}" ,produces = MediaType.TEXT_PLAIN_VALUE)
	public String deletEmp(@PathVariable("cid") long cid) {
		return  cs.deleteCustomer(cid);	
		
	}

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
	

	@GetMapping(value="orderCustomer/{cid}/{pincode}/{reqPlan}" ,produces = MediaType.TEXT_PLAIN_VALUE)
	public String order(@PathVariable("cid") long cid,@PathVariable("pincode") int pincode,@PathVariable("reqPlan") long reqPlan,HttpServletRequest req)
	{
		Customer o = new Customer();
		o.setCid(cid);
		o.setPincode(pincode);
		return cs.orderCustomerService(o,reqPlan);
	}
	
	@GetMapping(value="payBill/{cnid}" ,produces = MediaType.TEXT_PLAIN_VALUE)
	public String billPayment(@PathVariable("cnid") long cnid){
		return cs.billPayment(cnid);
}
	
	@PostMapping(value="loginCustomer",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
	public Customer loginCustomer(@RequestBody Customer c,HttpServletRequest request) {
		Customer cust= cs.loginCustomer(c);
		if(cust==null) {
			return null;		
		}
		else {
			cs.checkBillStatusCustomer(cust.getCid());
			return cust;
			
		}
	}
	
	@GetMapping(value="displayCustomersPlan/{cid}",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Order> getCustomersPlan(@PathVariable("cid") long cid)
	{
		List<Order> li=cs.getCustomersPlan(cid);
		return li;
	}
	
	@GetMapping(value="displayCustomersPlanBill/{cid}",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<PlanBill> getCustomersPlanBill(@PathVariable("cid") long cid)
	{
		List<PlanBill> li = cs.getCustomersPlanBill(cid);
		return li;
	}
}
