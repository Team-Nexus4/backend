package com.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="internetplan")
public class InternetPlan {
	@Id
	long planid;
	String speed;
	double cost;
	String duration;
	/**
	 * @return the planid
	 */
	public long getPlanid() {
		return planid;
	}
	/**
	 * @param planid the planid to set
	 */
	public void setPlanid(long planid) {
		this.planid = planid;
	}
	/**
	 * @return the speed
	 */
	public String getSpeed() {
		return speed;
	}
	/**
	 * @param speed the speed to set
	 */
	public void setSpeed(String speed) {
		this.speed = speed;
	}
	/**
	 * @return the cost
	 */
	public double getCost() {
		return cost;
	}
	/**
	 * @param cost the cost to set
	 */
	public void setCost(double cost) {
		this.cost = cost;
	}
	/**
	 * @return the duration
	 */
	public String getDuration() {
		return duration;
	}
	/**
	 * @param duration the duration to set
	 */
	public void setDuration(String duration) {
		this.duration = duration;
	}
	@Override
	public String toString() {
		return "InternetPlan [planid=" + planid + ", speed=" + speed + ", cost=" + cost + ", duration=" + duration
				+ "]";
	}
	public InternetPlan(long planid, String speed, double cost, String duration) {
		super();
		this.planid = planid;
		this.speed = speed;
		this.cost = cost;
		this.duration = duration;
	}
	public InternetPlan() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
