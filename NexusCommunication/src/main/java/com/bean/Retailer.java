package com.bean;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "retailer_table")
public class Retailer 
{
	@Id
	private long rid;
	private int pincode;
	@Column(name = "internet_kit")
	private int internetKit;
	@Column(name = "landline_kit")
	private int landlineKit;
	private long vid;
	
//	@OneToMany(mappedBy="rid",cascade = CascadeType.REMOVE )
//	private List<Customer> listOfCusomer;

	public long getRid() {
		return rid;
	}

	public void setRid(long rid) {
		this.rid = rid;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public int getInternetKit() {
		return internetKit;
	}

	public void setInternetKit(int internetKit) {
		this.internetKit = internetKit;
	}

	public int getLandlineKit() {
		return landlineKit;
	}

	public void setLandlineKit(int landlineKit) {
		this.landlineKit = landlineKit;
	}

	public long getVid() {
		return vid;
	}

	public void setVid(long vid) {
		this.vid = vid;
	}

//	public List<Customer> getListOfCusomer() {
//		return listOfCusomer;
//	}
//
//	public void setListOfCusomer(List<Customer> listOfCusomer) {
//		this.listOfCusomer = listOfCusomer;
//	}

	@Override
	public String toString() {
		return "Retailer [rid=" + rid + ", pincode=" + pincode + ", internetKit=" + internetKit + ", landlineKit="
				+ landlineKit + ", vid=" + vid + ", listOfCusomer="  + "]";
	}
	
}
