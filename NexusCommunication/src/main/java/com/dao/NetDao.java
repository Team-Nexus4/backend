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
		System.out.println(i);
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

			InternetPlan p = manager.find(InternetPlan.class, planid); // primary key if record is available automatically												// convert record to object
			if (p == null) { // select * from product where pid =1
				manager.close();
				return 0;
			} else {
				tran.begin();
				manager.remove(p); // delete from product where pid = 1;
				tran.commit();
				manager.close();
				return 1;
			}
		} catch (Exception e) {
			// TODO: handle exception
			
			return 0;
		}
	}

	public int updatePlan(InternetPlan i) {
		try {
			EntityManager manager = emf.createEntityManager();
			EntityTransaction tran = manager.getTransaction();

			InternetPlan p = manager.find(InternetPlan.class, i.getIid()); // primary key
			if (p == null) {
				manager.close();
				return 0;
			} else {
				tran.begin();
				p.setCost(i.getCost());
				p.setDuration(i.getDuration());
				p.setSpeed(i.getSpeed());
				manager.merge(p); // update price using pid column
				tran.commit();
				manager.close();
				return 1;
			}
		} catch (Exception e) {
			// TODO: handle exception
			return 0;
		}
	}

}
