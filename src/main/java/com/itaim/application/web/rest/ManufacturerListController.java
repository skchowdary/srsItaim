package com.itaim.application.web.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itaim.application.domain.ManufacturerList;
import com.itaim.application.serviceImpl.ManufacturerListServiceImpl;



@RestController
public class ManufacturerListController {

	@Autowired
	ManufacturerListServiceImpl manufacturerListServiceImpl;
	
	@RequestMapping(value = "/saveManufacturer", method=RequestMethod.POST)
	public String saveManufacturer(@RequestBody ManufacturerList manufacturer) 
	{
		manufacturerListServiceImpl.saveManufacturer(manufacturer);
		return "The manufacturer has been saved successfully.";
	}
	
	@RequestMapping(value = "/getAllManufacturers", method=RequestMethod.GET)
	public List<ManufacturerList> getAllManufacturer(){
		return manufacturerListServiceImpl.getAllManufacturer();
	}
	
	@RequestMapping(value = "/getById/{id}", method=RequestMethod.GET)
	public Optional<ManufacturerList> getManufacturerById(@PathVariable int id)
	{
		return manufacturerListServiceImpl.getManufacturerById(id);
	}
	
	@RequestMapping(value= "/update/{id}", method=RequestMethod.PUT)
	public ManufacturerList updateById(@RequestBody ManufacturerList manufacturer,@PathVariable int id)
	{
		return manufacturerListServiceImpl.updateManufacturerById(manufacturer);
		
	}

	@RequestMapping(value = "/deletemanufacturer/{id}", method=RequestMethod.DELETE)
	public String DeleteManufacturerById(@PathVariable int id) 
	{
		manufacturerListServiceImpl.DeleteManufacturerById(id);
		return "The manufacturer has been deleted successfully.";
	}

}
