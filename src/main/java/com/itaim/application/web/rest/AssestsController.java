package com.itaim.application.web.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itaim.application.domain.AddAssests;
import com.itaim.application.serviceImpl.AssestServiceImpl;

@RestController
public class AssestsController 
{
	@Autowired
	AssestServiceImpl assestServiceImpl;
	
	@RequestMapping(value="/addAssest/save", method=RequestMethod.POST)
	public String saveAssest(@RequestBody AddAssests addAssests)
	{
		assestServiceImpl.saveAssest(addAssests);
		return "Assests Has Been Added Successfully.";
	}
	
	@RequestMapping(value="/addAssest/getAll", method=RequestMethod.GET)
	public List<AddAssests> getAllAssests()
	{
		System.out.println("done");
		return assestServiceImpl.getAllAssests();		
	}
	
	@RequestMapping(value="/addAssest/getById/{id}", method=RequestMethod.GET)
	public Optional<AddAssests> getAssestBYId(int id)
	{
		return assestServiceImpl.getAssestBYId(id);
	}
	
	@RequestMapping(value="/addAssest/update/{id}", method=RequestMethod.PUT)
	public AddAssests updateAssestById(@RequestBody AddAssests addAssests, @PathVariable int id)
	{
		return assestServiceImpl.updateAssestById(addAssests);
	}
	
	@RequestMapping(value="/addAssest/deleteById/{id}", method=RequestMethod.DELETE)
	public String deleteAssestById(int id)
	{
		return "The Assest Has Been Deleted Successfully.";
	}
}
