package com.itaim.application.service;

import java.util.List;
import java.util.Optional;

import com.itaim.application.domain.Client;

public interface CLientService
{
	public String saveClient(Client client);
	public List<Client> getAllClients();
	public Optional<Client> getClientById(int id);
	public Client updateById(Client client);
	public String DeleteClientById(int id);
}
