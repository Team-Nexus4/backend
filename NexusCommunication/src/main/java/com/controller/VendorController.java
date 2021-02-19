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

import com.bean.Vendor;
import com.service.VendorService;

@RestController
@RequestMapping(value="vendor")
public class VendorController
{
	@Autowired
	VendorService vendorService;
	
	// http://localhost:9090/vendor/info
	@GetMapping(value = "info")
	public String simpleMessage()
	{
		return "Welcome to Spring Rest Nexus Vendor Controller";
	}
	// http://localhost:9090/vendor/allVendor
	@GetMapping(value = "allVendor",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Vendor> getAllVendorDetails() 
	{
		return vendorService.getAllVendor();
	}
	
	// http://localhost:9090/vendor/addVendor
	@PostMapping(value = "addVendor",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String addVendor(@RequestBody Vendor pp)
	{
		return vendorService.addVendor(pp);
	}
	
	// http://localhost:9090/vendor/updateRouterCount
	@PutMapping(value = "updateRouterCount",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateRouterCount(@RequestBody Vendor pp)
	{
		return vendorService.updateRouterCount(pp);
	}
	
	// http://localhost:9090/vendor/updateWireCount
	@PutMapping(value = "updateWireCount",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateWireCount(@RequestBody Vendor pp)
	{
		return vendorService.updateWireCount(pp);
	}
		
	// http://localhost:9090/vendor/updateLandLCount
	@PutMapping(value = "updateLandLCount",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String updateLAndL(@RequestBody Vendor pp)
	{
		return vendorService.updateLandLCount(pp);
	}
		
	// http://localhost:9090/vendor/deleteVendor/100
	@DeleteMapping(value = "deleteVendor/{vid}")
	public String deletevendor(@PathVariable("vid") int vid)
	{
		return vendorService.deleteVendor(vid);
	}
	
}
