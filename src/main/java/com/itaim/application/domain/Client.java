package com.itaim.application.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Clients")
public class Client 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false)
	private int id;
	
	@Column(name = "client_Name", nullable = false)
	private String clientName;
	
	public Client() 
	{
		super();
	}
	
	public Client(int id, String clientName) 
	{
		this.id = id;
		this.clientName = clientName;
	}
	
	public int getId() 
	{
		return id;
	}
	
	public void setId(int id) 
	{
		this.id = id;
	}
	
	public String getClientName()
	{
		return clientName;
	}
	
	public void setClientName(String clientName) 
	{
		this.clientName = clientName;
	}
	
	@Override
	public String toString() 
	{
		return "Client [id=" + id + ", clientName=" + clientName + "]";
	}
}
