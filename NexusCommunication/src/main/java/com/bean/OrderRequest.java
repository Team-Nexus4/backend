package com.bean;

public class OrderRequest
{
	private long cid;
	private int pincode;
	private long requested_plan;
	public long getCid() {
		return cid;
	}
	public void setCid(long cid) {
		this.cid = cid;
	}
	public int getPincode() {
		return pincode;
	}
	public void setPincode(int pincode) {
		this.pincode = pincode;
	}
	public long getRequested_plan() {
		return requested_plan;
	}
	public void setRequested_plan(long requested_plan) {
		this.requested_plan = requested_plan;
	}
	@Override
	public String toString() {
		return "OrderRequest [cid=" + cid + ", pincode=" + pincode + ", requested_plan=" + requested_plan + "]";
	}
}
