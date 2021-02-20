package com.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "order_table")
public class Order
{	
	@Id
	private long oid;
	private long rid;
	private long cid;
	private long requested_plan;
	private String status;
	public long getOid() {
		return oid;
	}
	public long getRequested_plan() {
		return requested_plan;
	}
	public void setRequested_plan(long requested_plan) {
		this.requested_plan = requested_plan;
	}
	public void setOid(long oid) {
		this.oid = oid;
	}
	public long getRid() {
		return rid;
	}
	public void setRid(long rid) {
		this.rid = rid;
	}
	public long getCid() {
		return cid;
	}
	public void setCid(long cid) {
		this.cid = cid;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "Order [oid=" + oid + ", rid=" + rid + ", cid=" + cid + ", request=" + requested_plan + ", status=" + status
				+ "]";
	}
	
}
