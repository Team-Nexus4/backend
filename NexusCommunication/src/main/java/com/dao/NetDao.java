package com.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bean.InternetPlan;


@Repository
public class NetDao {

	@Autowired
	EntityManagerFactory emf;

	public List<InternetPlan> getAllPlan() {
		EntityManager manager = emf.createEntityManager();
		Query qry = manager.createQuery("select e from InternetPlan e");
		List<InternetPlan> listOfPlan = qry.getResultList();
		manager.close();
		return listOfPlan;

	}

	public int storePlan(InternetPlan i) {

		EntityManager manager = emf.createEntityManager();
		EntityTransaction tran = manager.getTransaction();
		InternetPlan p1 = manager.find(InternetPlan.class, i.getIid());
		if (p1 == null) {
			tran.begin();
			manager.persist(i);
			tran.commit();
			InternetPlan p2 = manager.find(InternetPlan.class, i.getIid());
			if (p2 == null) {
				manager.close();
				return 0;
			} else {
				manager.close();
				return 1;
			}
		} else {
			manager.close();
			return 2;
		}
	}

	public int deletePlan(long planid) {
		try {
			EntityManager manager = emf.createEntityManager();
			EntityTransaction tran = manager.getTransaction();

			InternetPlan p = manager.find(InternetPlan.class, planid); 												
			if (p == null) {
				manager.close();
				return 0;
			} else {
				tran.begin();
				manager.remove(p);
				tran.commit();
				manager.close();
				return 1;
			}
		} catch (Exception e) {
			return 0;
		}
	}

	public int updatePlan(InternetPlan i) {
		try {
			EntityManager manager = emf.createEntityManager();
			EntityTransaction tran = manager.getTransaction();

			InternetPlan p = manager.find(InternetPlan.class, i.getIid()); 
			if (p == null) {
				manager.close();
				return 0;
			} else {
				tran.begin();
				p.setCost(i.getCost());
				p.setDuration(i.getDuration());
				p.setSpeed(i.getSpeed());
				manager.merge(p); 
				tran.commit();
				manager.close();
				return 1;
			}
		} catch (Exception e) {
			return 0;
		}
	}

}
