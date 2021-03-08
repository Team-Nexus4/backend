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
	@Column(name = "requested_item")
	private String requestedItem;
	@Column(name = "requested_stock")
	private int requestedStock;
	@Column(name="status")
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
	public String getRequestedItem() {
		return requestedItem;
	}
	public void setRequestedItem(String reqestedItem) {
		this.requestedItem = reqestedItem;
	}
	public int getRequestedStock() {
		return requestedStock;
	}
	public void setRequestedStock(int reqestedStock) {
		this.requestedStock = reqestedStock;
	}
	@Override
	public String toString() {
		return "OrderStock [oid=" + oid + ", rid=" + rid + ", vid=" + vid + ", reqestedItem=" + requestedItem
				+ ", reqestedStock=" + requestedStock + ", status=" + status + "]";
	}
	
	
	
}
