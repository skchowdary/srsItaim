package com.itaim.application.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.itaim.application.domain.Client;
import com.itaim.application.repository.ClientRepository;
import com.itaim.application.service.ClientService;

@Service
@Transactional
public class ClientServiceImpl implements ClientService 
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

	public void deleteById(Integer id) {
	  clientRepository.deleteById(id);	
	}
}
