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

import com.bean.InternetPlan;
import com.service.NetService;

@RestController
@RequestMapping(value="nexusInternet")
@CrossOrigin
public class NetController {
	
	@Autowired
	NetService netService;
	

	@GetMapping(value="display",produces = MediaType.APPLICATION_JSON_VALUE)
	 public List<InternetPlan> displayPlan()
	{
	     return netService.getAllPlan();
     }
	

	@PostMapping(value="store",consumes = MediaType.APPLICATION_JSON_VALUE)
	 public String storePlanDetails(@RequestBody InternetPlan i) 
	{
	        return netService.storePlan(i);
	 }
	

	@PutMapping(value="update",consumes = MediaType.APPLICATION_JSON_VALUE)
	   public String updatePlanDetails(@RequestBody InternetPlan i) 
	{
			return netService.updatePlan(i);
	}

	@DeleteMapping(value="delete/{planid}")
    public String deletePlanDetails(@PathVariable("planid") long planid)
	{
	        return netService.deletePlan(planid);    
	  }

}
