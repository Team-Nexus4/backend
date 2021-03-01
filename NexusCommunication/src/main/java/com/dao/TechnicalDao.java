package com.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.TransactionManager;
import org.springframework.web.bind.annotation.GetMapping;

import com.bean.LandlinePlan;
import com.bean.Order;
import com.bean.Technical;

@Repository
public class TechnicalDao {
@Autowired
EntityManagerFactory emf;

public List<Technical> displayTechnical(){
	EntityManager manager = emf.createEntityManager();
	Query qry = manager.createQuery("select t from Technical t");
	return qry.getResultList();
}

public String placedOrderByTechnical(long oid) {

	EntityManager manager = emf.createEntityManager();
	EntityTransaction tran = manager.getTransaction();
	Order o = manager.find(Order.class, oid);
	if(o==null)
	{
		return "Order is not present in database";
	}
	else
	{
		o.setStatus("true");
		System.out.println("check 1");
		tran.begin();
			manager.merge(o);
		tran.commit();
		return "Order Placed Success by Technical Person";
	}
}


}
