package com.itaim.application.web.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
	
	@RequestMapping(value = "client/save", method=RequestMethod.POST)
//	public String saveClient(@RequestBody Client client) 
//	{
//		clientServiceImpl.saveClient(client);
//		return "The client has been saved successfully.";
//	}
	public ResponseEntity<Boolean> save(@RequestBody Client client) {
	      if (client.getId() == 0) {
	      List<Client> clientList = clientServiceImpl.getAllClients();
	      if (clientList.stream().filter(data -> data.getClientName().equals(client.getClientName())).count()>0) {
	         return new ResponseEntity<Boolean>(false, HttpStatus.ALREADY_REPORTED);
	      }
	      clientServiceImpl.saveClient(client);
	      } else {
	    	  clientServiceImpl.saveClient(client);
	      }
	        return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	 }
	@RequestMapping(value = "client/getAll", method=RequestMethod.GET)
	public List<Client> getAllClients() 
	{
		return clientServiceImpl.getAllClients();
	}
	@RequestMapping(value = "client/{id}", method=RequestMethod.GET)
	public Optional<Client> getClientById(@PathVariable Integer id)
	{
		return clientServiceImpl.getClientById(id);
	}
	@RequestMapping(value = "client/update", method=RequestMethod.PUT)
//	public Client updateById(@RequestBody Client client,@PathVariable Integer id)
//	{
//		return clientServiceImpl.updateById(client);
//	}
	public ResponseEntity<Boolean> update(@RequestBody Client client) {
	      if (client.getId() != 0) {
	      List<Client> clientList = clientServiceImpl.getAllClients();
	      if (clientList.stream().filter(data -> data.getClientName().equals(client.getClientName())).count()>0) {
	         return new ResponseEntity<Boolean>(false, HttpStatus.ALREADY_REPORTED);
	      }
	      clientServiceImpl.saveClient(client);
	      } else {
	    	  clientServiceImpl.saveClient(client);
	      }
	        return new ResponseEntity<Boolean>(true, HttpStatus.OK);
	}
	@RequestMapping(value = "client/{id}", method=RequestMethod.DELETE)
	public String DeleteClientById(@PathVariable Integer id) 
	{
		clientServiceImpl.DeleteClientById(id);
		return "The client has been deleted successfully.";
	}

}
