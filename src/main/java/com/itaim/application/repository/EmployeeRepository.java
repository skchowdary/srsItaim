package com.itaim.application.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.itaim.application.domain.Employee;

@Repository
public interface EmployeeREpository extends JpaRepository<Employee, Integer>
{
	
}
