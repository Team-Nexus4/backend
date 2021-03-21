package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bean.Connection;

public interface ConnectionRepository extends JpaRepository<Connection, Long> 
{	
}
