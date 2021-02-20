package com.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="landline_plan")
public class LandlinePlan 
{
	@Id
	private long lid;
	private int duration;
	private float coast;
	public long getLid() {
		return lid;
	}
	public void setLid(long lid) {
		this.lid = lid;
	}
	public int getDuration() {
		return duration;
	}
	public void setDuration(int duration) {
		this.duration = duration;
	}
	public float getCoast() {
		return coast;
	}
	public void setCoast(float coast) {
		this.coast = coast;
	}
	@Override
	public String toString() {
		return "LandlinePlan [lid=" + lid + ", duration=" + duration + ", coast=" + coast + "]";
	}
	
}
