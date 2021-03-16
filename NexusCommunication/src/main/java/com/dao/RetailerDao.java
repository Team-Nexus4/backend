package com.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bean.Order;

import com.bean.OrderStock;
import com.bean.Retailer;
import com.bean.Technical;

@Repository
public class RetailerDao 
{
	@Autowired
	EntityManagerFactory emf;
	
	public List<Order> getAllOrder(long rid)
	{
		EntityManager manager = emf.createEntityManager();
		Query qry = manager.createQuery("select o from Order o where o.rid=?1 and o.status='false'");
		qry.setParameter(1, rid);
		return qry.getResultList();
	}
	
	public List<Retailer> getRetDetails(long rid) {
		EntityManager manager = emf.createEntityManager();
		Query qry = manager.createQuery("select r from Retailer r where r.rid=?1");
		qry.setParameter(1, rid);
		return qry.getResultList();
	}
	
	public int placeOrder(long oid)
	{
		EntityManager manager = emf.createEntityManager();
		EntityTransaction tran = manager.getTransaction();
		Order o = manager.find(Order.class, oid);
		//OrderStock oo = manager.find((OrderStock.class, oid);
		if(o==null)
		{
			return 2;
		}
		else
		{
			
			long request = o.getRequested_plan();
			
			long divider = Long.parseLong("9000000000");
			Query qry = manager.createQuery("select r from Retailer r where r.rid=?1");
			qry.setParameter(1, o.getRid());
			Retailer robj = (Retailer) qry.getSingleResult();
			
			Technical t = new Technical();
			if(request<divider)
			{
				
				robj.setLandlineKit(robj.getLandlineKit()-1);
				o.setStatus("pass");	
				t.setOid(o.getOid());
				t.setRid(o.getRid());
				t.setStatus("false");
				tran.begin();
					manager.merge(robj);
					manager.merge(o);
					manager.merge(t);
				tran.commit();
					return 1;
			}
			else if(request>divider)
			{
				robj.setInternetKit(robj.getInternetKit()-1);
				o.setStatus("pass");
				t.setOid(o.getOid());
				t.setRid(o.getRid());
				t.setStatus("false");
				tran.begin();
					manager.merge(robj);
					manager.merge(o);
					manager.merge(t);
				tran.commit();
					return 1;
			}
			else {
				return 0;
			}
			
			
//			Retailer robj = (Retailer) qry.getSingleResult();
//			o.setStatus("true");
//			tran.begin();
//				manager.merge(o);
//			tran.commit();
//			return 1;
		}
	}

	public int checkStock(long oid) 
	{
		EntityManager manager = emf.createEntityManager();
		EntityTransaction tran = manager.getTransaction();
		Order o = manager.find(Order.class, oid);
		
		if(o==null)
		{
			return 2;
		}
		else
		{
			long rid = o.getRid();
			System.out.println(rid);
			long request = o.getRequested_plan();
			long divider = Long.parseLong("9000000000");
			Query qry = manager.createQuery("select r from Retailer r where r.rid=?1");
			qry.setParameter(1, rid);
			Retailer robj = (Retailer) qry.getSingleResult();
			if(request<divider)
			{	
				return robj.getLandlineKit()>0?1:0;
				
				
			}
			else if(request>divider)
			{
				return robj.getInternetKit()>0?1:0;
				
			}
			else {
				return 0;
			}
		}
		
	}

	

	public String placeOrderStock(OrderStock o)
	{
		EntityManager manager = emf.createEntityManager();
		EntityTransaction tran = manager.getTransaction();
		o.setStatus("false");
		tran.begin();
			manager.persist(o);
		tran.commit();
		String com = o.getRequestedItem();
		if(com.equals("lk"))
			com = "landline kit";
		else
			com = "internet kit ";
		return "Order For " + com + "to Vendor " + o.getVid() + " is placed";
	}

	public long getEmpId(int pincode) {
		EntityManager manager = emf.createEntityManager();
		Query qry = manager.createQuery("select r from Retailer r where pincode=?1");
		qry.setParameter(1, pincode);
		Retailer r= (Retailer) qry.getSingleResult();
		return r.getRid();
	}

	
}
