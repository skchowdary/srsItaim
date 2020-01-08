package com.itaim.application.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.itaim.application.domain.ViewAllAsset;
import com.itaim.application.repository.ViewAllAssetRepository;
import com.itaim.application.service.ViewAllAssetService;

@Service
@Transactional
public class ViewAllAssetServiceImpl implements  ViewAllAssetService{
	
	@Autowired
	ViewAllAssetRepository viewAllAssetRepository;

	@Override
	public List<ViewAllAsset> findByTwoTables() {
		return viewAllAssetRepository.findByTwoTables();
	}
}
