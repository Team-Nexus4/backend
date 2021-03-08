package com.controller;

import java.util.List;

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

import com.bean.Employee;
import com.bean.OrderStock;
import com.bean.Retailer;
import com.bean.Vendor;
import com.bean.VendorRegistration;
import com.service.VendorService;

@RestController
@RequestMapping(value="vendor")
@CrossOrigin
public class VendorController
{
	@Autowired
	VendorService vendorService;
	
	// http://localhost:9070/vendor/info
	@GetMapping(value = "info")
	public String simpleMessage()
	{
		return "Welcome to Spring Rest Nexus Vendor Controller";
	}
	// http://localhost:9070/vendor/allVendor
	@GetMapping(value = "allVendor",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Vendor> getAllVendorDetails() 
	{
		return vendorService.getAllVendor();
	}
	
	// http://localhost:9070/vendor/addVendor
	@PostMapping(value = "addVendor",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String addVendor(@RequestBody VendorRegistration vr)
	{
		return vendorService.addVendor(vr);
	}
	
	@GetMapping(value="displayVendor/{vid}",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Vendor> displayRetailer(@PathVariable("vid") long vid)
	{
		List<Vendor> listOfVend=vendorService.getVendorDetails(vid);
		return listOfVend;
	}
	
	// http://localhost:9070/vendor/updateInternetKit
	@PutMapping(value = "updateInternetKit",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateInternetKit(@RequestBody Vendor vv)
	{
		return vendorService.updateInternetKit(vv);
	}
		
	// http://localhost:9070/vendor/updateLandlineKit
	@PutMapping(value = "updateLandineKit",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateLAndL(@RequestBody Vendor vv)
	{
		return vendorService.updateLandlineKit(vv);
	}
		
	// http://localhost:9070/vendor/deleteVendor/100
	@PostMapping(value = "replaceRetailerVendor",produces = MediaType.APPLICATION_JSON_VALUE)
	public String deletevendor(@RequestBody Retailer r)
	{
		String res = vendorService.replaceVendorWithAnotherE(r);
		return res;
	}
	
	@PostMapping(value="chekLoginEmployee" , produces = MediaType.APPLICATION_JSON_VALUE,consumes = MediaType.APPLICATION_JSON_VALUE)
	public Employee checkLogin(@RequestBody Employee e)
	{
		Employee ee = vendorService.checkEmployeeLogin(e);
		System.out.println(ee);
		return ee;
	}
	
	@PostMapping(value="fulfillOrder",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String fulfillOrder(@RequestBody OrderStock os)
	{
		String fo=vendorService.fulfillOrderKit(os.getOid());
		return fo;
	}
	
	@GetMapping(value="displayOrdersbyVid/{vid}",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<OrderStock> displayOrdersbyVid(@PathVariable("vid") long vid)
	{
		List<OrderStock> listOfOrd=vendorService.displayOrdersbyvid(vid);
		//System.out.println(listOfOrd);
		return listOfOrd;
	}
	
}
