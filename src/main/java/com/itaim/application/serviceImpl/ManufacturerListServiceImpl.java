package com.itaim.application.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itaim.application.domain.ManufacturerList;
import com.itaim.application.repository.ManufacturerListRepository;
import com.itaim.application.service.ManufacturerListService;


@Service
public class ManufacturerListServiceImpl implements ManufacturerListService{

	@Autowired
	ManufacturerListRepository manufacturerListRepository;

	@Override
	public String saveManufacturer(ManufacturerList list)
	{
		manufacturerListRepository.save(list);
		return "The Manufacturer has been saved successfully.";
	}
	@Override
	public List<ManufacturerList> getAllManufacturer() {
		return manufacturerListRepository.findAll();
	}
	@Override
	public Optional<ManufacturerList> getManufacturerById(int id) {
		return manufacturerListRepository.findById(id);
	}

	@Override
	public ManufacturerList updateManufacturerById(ManufacturerList list) {
		return manufacturerListRepository.save(list);
	}

	@Override
	public String DeleteManufacturerById(int id) {
		manufacturerListRepository.deleteById(id);
		return "The Manufacturer has been deleted successfully.";
	}
	
}
