package com.bean;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Vendor {
	@Id
	private long vid;
	@Column(name="internet_kit")
	private int internetKit;
	@Column(name="landline_kit")
	private int landlineKit;
	

	
	public long getVid() {
		return vid;
	}
	public void setVid(long vid) {
		this.vid = vid;
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
	@Override
	public String toString() {
		return "Vendor [vid=" + vid + ", internetKit=" + internetKit + ", landlineKit=" + landlineKit
				+ ", listOfretailer=" +  "]";
	}
	
	
	
}
