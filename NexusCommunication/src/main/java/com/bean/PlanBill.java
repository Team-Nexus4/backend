package com.bean;

import java.time.LocalDate;

public class PlanBill 
{
	private int duration;
	private float cost;
	private String status;
	private int bill;
	private LocalDate startdate;
	private LocalDate enddate;
	private String billstatus;
	public String getBillstatus() {
		return billstatus;
	}
	public void setBillstatus(String billstatus) {
		this.billstatus = billstatus;
	}
	@Override
	public String toString() {
		return "PlanBill [duration=" + duration + ", cost=" + cost + ", status=" + status + ", bill=" + bill
				+ ", startdate=" + startdate + ", enddate=" + enddate + ", speed=" + speed + ", cnid=" + cnid + "]";
	}
	public int getDuration() {
		return duration;
	}
	public void setDuration(int duration) {
		this.duration = duration;
	}
	public float getCost() {
		return cost;
	}
	public void setCost(float cost) {
		this.cost = cost;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getBill() {
		return bill;
	}
	public void setBill(int bill) {
		this.bill = bill;
	}
	public LocalDate getStartdate() {
		return startdate;
	}
	public void setStartdate(LocalDate startdate) {
		this.startdate = startdate;
	}
	public LocalDate getEnddate() {
		return enddate;
	}
	public void setEnddate(LocalDate enddate) {
		this.enddate = enddate;
	}
	public String getSpeed() {
		return speed;
	}
	public void setSpeed(String speed) {
		this.speed = speed;
	}
	public long getCnid() {
		return cnid;
	}
	public void setCnid(long cnid) {
		this.cnid = cnid;
	}
	private String speed;
	private long cnid;
	
	
}
