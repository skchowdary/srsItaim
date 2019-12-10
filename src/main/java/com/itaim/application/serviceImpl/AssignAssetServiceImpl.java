package com.itaim.application.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itaim.application.domain.AssignAsset;
import com.itaim.application.repository.AssignAssetRepository;
import com.itaim.application.service.AssignAssetService;


@Service
public class AssignAssetServiceImpl implements AssignAssetService
{
	@Autowired
	private AssignAssetRepository repository;
	
	public String saveAssignedAsset(AssignAsset asset) 
	{
		repository.save(asset);
		return "The Assest has been assigned successfully.";
	}

	public List<AssignAsset> getAssignedAsset() 
	{
		return repository.findAll();
	}

	public Optional<AssignAsset> getAssetById(int id)
	{
		return repository.findById(id);
	}

	public AssignAsset updateAssignAsset(AssignAsset asset)
	{
		return repository.save(asset);
	}

	public String deleteAssetById(int id) 
	{
		repository.deleteById(id);
		return "Deleted successfully.";
	}

	public String deleteAllAsset() 
	{
		repository.deleteAll();
		return "Deleted successfully.";
	}



	
}
