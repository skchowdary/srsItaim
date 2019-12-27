package com.itaim.application.web.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itaim.application.domain.AssignAsset;
import com.itaim.application.domain.Employee;
import com.itaim.application.serviceImpl.AssignAssetServiceImpl;

@RestController
public class AssignAssetController 
{
	@Autowired
	AssignAssetServiceImpl service;

	@RequestMapping(value = "/assignAsset/save", method = RequestMethod.POST)
//	public String save(@RequestBody AssignAsset asset)
//	{
//		service.saveAssignedAsset(asset);
//		return "Assets are Assigned and saved";
//	}
	public ResponseEntity<Boolean> save(@RequestBody AssignAsset assignAsset) {
//	      if (assignAsset.getId() == 0) {
//	      List<AssignAsset> assignList = service.getAssignedAsset();
//	      if (assignList.stream().filter(data -> data.getSerialNumber().equals(assignAsset.getSerialNumber())).count() > 0) {
//	         return new ResponseEntity<Boolean>(false, HttpStatus.ALREADY_REPORTED);
//	      }
//	      service.saveAssignedAsset(assignAsset);
//	      } else {
//	    	  service.saveAssignedAsset(assignAsset);
//	      }
		    service.saveAssignedAsset(assignAsset);
	        return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	 }
	@RequestMapping(value = "/assignAsset/getAll", method = RequestMethod.GET)
	public List<AssignAsset> getAssignedAsset()
	{
		return service.getAssignedAsset();
	}

	@RequestMapping(value = "/assignAsset/{id}", method = RequestMethod.GET)
	public AssignAsset getAssetById(@PathVariable int id) throws Exception 
	{
		Optional<AssignAsset> asset = service.getAssetById(id);
		if (!asset.isPresent())
			throw new Exception("Could not find asset with id- " + id);
		return asset.get();
	}

	@RequestMapping(value = "/assignAsset/update", method = RequestMethod.PUT)
//	public AssignAsset update(@RequestBody AssignAsset updasset, @PathVariable int id) throws Exception 
//	{
//		Optional<AssignAsset> asset = service.getAssetById(id);
//		if (!asset.isPresent())
//			throw new Exception("Could not find asset with id- " + id);
//		// Required for the "where" clause in the sql query template.
//		updasset.setId(id);
//		return service.updateAssignAsset(updasset);
//	}
	public ResponseEntity<Boolean> update(@RequestBody AssignAsset assign) {
		         service.saveAssignedAsset(assign);
	        return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}

	@RequestMapping(value = "/assignAsset/delete/{id}", method = RequestMethod.DELETE)
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
	
	@RequestMapping(value = "/assignAsset/getallbystatus/{status}", method = RequestMethod.GET)
	public List<AssignAsset> findByStatus(@PathVariable String status) {
		return service.findByStatus(status);
	}
}
