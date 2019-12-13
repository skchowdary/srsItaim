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

import com.itaim.application.domain.AddAsset;
import com.itaim.application.serviceImpl.AddAssetServiceImpl;

@RestController
public class AddAssetController {
	@Autowired
	AddAssetServiceImpl assetServiceImpl;

	@RequestMapping(value = "/addAsset/save", method = RequestMethod.POST)
//	public void saveAssest(@RequestBody AddAsset addAssests)
//	{
//		System.out.println("Asset added sucessfully");
//		assestServiceImpl.saveAssest(addAssests);
//	}
	public ResponseEntity<Boolean> save(@RequestBody AddAsset addAsset) {
		if (addAsset.getId() == 0) {
			List<AddAsset> addAssetList = assetServiceImpl.getAllAssests();
			if (addAssetList.stream().filter(data -> data.getSerialNumber().equals(addAsset.getSerialNumber()))
					.count() > 0) {
				return new ResponseEntity<Boolean>(false, HttpStatus.ALREADY_REPORTED);
			}
			assetServiceImpl.saveAssest(addAsset);
		} else {
			assetServiceImpl.saveAssest(addAsset);
		}
		return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}

	@RequestMapping(value = "/addAsset/getAll", method = RequestMethod.GET)
	public List<AddAsset> getAllAssests() {
		System.out.println("get All Assets");
		return assetServiceImpl.getAllAssests();
	}

	@RequestMapping(value = "/addAsset/getById/{id}", method = RequestMethod.GET)
	public Optional<AddAsset> getAssestById(int id) {
		return assetServiceImpl.getAssestById(id);
	}

	@RequestMapping(value = "/addAsset/update/{id}", method = RequestMethod.PUT)
	public AddAsset updateAssestById(@RequestBody AddAsset addAssests, @PathVariable int id) {
		return assetServiceImpl.updateAssestById(addAssests);
	}

	@RequestMapping(value = "/addAsset/deleteById/{id}", method = RequestMethod.DELETE)
	public String deleteAssestById(int id) {
		return "The Assest Has Been Deleted Successfully.";
	}
}
