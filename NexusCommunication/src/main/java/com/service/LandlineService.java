package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.LandlinePlan;
import com.dao.LandlineDao;

@Service
public class LandlineService
{
	@Autowired
	LandlineDao dao;
	
	public List<LandlinePlan> getAllLandLineConnectionService()
	{
		return dao.getAllLandlinePlan();
	}
	
	public String addLandlineConnectionService(LandlinePlan l)
	{
		int res = dao.addLandlinePlan(l);
		if(res == 1)
			return "Added Susseccfully";
		else
			return "That Plan With Duration Already Present";
	}
	
	public String deleteLandlineConnectionService(long lid)
	{
		int res = dao.deleteLandlinePlan(lid);
		if(res == 1)
			return "Deleted Susseccfully";
		else
			return "Plan Not Present";
	}
}
