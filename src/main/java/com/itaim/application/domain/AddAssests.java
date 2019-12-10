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
@Table(name = "AddAssest")
public class AddAssests implements Serializable
{
	
	private static final long serialVersionUID = 1L;
	
	public static long getSerialversionuid()
	{
		return serialVersionUID;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name = "Id")
	private int id;
	
	@Column(name = "Assest_Type", nullable = false)
	private String assestType;
	
	@Column(name = "Serial_Number", nullable = false)
	private String serialNumber;
	
	@Column(name = "Model_Number", nullable = false)
	private String modelNumber;
	
	@Column(name = "Manufacture", nullable = false)
	private String manufacture;
	
	@Column(name = "Procurement_Date", nullable = false)
	private Date procurementDate;
	
	public AddAssests() 
	{
		super();
	}
	
	public AddAssests(int id, String assestType, String serialNumber, String modelNumber, String manufacture,
			Date procurementDate)
	{
		this.id = id;
		this.assestType = assestType;
		this.serialNumber = serialNumber;
		this.modelNumber = modelNumber;
		this.manufacture = manufacture;
		this.procurementDate = procurementDate;
	}

	public int getId()
	{
		return id;
	}

	public void setId(int id)
	{
		this.id = id;
	}

	public String getAssestType() 
	{
		return assestType;
	}

	public void setAssestType(String assestType) 
	{
		this.assestType = assestType;
	}

	public String getSerialNumber() 
	{
		return serialNumber;
	}

	public void setSerialNumber(String serialNumber) 
	{
		this.serialNumber = serialNumber;
	}

	public String getModelNumber() 
	{
		return modelNumber;
	}

	public void setModelNumber(String modelNumber) 
	{
		this.modelNumber = modelNumber;
	}

	public String getManufacture()
	{
		return manufacture;
	}

	public void setManufacture(String manufacture) 
	{
		this.manufacture = manufacture;
	}

	public Date getProcurementDate()
	{
		return procurementDate;
	}

	public void setProcurementDate(Date procurementDate) 
	{
		this.procurementDate = procurementDate;
	}

	@Override
	public String toString() 
	{
		return "AddAssests [id=" + id + ", assestType=" + assestType + ", serialNumber=" + serialNumber
				+ ", modelNumber=" + modelNumber + ", manufacture=" + manufacture + ", procurementDate="
				+ procurementDate + "]";
	}

	
}
