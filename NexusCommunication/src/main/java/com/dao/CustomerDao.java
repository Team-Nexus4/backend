package com.dao;


import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
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
			return 0;
		else
		{
			long rid=0;
			for( Long r:li)
			{
				 rid = r;
			}
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
			return "Order Placed";
		}
		else
		{
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
		return listOfOrder;
//		Iterator<Order> li =  listOfOrder.iterator();
//		int i=0;
//		while(li.hasNext())
//		{
//			
//			
//			Order oo = li.next();
//			long request = oo.getRequested_plan();
//			long divider = Long.parseLong("9000000000");
//
//			if(request<divider)
//			{
//				System.out.println(i);
//				qry = manager.createNativeQuery("select l.duration,l.cost,o.status from landline_plan l , order_table o where l.lid=o.requested_plan and o.oid=:cid");
//				qry.setParameter("cid", oo.getOid());
//				listOfObject.addAll(qry.getResultList());
//
//			}
//			else if(request>divider)
//			{
//				System.out.println(i );
//				qry = manager.createNativeQuery("select i.speed, i.duration,i.cost,o.status from internet_plan i , order_table o where i.iid=o.requested_plan and o.oid=:cid");
//				qry.setParameter("cid", oo.getOid());
//				listOfObject.addAll(qry.getResultList());
//			}	
//			i++;
//		}
//		return listOfObject;
	}

	public List<Object> getAllPlanBill(long cid) {
		List<Object> listOfObject = new ArrayList<Object>();
		EntityManager manager = emf.createEntityManager();
		Query qry = manager.createQuery("select cn from Connection cn where cn.cid=?1");
		qry.setParameter(1,cid);
		List<Connection> listOfOrder = qry.getResultList();
		System.out.println(listOfOrder.size());
		Iterator<Connection> li =  listOfOrder.iterator();
		int i=0;
		while(li.hasNext())
		{
			
			
			Connection oo = li.next();
			long request = oo.getReqplan();
			long divider = Long.parseLong("9000000000");

			if(request<divider)
			{
				System.out.println(i);
				qry = manager.createNativeQuery("select l.duration,l.cost,cn.status,cn.bill,cn.startdate,cn.enddate from landline_plan l , connection cn where l.lid=cn.reqplan and cn.cnid=:cid");
				qry.setParameter("cid", oo.getCnid());
				listOfObject.add(qry.getResultList());

			}
			else if(request>divider)
			{
				System.out.println(i);
				qry = manager.createNativeQuery("select i.speed, i.duration,i.cost,cn.status,cn.bill,cn.startdate,cn.enddate from internet_plan i , connection cn where i.iid=cn.reqplan and cn.cnid=:cid");
				qry.setParameter("cid", oo.getCnid());
				listOfObject.add(qry.getResultList());
			}	
			i++;
		}
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
