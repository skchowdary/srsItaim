package com.itaim.application.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Manufacturer_List")
public class ManufacturerList {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false)
	private int id;

	@Column(name = "Manufacturer_Name", nullable = false)
	private String ManufacturerName;

	public ManufacturerList() {
		super();

	}
	public ManufacturerList(int id, String manufacturerName) {
		super();
		this.id = id;
		ManufacturerName = manufacturerName;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getManufacturerName() {
		return ManufacturerName;
	}
	public void setManufacturerName(String manufacturerName) {
		ManufacturerName = manufacturerName;
	}
	@Override
	public String toString() {
		return "ManufacturerList [id=" + id + ", ManufacturerName=" + ManufacturerName + "]";
	}
}