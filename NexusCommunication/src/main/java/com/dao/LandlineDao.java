package com.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import org.apache.catalina.Manager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bean.LandlinePlan;

@Repository
public class LandlineDao
{
	@Autowired
	EntityManagerFactory emf;
	
	public List<LandlinePlan> getAllLandlinePlan()
	{
		EntityManager manager = emf.createEntityManager();
		Query qry = manager.createQuery("select l from LandlinePlan l");
		return qry.getResultList();
	}
	
	public int addLandlinePlan(LandlinePlan l)
	{
		EntityManager manager = emf.createEntityManager();
		EntityTransaction tran = manager.getTransaction();
		int du = l.getDuration();
		//System.out.println(du);
		Query q2 = manager.createQuery("select l from LandlinePlan l where l.duration=?1");
		q2.setParameter(1, du);
		
		List res = q2.getResultList();
		System.out.println(res);
		//LandlinePlan l1 = manager.find(LandlinePlan.class, du);
		if(res.isEmpty())
		{
			tran.begin();
				manager.persist(l);
			tran.commit();
			return 1;
		}
		else
		{
			return 0;
		}
		
	}
	
	public int deleteLandlinePlan(long lid)
	{
		EntityManager manager = emf.createEntityManager();
		EntityTransaction tran = manager.getTransaction();
		LandlinePlan l = manager.find(LandlinePlan.class, lid);
		if(l==null)
		{
			return 2;
		}
		else
		{
			tran.begin();
				manager.remove(l);
			tran.commit();
			return 1;
		}
	}
}
