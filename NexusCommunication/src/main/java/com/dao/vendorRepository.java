package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bean.Employee;

public interface vendorRepository extends JpaRepository<Employee, Integer> {

}
