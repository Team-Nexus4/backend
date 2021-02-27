package com.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name = "tech")
public class Technical
{
	@Id
	private long oid;
	private long rid;
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
	@Override
	public String toString() {
		return "Technical [oid=" + oid + ", rid=" + rid + "]";
	}
	
	
}
