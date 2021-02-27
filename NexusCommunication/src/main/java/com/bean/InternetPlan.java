package com.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="internet_plan")
public class InternetPlan {
	@Id
	long iid;
	String speed;
	float cost;
	String duration;

	public long getIid() {
		return iid;
	}

	public void setPlanid(long iid) {
		this.iid = iid;
	}

	public String getSpeed() {
		return speed;
	}

	public void setSpeed(String speed) {
		this.speed = speed;
	}

	public float getCost() {
		return cost;
	}

	public void setCost(float cost) {
		this.cost = cost;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}
	@Override
	public String toString() {
		return "InternetPlan [planid=" + iid + ", speed=" + speed + ", cost=" + cost + ", duration=" + duration
				+ "]";
	}
	public InternetPlan(long planid, String speed, float cost, String duration) {
		super();
		this.iid = planid;
		this.speed = speed;
		this.cost = cost;
		this.duration = duration;
	}
	public InternetPlan() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
