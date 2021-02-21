package com.bean;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Vendor {
	@Id
	private int vid;
	private int router_count;
	private int wire_count;
	private int land_count;
	public int getVid() {
		return vid;
	}
	public void setVid(int vid) {
		this.vid = vid;
	}
	public int getRouter_count() {
		return router_count;
	}
	public void setRouter_count(int router_count) {
		this.router_count = router_count;
	}
	public int getWire_count() {
		return wire_count;
	}
	public void setWire_count(int wire_count) {
		this.wire_count = wire_count;
	}
	public int getLand_count() {
		return land_count;
	}
	public void setLand_count(int land_count) {
		this.land_count = land_count;
	}
	
	
}
