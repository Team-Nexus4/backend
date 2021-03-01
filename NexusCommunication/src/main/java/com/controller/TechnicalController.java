package com.controller;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Customer;
import com.bean.Employee;
import com.bean.Technical;
import com.service.TechnicalService;

@RestController
@RequestMapping(value="technical")
public class TechnicalController {

	@Autowired
	TechnicalService ts;
	
	@GetMapping(value = "display")
	public List<Technical> displayTechnical(){
		return ts.getTechnical();
	}
	
	@PostMapping(value="placeOrderByTechnical/{oid}")
	public String placedOrderByTechnical(@PathVariable("oid") long oid) {
		return ts.placedOrderByTechnical(oid);
	}
	
	@PostMapping(value="addTechnical",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.TEXT_PLAIN_VALUE)
	public String addTechnical(@RequestBody Employee e) {
		return ts.addTechnical(e);
	}
}
