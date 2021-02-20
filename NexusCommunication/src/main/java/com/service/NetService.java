package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.InternetPlan;
import com.dao.NetDao;

@Service
public class NetService {
	
	@Autowired
	NetDao netDao;
	
	public List<InternetPlan> getAllPlan() {
		return netDao.getAllPlan();
}
	
	public String storePlan(InternetPlan i) {
		int result=netDao.storePlan(i);{
			if(result==1) {
	            return "Record stored Successfully";
	        }else if(result==0) {
	            return "Reocrd didn't store";
	        }else {
	            return "Exception Occured(Duplicate record!!)";
	        }
		}
	}
	
	public String deletePlan(long planid) {
		int result=netDao.deletePlan(planid);
		if(result==1)
		{
			return "Record deleted successsfully";
		}
		else
		{
			return "Record Didn't delete";
		}
		
	}
	
	public String updatePlan(InternetPlan i) 
 	{
 		int result=netDao.updatePlan(i);
 		if(result==1)
		{
 			return "Record updated successsfully";
		}
		else
		{
			return "Record Didn't update";
		}
 	}

}
