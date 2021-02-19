package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Vendor;
import com.dao.VendorDao;
//import com.dao.VendorRepository;

@Service
public class VendorService {
	@Autowired
	VendorDao vendorDao;
	public List<Vendor> getAllVendor()
	{
		return vendorDao.getAllVendorDetails();
	}
	
	public String addVendor(Vendor vv) {
		if(vendorDao.addVendorInfo(vv)>0) {
			return "Vendor added successfully";
		}else {
			return "Adding Vendor Failed";
		}
	}
	
	public String deleteVendor(int pid) {
		if(vendorDao.deleteVendorInfo(pid)>0) {
			return "Vendor Record deleted successfully";
		}else {
			return "Vendor Record didn't find. Try Again......";
		}
	}
	
	public String updateRouterCount(Vendor vv) {
		if(vendorDao.updateRouterCount(vv)>0) {
			return "Router Count updated successfully";
		}else {
			return "Updating Rounter Count Failed. Try Again......";
		}
	}
	
	public String updateWireCount(Vendor vv) {
		if(vendorDao.updateWireCount(vv)>0) {
			return "Wire Count updated successfully";
		}else {
			return "Updating Wire Count Failed. Try Again......";
		}
	}
	
	public String updateLandLCount(Vendor vv) {
		if(vendorDao.updateLandLCount(vv)>0) {
			return "Land Line Count updated successfully";
		}else {
			return "Updating Land Line Count Failed. Try Again......";
		}
	}
}
