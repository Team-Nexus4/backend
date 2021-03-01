package com.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "retailer_mapping")
public class RetailerMapping
{
	@Id
	private long rid;
	
	private int pincode;
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
	@Override
	public String toString() {
		return "RetailerMapping [rid=" + rid + ", pincode=" + pincode + "]";
	}
	
}
