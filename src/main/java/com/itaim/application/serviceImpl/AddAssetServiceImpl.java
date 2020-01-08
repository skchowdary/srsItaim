package com.itaim.application.serviceImpl;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.itaim.application.domain.AddAsset;
import com.itaim.application.repository.AddAssetRepository;
import com.itaim.application.service.AddAssetService;

@Service
@Transactional
public class AddAssetServiceImpl implements AddAssetService
{
	@Autowired
	AddAssetRepository addAssetRepository;

	public void saveAssest(AddAsset addAssests) 
	{
		addAssetRepository.save(addAssests);
	}

	public List<AddAsset> getAllAssests()
	{
		return 	addAssetRepository.findAll();
	}

	public Optional<AddAsset> getAssestById(int id) 
	{
		return addAssetRepository.findById(id);
	}

	public AddAsset updateAssestById(AddAsset addAssests) 
	{
		return addAssetRepository.save(addAssests);
	}
	
	public String deleteAssestById(int id) 
	{
		return "The Assests Has Been Deleted Successfully.";
	}
	
	public List<String> findSerailNum(String assetType) {
		return addAssetRepository.findSerailNum(assetType);
	}

}
