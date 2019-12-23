package com.itaim.application.web.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itaim.application.domain.ViewAllAsset;
import com.itaim.application.serviceImpl.ViewAllAssetServiceImpl;

@RestController
public class ViewAllAssetController {
  @Autowired
  ViewAllAssetServiceImpl viewAllAssetSericeImpl;
  
	@RequestMapping(value = "/viewAllAsset/getAllTwoTables", method = RequestMethod.GET)
	public List<ViewAllAsset> findByTwoTables(){
		return viewAllAssetSericeImpl.findByTwoTables();
	}
}
