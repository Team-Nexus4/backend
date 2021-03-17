package com.dao;

import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import javax.persistence.Query;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bean.Employee;
import com.bean.OrderStock;
import com.bean.Retailer;
import com.bean.Vendor;

@Repository
public class VendorDao {
	@Autowired
	EntityManagerFactory emf;
	public List<Vendor> getAllVendorDetails() {
		EntityManager manager=emf.createEntityManager();
		Query qry=manager.createQuery("select v from Vendor v");
		List<Vendor> listOfRec=qry.getResultList();
		manager.close();
		return listOfRec;
	}

	public int addVendorInfo(Vendor vv) 
	{
		EntityManager manager=emf.createEntityManager();
		EntityTransaction tran=manager.getTransaction();
		tran.begin();
		manager.persist(vv);
		tran.commit();
		Vendor v=manager.find(Vendor.class,vv.getVid());
		if(v==null)
		{
			manager.close();
			return 0;
		}else
		{
			manager.close();
			return 1;
		}
	}
	
	public int deleteVendorInfo(int vid) {
		EntityManager manager = emf.createEntityManager();
		EntityTransaction tran = manager.getTransaction();
		Vendor v = manager.find(Vendor.class,vid);
		if(v==null)
		{
			manager.close();
			return 0;
		}
		else
		{
			tran.begin();
			manager.remove(v);
			tran.commit();
			manager.close();
			return 1;
		}
	}

	public int updateInternetKit(Vendor vv) {
		EntityManager manager=emf.createEntityManager();
		EntityTransaction tran=manager.getTransaction();
		Vendor v=manager.find(Vendor.class,vv.getVid());
		if(v==null)
		{
			manager.close();
			return 0;
		}else
		{
			tran.begin();
			v.setInternetKit(v.getInternetKit()+vv.getInternetKit());
			manager.merge(v);
			tran.commit();
			manager.close();
			return 1;
		}
	}
	
	public int updateOrderStockStatus(long oid)
	{
		EntityManager manager=emf.createEntityManager();
		EntityTransaction tran=manager.getTransaction();
		OrderStock os=manager.find(OrderStock.class,oid);
		if(os==null)
		{
			manager.close();
			return 0;
		}else
		{
			tran.begin();
			os.setStatus("true");
			manager.merge(os);
			tran.commit();
			manager.close();
			return 1;
		}
	}

	public int updateLandLineKit(Vendor vv) {
		EntityManager manager=emf.createEntityManager();
		EntityTransaction tran=manager.getTransaction();
		Vendor v=manager.find(Vendor.class,vv.getVid());
		if(v==null)
		{
			manager.close();
			return 0;
		}else
		{
			tran.begin();
			v.setLandlineKit(v.getLandlineKit()+vv.getLandlineKit());
			manager.merge(v);
			tran.commit();
			manager.close();
			return 1;
		}
	}

	public List<Retailer> getAllRetailerDao(long vid) 
	{
		EntityManager manager = emf.createEntityManager();
		Query qry = manager.createQuery("select r from Retailer r where r.vid=?1");
		qry.setParameter(1, vid);
		manager.close();
		return qry.getResultList();	
	}

	public int replaceWithAnotherVendorE(Retailer r) 
	{
		EntityManager manager = emf.createEntityManager();
		EntityTransaction  tran = manager.getTransaction();
		Vendor v = manager.find(Vendor.class,r.getRid());
		if(v == null)
		{
			manager.close();
			return 0;
		}
		else
		{
			Query qry = manager.createQuery("select r.rid from Retailer r where r.vid=?1");
			qry.setParameter(1, r.getRid());
			List<Long> listOfRid = qry.getResultList();
			Iterator<Long> li = listOfRid.iterator();
				tran.begin();
				int internet_kit = v.getInternetKit();
				int landline_kit = v.getLandlineKit();
				Vendor v1 = manager.find(Vendor.class, r.getVid());
				v1.setInternetKit(internet_kit+v1.getInternetKit());
				v1.setLandlineKit(landline_kit+v1.getLandlineKit());
				manager.merge(v1);
				manager.remove(v);
				while(li.hasNext())
				{
					
					qry = manager.createNativeQuery("update retailer_table set vid = ? where rid = ?");
					qry.setParameter(1, r.getVid());
					qry.setParameter(2, li.next());
					System.out.println(qry.executeUpdate());
					
				}
				tran.commit();
				manager.close();
			return 1;
		}
		
	}

	public long getEmpId() {
		
		EntityManager manager = emf.createEntityManager();
		Query qry = manager.createQuery("select v.vid from Vendor v");
		List<Long> list= qry.getResultList();
		manager.close();
		return Collections.max(list);
		
		
		
	}

	public OrderStock getAllOrderStockDetails(long oid) {
		EntityManager manager = emf.createEntityManager();
		Query qry = manager.createQuery("select o from OrderStock o where o.oid=?1");
		qry.setParameter(1,oid);
		List<OrderStock> o= qry.getResultList();
		OrderStock on= new OrderStock();
		for(OrderStock os:o)
		{
			on=os;
		}
		manager.close();
		return on;
	}

	public Vendor getVendor(long vid) {
		EntityManager manager = emf.createEntityManager();
		Query qry = manager.createQuery("select v from Vendor v where v.vid=?1");
		qry.setParameter(1,vid);
		List<Vendor> o= qry.getResultList();
		Vendor vn= new Vendor();
		for(Vendor vnd:o)
		{
			vn=vnd;
		}
		manager.close();
		return vn;
	}

	public Retailer getRetailer(long rid) {
		EntityManager manager = emf.createEntityManager();
		Query qry = manager.createQuery("select r from Retailer r where r.rid=?1");
		qry.setParameter(1,rid);
		List<Retailer> r= qry.getResultList();
		Retailer vn= new Retailer();
		for(Retailer vnd:r)
		{
			vn=vnd;
		}
		manager.close();
		return vn;
	}

	public int updateRetailer(Retailer ro) {
		EntityManager manager=emf.createEntityManager();
		EntityTransaction tran=manager.getTransaction();
		tran.begin();
		manager.merge(ro);
		tran.commit();
		Retailer r=manager.find(Retailer.class,ro.getRid());
		if(r==null)
		{
			manager.close();
			return 0;
		}else
		{
			manager.close();
			return 1;
		}
	}

	public List<Vendor> getVendDetails(long vid) {
		EntityManager manager = emf.createEntityManager();
		Query qry = manager.createQuery("select v from Vendor v where v.vid=?1");
		qry.setParameter(1, vid);
		List<Vendor> li = qry.getResultList();
		manager.close();
		return li;
	}

	public List<OrderStock> getOrdDetails(long vid) {
		EntityManager manager = emf.createEntityManager();
		System.out.println(vid);
		Query qry = manager.createQuery("select os from OrderStock os where os.vid=?1 and os.status='false'");
		qry.setParameter(1, vid);
		List<OrderStock> li = qry.getResultList();
		manager.close();
		return li;
	}

	

}
