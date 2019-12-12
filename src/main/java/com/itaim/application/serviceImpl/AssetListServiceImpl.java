package com.itaim.application.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itaim.application.domain.AssetList;
import com.itaim.application.repository.AssetListRepository;
import com.itaim.application.service.AssetListService;

@Service
public class AssetListServiceImpl implements AssetListService {

	@Autowired
	AssetListRepository assetListRepository;

	public String createAssetType(AssetList list) {
		assetListRepository.save(list);
		return "Asset Type is saved successfully";
	}

	public List<AssetList> getAllAssetType() {

		return assetListRepository.findAll();
	}

	public Optional<AssetList> getAssetById(int id) {
		return assetListRepository.findById(id);
	}

	public AssetList updateById(AssetList list) {

		return assetListRepository.save(list);
	}

	public String DeleteAssetById(int id) {
		assetListRepository.deleteById(id);
		return "Asset Type has been deleted successfully";
	}

}