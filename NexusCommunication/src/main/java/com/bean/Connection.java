package com.bean;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Connection {

	@Id
	private long cnid;
	private long cid;
	private long reqplan;
	private LocalDate startdate;
	private LocalDate enddate;
	private String status;
	private double bill;
	private String billstatus;
	public String getBillstatus() {
		return billstatus;
	}
	public void setBillstatus(String billstatus) {
		this.billstatus = billstatus;
	}
	public void setReqplan(long reqplan) {
		this.reqplan = reqplan;
	}
	public long getCnid() {
		return cnid;
	}
	public void setCnid(long cnid) {
		this.cnid = cnid;
	}
	public long getCid() {
		return cid;
	}
	public void setCid(long cid) {
		this.cid = cid;
	}
	public long getReqplan() {
		return reqplan;
	}
	public void setReqPlan(long reqPlan) {
		this.reqplan = reqPlan;
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
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public double getBill() {
		return bill;
	}
	public void setBill(double bill) {
		this.bill = bill;
	}
}
