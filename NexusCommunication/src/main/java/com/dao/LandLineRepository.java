package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bean.LandlinePlan;

public interface LandLineRepository extends JpaRepository<LandlinePlan, Long> {

}
