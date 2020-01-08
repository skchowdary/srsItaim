package com.itaim.application.web.rest;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
	private static final Logger Logger = LoggerFactory.getLogger(AssetListController .class);

	@Autowired
	AssetListServiceImpl assetListService;

	@RequestMapping(value = "/assetList/save", method = RequestMethod.POST)
	public String createAssetList(@RequestBody AssetList list) {
		Logger.info("request for save data in assetList", list);
		assetListService.createAssetType(list);
		return "Asset List Saved Successfully";
	}

	@RequestMapping(value = "/assetList/getAll", method = RequestMethod.GET)
	public List<AssetList> getAllAssetList() {
		Logger.info("request for fetchall data from assetList");
		return assetListService.getAllAssetType();
	}

	@RequestMapping(value = "/getAsetById/{id}", method = RequestMethod.GET)
	public Optional<AssetList> getAssetById(@PathVariable int id) {
		Logger.info("request for fetch data from assetList by id",id);
		return assetListService.getAssetById(id);

	}

	@RequestMapping(value = "/updateAssetById/{id}", method = RequestMethod.PUT)
	public AssetList updateById(@RequestBody AssetList list, @PathVariable int id) {
		Logger.info("request for save data to assetList by Id",list);
		return assetListService.updateById(list);

	}

	@RequestMapping(value = "/deleteAssetById/{id}", method = RequestMethod.DELETE)
	public String deleteAssetById(@PathVariable int id) {
		Logger.debug("request for delete data from assetList by Id",id);
		assetListService.DeleteAssetById(id);
		return "Asset Delete successfully by its Id";
	}

}
