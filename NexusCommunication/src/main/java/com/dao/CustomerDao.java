package com.dao;


import java.math.BigInteger;
import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Iterator;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bean.Connection;
import com.bean.Order;
import com.bean.PlanBill;
import com.bean.Retailer;
import com.bean.Technical;



@Repository
public class CustomerDao 
{
	
	@Autowired
	EntityManagerFactory emf;
	@Autowired
	ConnectionRepository cnr;
	
	public long checkPincode(int pincode)
	{
		EntityManager manager = emf.createEntityManager();
		Query qry = manager.createQuery("select r.rid from RetailerMapping r where r.pincode=?1");
		qry.setParameter(1, pincode);
		List<Long> li = qry.getResultList();
		if(li.isEmpty())	
		{
			manager.close();
			return 0;
		}
		else
		{
			long rid=0;
			for( Long r:li)
			{
				 rid = r;
			}
			manager.close();
			return rid;
		}
	}

	public String placeOrder(Order order) 
	{
		EntityManager manager = emf.createEntityManager();
		EntityTransaction tran = manager.getTransaction();
		Query qry = manager.createQuery("select o.oid from Order o where o.cid=?1 and o.requested_plan=?2");
		qry.setParameter(1,order.getCid());
		qry.setParameter(2,order.getRequested_plan());
		List<Long> li = qry.getResultList();
		if(li.isEmpty())
		{
			tran.begin();
				manager.persist(order);
			tran.commit();
			manager.close();
			return " Your Order Placed";
		}
		else
		{
			manager.close();
			return "That Type Of Order Is Alreay Placed";
		}
		
		
	}

	public List<Order> getAllPlan(long cid) 
	{
		List<Order> listOfOrder = new ArrayList<Order>();
		EntityManager manager = emf.createEntityManager();
		Query qry = manager.createQuery("select o from Order o where o.cid=?1");
		qry.setParameter(1,cid);
		listOfOrder = qry.getResultList();
		System.out.println(listOfOrder.size());
		manager.close();
		return listOfOrder;

	}

	public List<PlanBill> getAllPlanBill(long cid) {
		List<PlanBill> listOfObject = new ArrayList<PlanBill>();
		EntityManager manager = emf.createEntityManager();
		Query qry = manager.createQuery("select cn from Connection cn where cn.cid=?1 and cn.billstatus='unpaid'");
		qry.setParameter(1,cid);
		List<Connection> listOfOrder = qry.getResultList();
		Iterator<Connection> li =  listOfOrder.iterator();
		int i=0;
		while(li.hasNext())
		{
			
			
			Connection oo = li.next();
			long request = oo.getReqplan();
			long divider = Long.parseLong("9000000000");

			if(request<divider)
			{

				qry = manager.createNativeQuery("select l.duration,l.cost,cn.status,cn.bill,cn.startdate,cn.enddate,cn.cnid,cn.billstatus from landline_plan l , connection cn where l.lid=cn.reqplan and cn.cnid=:cid");
				qry.setParameter("cid", oo.getCnid());

				List<?> lit = qry.getResultList();
				Iterator<?> li1 =  lit.iterator();
				while(li1.hasNext()) {
					Object obj[] = (Object[]) li1.next();
					PlanBill p = new PlanBill();
					p.setDuration((int) obj[0]);
					p.setCost((float) obj[1]);
					p.setStatus((String) obj[2]);
					p.setBill((int) obj[3]);
					Date d  = (Date) obj[4];
					p.setStartdate(d.toLocalDate() );
					Date d1 = (Date) obj[5];
					p.setEnddate(d1.toLocalDate() );
					BigInteger b = (BigInteger) obj[6];
					p.setCnid( b.longValue());
					p.setBillstatus((String) obj[7]);
					listOfObject.add(p);
				}
				

			}
			else if(request>divider)
			{

				qry = manager.createNativeQuery("select i.speed, i.duration,i.cost,cn.status,cn.bill,cn.startdate,cn.enddate,cn.cnid,cn.billstatus from internet_plan i , connection cn where i.iid=cn.reqplan and cn.cnid=:cid");
				qry.setParameter("cid", oo.getCnid());
				List<?> lit = qry.getResultList();
				Iterator<?> li1 =  lit.iterator();
				while(li1.hasNext()) {
					Object obj[] = (Object[]) li1.next();
					PlanBill p = new PlanBill();
					p.setSpeed((String) obj[0]);
					p.setDuration((int) obj[1]);
					p.setCost((float) obj[2]);
					p.setStatus((String) obj[3]);
					p.setBill((int) obj[4]);
					Date d  = (Date) obj[5];
					p.setStartdate(d.toLocalDate() );
					Date d1 = (Date) obj[6];
					p.setEnddate(d1.toLocalDate() );
					BigInteger b = (BigInteger) obj[7];
					p.setBillstatus((String) obj[8]);
					p.setCnid( b.longValue());
					 
					listOfObject.add(p);
				}
			}	
			i++;
		}
		manager.close();
		return listOfObject;

	}

	public void checkBillStatusCustomer(long cid) {
		EntityManager manager = emf.createEntityManager();
		Query qry = manager.createQuery("select c from Connection c where c.cid=?1 and status like 'active'");
		qry.setParameter(1, cid);
		List<Connection> list=qry.getResultList();
		
		for(Connection cn:list) {
			if(cn.getEnddate().isBefore(LocalDate.now())) {
				Connection cnn=cnr.getOne(cn.getCnid());
				cnn.setStatus("expire");
				cnr.saveAndFlush(cnn);	
			}
		}
		
	}

}
