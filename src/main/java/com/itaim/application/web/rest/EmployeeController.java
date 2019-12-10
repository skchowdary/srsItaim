package com.itaim.application.web.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itaim.application.domain.Employee;
import com.itaim.application.serviceImpl.EmployeeServiceImpl;

@RestController
public class EmployeeController 
{
	@Autowired
	EmployeeServiceImpl employeeService;
	
	@RequestMapping(value = "/save", method=RequestMethod.POST)
	public String saveEmployee(@RequestBody Employee employee) 
	{ 
		employeeService.saveEmployee(employee);
		return "Success";
	}
	 
	@RequestMapping(value = "/getEmp", method=RequestMethod.GET)
	public List<Employee> getEmployee() 
	{
		return employeeService.getEmployee();
	}

	@RequestMapping(value = "/emp/{id}", method=RequestMethod.GET)
	public Optional<Employee> getEmployeeById(@PathVariable int id) 
	{
		 return employeeService.getEmployeeById(id);
	}
	  
	@RequestMapping(value = "/updateEmp/{id}",  method=RequestMethod.PUT)
	public Employee updateEmployee(@RequestBody Employee employee, @PathVariable int id)
	{
		return employeeService.updateEmployee(employee);	
	}
	  
	@RequestMapping(value = "/deleteEmp/{id}", method=RequestMethod.DELETE)
	public String deleteEmployee(@PathVariable int id) 
	{
		employeeService.deleteEmployee(id);
		return "The employee has been deleted successfully.";
	}
}
