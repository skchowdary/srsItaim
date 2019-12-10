package com.itaim.application.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itaim.application.domain.Employee;
import com.itaim.application.repository.EmployeeREpository;
import com.itaim.application.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService
{
	@Autowired
	EmployeeREpository employeerepository;
	
	public String saveEmployee(Employee employee)
	{   
		employeerepository.save(employee);
		return "The employee has been saved successfully.";
		
	}

	public List<Employee> getEmployee() 
	{
		return employeerepository.findAll();
	}

	public Optional<Employee> getEmployeeById(int id) 
	{
		return employeerepository.findById(id);
	}

	public Employee updateEmployee(Employee employee)
	{
		return employeerepository.saveAndFlush(employee);	
	}

	public String deleteEmployee(int id) 
	{
		employeerepository.deleteById(id);
		return "THe employee record has been deleted successfully.";
	}
}
	
