package com.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bean.Order;
import com.bean.OrderRequest;
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
	
	public int placeOrder(long oid)
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
			
			long request = o.getRequested_plan();
			
			long froml = Long.parseLong("8888000000");
			long tol = Long.parseLong("9000000000");
			long fromi = Long.parseLong("9999000000");
			long toi = Long.parseLong("10000000000");
			if(request>froml && request<tol)
			{
				Query qry = manager.createQuery("select r from Retailer r where r.rid=?1");
				qry.setParameter(1, o.getRid());
				Retailer robj = (Retailer) qry.getSingleResult();
				robj.setLandlineKit(robj.getLandlineKit()-1);
				o.setStatus("pass");
				Technical t = new Technical();
				t.setOid(o.getOid());
				t.setRid(o.getRid());
				tran.begin();
					manager.merge(robj);
					manager.merge(o);
					manager.merge(t);
				tran.commit();
					return 1;
			}
			else if(request>fromi && request<toi)
			{
				Query qry = manager.createQuery("select r from Retailer r where r.rid=?1");
				qry.setParameter(1, o.getRid());
				Retailer robj = (Retailer) qry.getSingleResult();
				robj.setInternetKit(robj.getInternetKit()-1);
				o.setStatus("pass");
				Technical t = new Technical();
				t.setOid(o.getOid());
				t.setRid(o.getRid());
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

	public String checkStock(long oid) 
	{
		EntityManager manager = emf.createEntityManager();
		EntityTransaction tran = manager.getTransaction();
		Order o = manager.find(Order.class, oid);
		
		if(o==null)
		{
			return "2";
		}
		else
		{
			long rid = o.getRid();
			System.out.println(rid);
			long request = o.getRequested_plan();
			long froml = Long.parseLong("8888000000");
			long tol = Long.parseLong("9000000000");
			long fromi = Long.parseLong("9999000000");
			long toi = Long.parseLong("10000000000");
			if(request>froml && request<tol)
			{
				Query qry = manager.createQuery("select r from Retailer r where r.rid=?1");
				qry.setParameter(1, rid);
				Retailer robj = (Retailer) qry.getSingleResult();
				if(robj.getLandlineKit()>0)
					return "1";
				else
					return "landline kit";
			}
			else if(request>fromi && request<toi)
			{
				Query qry = manager.createQuery("select r from Retailer r where r.rid=?1");
				qry.setParameter(1, rid);
				Retailer robj = (Retailer) qry.getSingleResult();
				if(robj.getInternetKit()>0)
					return "1";
				else
					return "internet kit";
			}
			
		}
		return null;
		
	}

	public int replaceRetailer(OrderRequest o) 
	{
		EntityManager manager = emf.createEntityManager();
		EntityTransaction tran = manager.getTransaction();
		Query qry = manager.createQuery("select o from Order o where o.rid=?1");
		qry.setParameter(1, o.getCid());
		
		List<Order> listOfOrder = qry.getResultList();
		for(Order o1 :listOfOrder)
			System.out.println(o1);
		// TODO Auto-generated method stub
		return 0;
	}

	public String placeOrderStock(OrderStock o)
	{
		EntityManager manager = emf.createEntityManager();
		EntityTransaction tran = manager.getTransaction();
		o.setStatus("false");
		tran.begin();
			manager.persist(o);
		tran.commit();
		String com = o.getReqestedItem();
		if(com.equals("lk"))
			com = "landline kit";
		else
			com = "internet kit ";
		return "Oder For " + com + "to Vendor " + o.getVid() + " is placed";
	}
}
