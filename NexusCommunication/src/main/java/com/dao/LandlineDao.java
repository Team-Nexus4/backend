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
		
		List<LandlinePlan> li = qry.getResultList();
		manager.close();
		return li;
	}
	
	public int addLandlinePlan(LandlinePlan l)
	{
		EntityManager manager = emf.createEntityManager();
		EntityTransaction tran = manager.getTransaction();
		int du = l.getDuration();
		Query q2 = manager.createQuery("select l from LandlinePlan l where l.duration=?1");
		q2.setParameter(1, du);
		
		List res = q2.getResultList();

		if(res.isEmpty())
		{
			tran.begin();
				manager.persist(l);
			tran.commit();
			manager.close();
			return 1;
		}
		else
		{
			manager.close();
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
			manager.close();
			return 2;
		}
		else
		{
			tran.begin();
				manager.remove(l);
			tran.commit();
			manager.close();
			return 1;
		}
	}
	
	public int updateLandlinePlan(LandlinePlan l)
	{
		EntityManager manager = emf.createEntityManager();
		EntityTransaction tran = manager.getTransaction();
		LandlinePlan l1 = manager.find(LandlinePlan.class, l.getLid());

		if(l1==null)
		{
			manager.close();
			return 2;
		}
		else
		{
			l1.setDuration(l.getDuration());
			l1.setCoast(l.getCost());
			tran.begin();
				manager.merge(l1);
			tran.commit();
			manager.close();
			return 1;
		}
	}
}
