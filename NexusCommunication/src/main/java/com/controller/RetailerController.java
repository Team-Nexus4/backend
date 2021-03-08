package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Employee;
import com.bean.Order;

import com.bean.OrderStock;
import com.bean.Retailer;
import com.bean.RetailerRegistration;
import com.service.RetailerService;

@RestController
@RequestMapping(value = "retailer")
@CrossOrigin
public class RetailerController
{
	@Autowired
	RetailerService rs;
	
	public RetailerController()
	{
		
	}
	
	//http://localhost:9070/retailer/display/2222000001
	@GetMapping(value = "display/{rid}"  ,produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Order> displayOrder(@PathVariable("rid") long rid)
	{
		List<Order> listOfOrder = rs.getAllOrderService(rid);
		for(Order o :listOfOrder)
			System.out.println(o);
		return listOfOrder;
	}
	
	@GetMapping(value="displayRetailer/{rid}",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Retailer> displayRetailer(@PathVariable("rid") long rid)
	{
		List<Retailer> listOfRet=rs.getRetailerDetails(rid);
		return listOfRet;
	}
	
	@PostMapping(value="placeOrder",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String placeOrder(@RequestBody Order o)
	{
		String res = rs.placeOrderService(o.getOid());
		return res;
	}
	
	@PostMapping(value = "placeOrderStock",consumes = MediaType.APPLICATION_JSON_VALUE,produces =  MediaType.TEXT_PLAIN_VALUE)
	public String placeOrderStock(@RequestBody OrderStock o)
	{
		System.out.println(o);
		String res = rs.placeOrderStockService(o);
		return res;
	}
	
	
	
	
	@PostMapping(value="addRetailer",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.TEXT_PLAIN_VALUE)
	public String addRetailer(@RequestBody RetailerRegistration rr)
	{
		return rs.addRetailer(rr);
	}
	
	@PostMapping(value="replaceRetailer",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String replaceRetailer(@RequestBody Employee e)
	{
		return rs.replaceRetailer(e);
	}
	
	@GetMapping(value = "display"  ,produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Retailer> displayallretailer()
	{
		List<Retailer> listOfRetailer = rs.displayallretailer();
		
		return listOfRetailer;
	}

	
	
}
