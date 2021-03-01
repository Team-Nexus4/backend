package com.bean;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "order_stock")
public class OrderStock 
{
	@Id
	private long oid;
	private long rid;
	private long vid;
	@Column(name = "reqested_item")
	private String reqestedItem;
	@Column(name = "requested_stock")
	private String reqestedStock;
	private String status;
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public long getOid() {
		return oid;
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
	public long getVid() {
		return vid;
	}
	public void setVid(long vid) {
		this.vid = vid;
	}
	public String getReqestedItem() {
		return reqestedItem;
	}
	public void setReqestedItem(String reqestedItem) {
		this.reqestedItem = reqestedItem;
	}
	public String getReqestedStock() {
		return reqestedStock;
	}
	public void setReqestedStock(String reqestedStock) {
		this.reqestedStock = reqestedStock;
	}
	@Override
	public String toString() {
		return "OrderStock [oid=" + oid + ", rid=" + rid + ", vid=" + vid + ", reqestedItem=" + reqestedItem
				+ ", reqestedStock=" + reqestedStock + ", status=" + status + "]";
	}
	
	
	
}
