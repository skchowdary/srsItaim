package com.itaim.application.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.itaim.application.domain.AddAssests;
import com.itaim.application.repository.AddAssestsRepository;
import com.itaim.application.service.AssestService;

@Service
public class AssestServiceImpl implements AssestService
{
	@Autowired
	AddAssestsRepository addAssestsRepository;

	public String saveAssest(AddAssests addAssests) 
	{
		addAssestsRepository.save(addAssests);
		return "The Assest Has Been Saved Successfully.";
	}

	public List<AddAssests> getAllAssests()
	{
		return 	addAssestsRepository.findAll();
	}

	
	public Optional<AddAssests> getAssestBYId(int id) 
	{
		return addAssestsRepository.findById(id);
	}

	public AddAssests updateAssestById(AddAssests addAssests) 
	{
		return addAssestsRepository.save(addAssests);
	}

	
	public String deleteAssestById(int id) 
	{
		return "The Assests Has Been Deleted Successfully.";
	}

}
