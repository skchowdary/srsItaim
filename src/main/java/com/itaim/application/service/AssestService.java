package com.itaim.application.service;

import java.util.List;
import java.util.Optional;

import com.itaim.application.domain.AddAssests;

public interface AssestService 
{
	public String saveAssest(AddAssests addAssests);
	public List<AddAssests> getAllAssests();
	public Optional<AddAssests> getAssestBYId(int id);
	public AddAssests updateAssestById(AddAssests addAssests);
	public String deleteAssestById(int id);
}
 