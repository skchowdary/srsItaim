package com.itaim.application.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.itaim.application.domain.Client;
import com.itaim.application.repository.ClientRepository;
import com.itaim.application.service.CLientService;

@Service
public class ClientServiceImpl implements CLientService 
{
	@Autowired
	ClientRepository clientRepository;
	
	public String saveClient(Client client) 
	{
		clientRepository.save(client);
		return "The client has been saved successfully.";
	}

	public List<Client> getAllClients() 
	{
		return clientRepository.findAll();
	}

	public Optional<Client> getClientById(int id)
	{
		return clientRepository.findById(id);
	}

	public Client updateById(Client client)
	{
		return clientRepository.save(client);
	}

	public String DeleteClientById(int id) 
	{
		clientRepository.deleteById(id);
		return "The client has been deleted successfully.";
	}
}
