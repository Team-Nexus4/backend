package com.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bean.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long>{

}
