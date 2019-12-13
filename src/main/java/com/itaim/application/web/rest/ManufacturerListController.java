package com.itaim.application.web.rest;

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
	ManufacturerListServiceImpl manufacturerListController;
	
	@RequestMapping(value = "/saveManufacturer", method=RequestMethod.POST)
	public String saveManufacturer(@RequestBody ManufacturerList manufacturer) 
	{
		manufacturerListController.saveManufacturer(manufacturer);
		return "The manufacturer has been saved successfully.";
	}
	@RequestMapping(value = "/GetById/{id}", method=RequestMethod.GET)
	public Optional<ManufacturerList> getManufacturerById(@PathVariable int id)
	{
		return manufacturerListController.getManufacturerById(id);
	}
	@RequestMapping(value="/update/{id}", method=RequestMethod.PUT)
	public ManufacturerList updateById(@RequestBody ManufacturerList manufacturer,@PathVariable int id)
	{
		return manufacturerListController.updateManufacturerById(manufacturer);
	}

	@RequestMapping(value = "/delete/{id}", method=RequestMethod.DELETE)
	public String DeleteManufacturerById(@PathVariable int id) 
	{
		manufacturerListController.DeleteManufacturerById(id);
		return "The manufacturer has been deleted successfully.";
	}

}
