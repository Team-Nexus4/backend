package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bean.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
