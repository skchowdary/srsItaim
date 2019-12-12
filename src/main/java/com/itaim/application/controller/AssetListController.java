package com.itaim.application.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itaim.application.domain.AssetList;
import com.itaim.application.serviceImpl.AssetListServiceImpl;
@RestController
public class AssetListController {

	@Autowired
	AssetListServiceImpl assetListService;

	@RequestMapping(value = "/createAssetList", method = RequestMethod.POST)
	public String createAssetList(@RequestBody AssetList list) {
		assetListService.createAssetType(list);
		return "Asset List Saved Successfully";
	}

	@RequestMapping(value = "/getAssetlist", method = RequestMethod.GET)
	public List<AssetList> getAllAssetList() {
		return assetListService.getAllAssetType();
	}

	@RequestMapping(value = "/getAsetById/{id}", method = RequestMethod.GET)
	public Optional<AssetList> getAssetById(@PathVariable int id) {
		return assetListService.getAssetById(id);

	}

	@RequestMapping(value = "/updateAssetById/{id}", method = RequestMethod.PUT)
	public AssetList updateById(@RequestBody AssetList list, @PathVariable int id) {
		return assetListService.updateById(list);

	}

	@RequestMapping(value = "/deleteAssetById/{id}", method = RequestMethod.DELETE)
	public String deleteAssetById(@PathVariable int id) {
		assetListService.DeleteAssetById(id);
		return "Asset Delete successfully by its Id";

	}

}
