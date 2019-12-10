package com.itaim.application.web.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itaim.application.domain.AssignAsset;
import com.itaim.application.serviceImpl.AssignAssetServiceImpl;

@RestController
public class AssignAssetController 
{
	@Autowired
	AssignAssetServiceImpl service;

	@RequestMapping(value = "/asset/save", method = RequestMethod.POST)
	public String save(@RequestBody AssignAsset asset)
	{
		service.saveAssignedAsset(asset);
		return "Assets are Assigned and saved";
	}

	@RequestMapping(value = "/asset/all", method = RequestMethod.GET)
	public List<AssignAsset> getAssignedAsset()
	{
		return service.getAssignedAsset();
	}

	@RequestMapping(value = "/asset/{id}", method = RequestMethod.GET)
	public AssignAsset getAssetById(@PathVariable int id) throws Exception 
	{
		Optional<AssignAsset> asset = service.getAssetById(id);
		if (!asset.isPresent())
			throw new Exception("Could not find asset with id- " + id);
		return asset.get();
	}

	@RequestMapping(value = "/asset/update/{id}", method = RequestMethod.PUT)
	public AssignAsset update(@RequestBody AssignAsset updasset, @PathVariable int id) throws Exception 
	{
		Optional<AssignAsset> asset = service.getAssetById(id);
		if (!asset.isPresent())
			throw new Exception("Could not find asset with id- " + id);
		// Required for the "where" clause in the sql query template.
		updasset.setId(id);
		return service.updateAssignAsset(updasset);
	}

	@RequestMapping(value = "/asset/delete/{id}", method = RequestMethod.DELETE)
	public String deleteAssetById(@PathVariable int id) throws Exception 
	{
		Optional<AssignAsset> asset = service.getAssetById(id);
		if (!asset.isPresent())
			throw new Exception("Could not find asset with id- " + id);

		service.deleteAssetById(id);
		return "DEleted Successfully.";
	}

	@RequestMapping(value = "/asset/deleteall", method = RequestMethod.DELETE)
	public String deleteAll() 
	{
		service.deleteAllAsset();
		return "The assest has been deleted successfully.";
	}

}
