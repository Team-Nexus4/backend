package com.bean;

public class VendorRegistration 
{
	
	
	private long vid;
	private int internetKit;
	private int landlineKit;
	
	private long eid;
	private String username;
	private String password;
	private String desg;
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
	public long getEid() {
		return eid;
	}
	public void setEid(long eid) {
		this.eid = eid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getDesg() {
		return desg;
	}
	public void setDesg(String desg) {
		this.desg = desg;
	}
	@Override
	public String toString() {
		return "VendorRegistration [vid=" + vid + ", internetKit=" + internetKit + ", landlineKit=" + landlineKit
				+ ", eid=" + eid + ", username=" + username + ", password=" + password + ", desg=" + desg + "]";
	}
	
}
