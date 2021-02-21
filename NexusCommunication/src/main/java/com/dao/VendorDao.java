package com.dao;

import java.util.List;

import javax.persistence.Query;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

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

}
