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
			return 0;
		}else
		{
			return 1;
		}
	}
	
	public int deleteVendorInfo(int vid) {
		EntityManager manager = emf.createEntityManager();
		EntityTransaction tran = manager.getTransaction();
		Vendor v = manager.find(Vendor.class,vid);
		if(v==null)
		{
			return 0;
		}
		else
		{
			tran.begin();
			manager.remove(v);
			tran.commit();
			return 1;
		}
	}

	public int updateInternetKit(Vendor vv) {
		EntityManager manager=emf.createEntityManager();
		EntityTransaction tran=manager.getTransaction();
		Vendor v=manager.find(Vendor.class,vv.getVid());
		if(v==null)
		{
			return 0;
		}else
		{
			tran.begin();
			v.setInternetKit(v.getInternetKit()+vv.getInternetKit());
			manager.merge(v);
			tran.commit();
			return 1;
		}
	}

	public int updateLandLineKit(Vendor vv) {
		EntityManager manager=emf.createEntityManager();
		EntityTransaction tran=manager.getTransaction();
		Vendor v=manager.find(Vendor.class,vv.getVid());
		if(v==null)
		{
			return 0;
		}else
		{
			tran.begin();
			v.setLandlineKit(v.getLandlineKit()+vv.getLandlineKit());
			manager.merge(v);
			tran.commit();
			return 1;
		}
	}

	public List<Retailer> getAllRetailerDao(long vid) 
	{
		EntityManager manager = emf.createEntityManager();
		Query qry = manager.createQuery("select r from Retailer r where r.vid=?1");
		qry.setParameter(1, vid);
		return qry.getResultList();	
	}

	public int replaceWithAnotherVendorE(Retailer r) 
	{
		EntityManager manager = emf.createEntityManager();
		EntityTransaction  tran = manager.getTransaction();
		Vendor v = manager.find(Vendor.class,r.getRid());
		if(v == null)
			return 0;
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
			return 1;
		}
		
	}

	public long getEmpId() {
		
		EntityManager manager = emf.createEntityManager();
		Query qry = manager.createQuery("select v.vid from Vendor v");
		List<Long> list= qry.getResultList();
		return Collections.max(list);
		
		
		
	}

	

}
