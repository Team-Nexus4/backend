package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bean.InternetPlan;

public interface NetRepository extends JpaRepository<InternetPlan, Long> {

}
