package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Order;
import com.bean.OrderRequest;
import com.bean.OrderStock;
import com.dao.RetailerDao;


@Service
public class RetailerService 
{
	@Autowired
	RetailerDao dao;
	
	public List<Order> getAllOrderService(long rid)
	{
		return dao.getAllOrder(rid);
	}
	
	public String placeOrderService(long oid)
	{
		int check = dao.checkStock(oid);
		if(check==1)
		{
			int res = dao.placeOrder(oid);
			if(res == 1)
			{
				return "Order Placed";
			}
			else
			{
				return "Order Didnt Placed";
			}
		}
		else if(check == 2)
		{
			return "Order Didnt Placed";
		}
		else
		{
			return "didn't have sufficient stock You Need To Place Order For Vendor for " + check;
		}
	}

//	public String replaceRetailerService(OrderRequest o) 
//	{
//		int res = dao.replaceRetailer(o);		
//		return null;
//	}

	public String placeOrderStockService(OrderStock o)
	{
		String res = dao.placeOrderStock(o);
		return res;
	}
}
