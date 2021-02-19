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

	public int updateRouterCount(Vendor vv) {
		EntityManager manager=emf.createEntityManager();
		EntityTransaction tran=manager.getTransaction();
		Vendor v=manager.find(Vendor.class,vv.getVid());
		if(v==null)
		{
			return 0;
		}else
		{
			tran.begin();
			v.setRouter_count(v.getRouter_count()+vv.getRouter_count());
			manager.merge(v);
			tran.commit();
			return 1;
		}
	}

	public int updateWireCount(Vendor vv) {
		EntityManager manager=emf.createEntityManager();
		EntityTransaction tran=manager.getTransaction();
		Vendor v=manager.find(Vendor.class,vv.getVid());
		if(v==null)
		{
			return 0;
		}else
		{
			tran.begin();
			v.setWire_count(v.getWire_count()+vv.getWire_count());
			manager.merge(v);
			tran.commit();
			return 1;
		}
	}

	public int updateLandLCount(Vendor vv) {
		EntityManager manager=emf.createEntityManager();
		EntityTransaction tran=manager.getTransaction();
		Vendor v=manager.find(Vendor.class,vv.getVid());
		if(v==null)
		{
			return 0;
		}else
		{
			tran.begin();
			v.setLand_count(v.getLand_count()+vv.getLand_count());
			manager.merge(v);
			tran.commit();
			return 1;
		}
	}
}
