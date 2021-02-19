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

import com.bean.LandlinePlan;
import com.service.LandlineService;

@RestController
@RequestMapping(value="connection")
public class LandlineController
{
	@Autowired
	LandlineService ls;
	
	@GetMapping(value="landlinePlan",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<LandlinePlan> getAllLnadineConnection()
	{
		List<LandlinePlan> listOfLandline = ls.getAllLandLineConnectionService();
		return listOfLandline;
	}
	
	@PostMapping(value="addLandlinePlan",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.TEXT_PLAIN_VALUE)
	public String addLandline(@RequestBody LandlinePlan l)
	{
		String res = ls.addLandlineConnectionService(l);
		return res;
	}
	
	@DeleteMapping(value="deleteLandlinePlan/{lid}",produces = MediaType.TEXT_PLAIN_VALUE)
	public String deleteLandline(@PathVariable("lid") long lid)
	{
		
		String res = ls.deleteLandlineConnectionService(lid);
		return res;
	}
}
