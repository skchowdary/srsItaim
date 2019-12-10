package com.itaim.application.web.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.itaim.application.domain.Client;
import com.itaim.application.serviceImpl.ClientServiceImpl;

@RestController
public class ClientController 
{
	@Autowired
	ClientServiceImpl clientServiceImpl;
	
	@RequestMapping(value = "/saveClient", method=RequestMethod.POST)
	public String saveClient(@RequestBody Client client) 
	{
		clientServiceImpl.saveClient(client);
		return "The client has been saved successfully.";
	}
	
	@RequestMapping(value = "/getAll", method=RequestMethod.GET)
	public List<Client> getAllClients() 
	{
		return clientServiceImpl.getAllClients();
	}
	@RequestMapping(value = "/GetById{id}", method=RequestMethod.GET)
	public Optional<Client> getClientById(@PathVariable int id)
	{
		return clientServiceImpl.getClientById(id);
	}
	@RequestMapping(value = "/update{id}", method=RequestMethod.PUT)
	public Client updateById(@RequestBody Client client,@PathVariable int id)
	{
		return clientServiceImpl.updateById(client);
	}
	@RequestMapping(value = "/delete{id}", method=RequestMethod.DELETE)
	public String DeleteClientById(@PathVariable int id) 
	{
		clientServiceImpl.DeleteClientById(id);
		return "The client has been deleted successfully.";
	}

}
