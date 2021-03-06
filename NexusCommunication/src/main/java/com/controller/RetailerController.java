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


	@GetMapping(value = "display/{rid}"  ,produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Order> displayOrder(@PathVariable("rid") long rid)
	{
		return rs.getAllOrderService(rid);
	}
	
	@GetMapping(value="displayRetailer/{rid}",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Retailer> displayRetailer(@PathVariable("rid") long rid)
	{
		return rs.getRetailerDetails(rid);
	}
	
	@PostMapping(value="placeOrder",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String placeOrder(@RequestBody Order o)
	{
		return rs.placeOrderService(o.getOid());
	}
	
	@PostMapping(value = "placeOrderStock",consumes = MediaType.APPLICATION_JSON_VALUE,produces =  MediaType.TEXT_PLAIN_VALUE)
	public String placeOrderStock(@RequestBody OrderStock o)
	{
		return rs.placeOrderStockService(o);
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
