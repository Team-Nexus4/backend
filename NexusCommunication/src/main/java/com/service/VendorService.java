package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Retailer;
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
	
	public String updateInternetKit(Vendor vv) {
		if(vendorDao.updateInternetKit(vv)>0) {
			return "Internet Kit updated successfully";
		}else {
			return "Updating Internet Kit Failed. Try Again......";
		}
	}
	
	
	public String updateLandlineKit(Vendor vv) {
		if(vendorDao.updateLandLineKit(vv)>0) {
			return "Landline Kit updated successfully";
		}else {
			return "Updating Landline Kit Failed. Try Again......";
		}
	}


	public String replaceVendorWithAnotherE(Retailer r) 
	{
		if(vendorDao.replaceWithAnotherVendorE(r)>0) {
			return "Replaced Successfully";
		}else {
			return "Replacd Failed";
		}
	}
}
