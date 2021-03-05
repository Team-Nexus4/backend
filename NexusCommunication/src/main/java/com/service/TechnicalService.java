package com.service;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.*;
import com.dao.ConnectionRepository;
import com.dao.EmployeeRepository;
import com.dao.LandLineRepository;
import com.dao.NetRepository;
import com.dao.OrderRepository;
import com.dao.TechnicalDao;

@Service
public class TechnicalService {

	@Autowired
	TechnicalDao td;
	@Autowired
	OrderRepository or;
	@Autowired
	LandLineRepository lr;
	@Autowired
	NetRepository nr;
	@Autowired
	ConnectionRepository cr;
	@Autowired
	EmployeeRepository er;
	
	public List<Technical> getTechnical() {
		// TODO Auto-generated method stub
		return td.displayTechnical();
	}
	public String placedOrderByTechnical(long oid) {
		String res=td.placedOrderByTechnical(oid);
		Order o=or.getOne(oid);
		if(res=="Order Placed Success by Technical Person") {
			long divider = Long.parseLong("9000000000");
			if(o.getRequested_plan() < divider) {
				long lid=o.getRequested_plan();
				LandlinePlan llp = lr.getOne(lid);
				Connection con = new Connection();
				con.setCid(o.getCid());
				con.setBill(llp.getCost());
				con.setReqPlan(lid);
				con.setStatus("active");
				con.setStartdate(LocalDate.now());
				con.setEnddate(LocalDate.now().plusDays(llp.getDuration()*30));
				con.setBillstatus("unpaid");
				Connection c1 = cr.save(con);
			return c1==null?"Entry In connection table UnSuccesfull":"Entry In connection table Succesfull";
			
			}else {
				long iid=o.getRequested_plan();
				InternetPlan iip = nr.getOne(iid);
				Connection con = new Connection();
				con.setCid(o.getCid());
				con.setBill(iip.getCost());
				con.setReqPlan(iid);
				con.setStatus("active");
				con.setStartdate(LocalDate.now());
				con.setEnddate(LocalDate.now().plusDays(Integer.parseInt(iip.getDuration())*30));
				con.setBillstatus("unpaid");
				Connection c1 = cr.save(con);
			return c1==null?"Entry In connection table UnSuccesfull":"Entry In connection table Succesfull";
			}
			
		}else {
			return "Any Exception Occured at Order Placed by Technical Person Time";
		}
		
	}
	public String addTechnical(Employee e) {
		// TODO Auto-generated method stub
		String pattern = "WMMddHHmmss";
		SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
		String date = simpleDateFormat.format(new Date());
		long empid = Long.parseLong(date);
		e.setEid(empid);
		Employee emp = er.save(e);
		if(emp!=null) {
			return "Store success";
		}else {
			return "An Exception is occured";
		}
	}
	
}
