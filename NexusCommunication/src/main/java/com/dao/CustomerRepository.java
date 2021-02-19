package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bean.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long>{

}
