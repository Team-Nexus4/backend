package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Order;
import com.bean.OrderRequest;
import com.bean.OrderStock;
import com.bean.Retailer;
import com.service.RetailerService;

@RestController
@RequestMapping(value = "retailer")
public class RetailerController
{
	@Autowired
	RetailerService os;
	
	public RetailerController()
	{
		
	}
	
	//http://localhost:9070/retailer/display/2222000001
	@GetMapping(value = "display/{rid}"  ,produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Order> displayOrder(@PathVariable("rid") long rid)
	{
		List<Order> listOfOrder = os.getAllOrderService(rid);
		for(Order o :listOfOrder)
			System.out.println(o);
		return listOfOrder;
	}
	
	@PostMapping(value="placeOrder",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String placeOrder(@RequestBody Order o)
	{
		String res = os.placeOrderService(o.getOid());
		return res;
	}
	
	@PostMapping(value = "placeOrderStock",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String placeOrderStock(@RequestBody OrderStock o)
	{
		String res = os.placeOrderStockService(o);
		return null;
	}
	
	
	//http://localhost:9070/retailer/deleteRetailer
	@DeleteMapping(value="deleteRetailer",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String deleteRetailer(@RequestBody OrderRequest o)
	{
		String res = os.replaceRetailerService(o);
		return null;
	}

	
	
}
