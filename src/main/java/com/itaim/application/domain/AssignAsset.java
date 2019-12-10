package com.itaim.application.domain;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="AssignAsset")
public class AssignAsset implements Serializable
{
	private static final long serialVersionUID = 1L;

	public static long getSerialversionuid() 
	{
		return serialVersionUID;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="Id")
	private int id;
	
	@Column(name="Asset_Type", nullable = false)
	private String assetType;
	
	@Column(name="Serial_Number", nullable = false)
	private String serialNumber;
	
	@Column(name="Assign_To", nullable = false)
	private  String assignTo;
	
	@Column(name="Assignment_Date",nullable = false)
	private Date assignmentDate;
	
	public AssignAsset()
	{
		super();
	}
	
	public AssignAsset(int id, String assetType, String serialNumber, String assignTo, Date assignmentDate)
	{
		this.id = id;
		this.assetType = assetType;
		this.serialNumber = serialNumber;
		this.assignTo = assignTo;
		this.assignmentDate = assignmentDate;
	}

	public int getId() 
	{
		return id;
	}

	public void setId(int id)
	{
		this.id = id;
	}

	public String getAssetType()
	{
		return assetType;
	}

	public void setAssetType(String assetType)
	{
		this.assetType = assetType;
	}

	public String getSerialNumber()
	{
		return serialNumber;
	}

	public void setSerialNumber(String serialNumber) 
	{
		this.serialNumber = serialNumber;
	}

	public String getAssignTo() 
	{
		return assignTo;
	}

	public void setAssignTo(String assignTo) 
	{
		this.assignTo = assignTo;
	}

	public Date getAssignmentDate() 
	{
		return assignmentDate;
	}

	public void setAssignmentDate(Date assignmentDate) 
	{
		this.assignmentDate = assignmentDate;
	}

	@Override
	public String toString() 
	{
		return "AssignAsset [id=" + id + ", assetType=" + assetType + ", serialNumber=" + serialNumber + ", assignTo="
				+ assignTo + ", assignmentDate=" + assignmentDate + "]";
	}
}
