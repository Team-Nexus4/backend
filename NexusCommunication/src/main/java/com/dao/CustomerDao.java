package com.dao;


import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bean.Order;
import com.bean.Retailer;

@Repository
public class CustomerDao 
{
	
	@Autowired
	EntityManagerFactory emf;
	
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

}
