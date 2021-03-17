package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bean.Connection;

public interface ConnectionRepository extends JpaRepository<Connection, Long> 
{
	//select c from Connection c where c.cid=?1 and status like 'active'
	public Connection findByCidAndStatus(long cid,String status);
	
}
