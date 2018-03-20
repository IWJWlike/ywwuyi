package com.iwjw.utils;



import com.iwjw.entity.BaikeList;
import com.iwjw.service.BaikeListService;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;
import java.util.List;


public class PageUtils {
	//页量
	private int pageSize=8;
	//当前页
	private int indexPage=1;
	//总页数
	private int totalPage;
	//总条数
	private int totalCount;
	
	private List<BaikeList> products;
	@Resource
	private BaikeListService baikeListService;
	
	public int getPageSize() {
		return pageSize;
	}

	public List<BaikeList> getEmps() {
		return products;
	}

	public void setTotalPage(int totalPage) {
		this.totalPage = totalPage;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	public void setEmps(List<BaikeList> emps) {
		this.products = products;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getIndexPage() {
		return indexPage;
	}

	public void setIndexPage(int indexPage) {
		this.indexPage = indexPage;
	}

	public int getTotalPage() {
		if (totalCount % pageSize == 0) {
			totalPage = totalCount/pageSize;
		}else {
			totalPage = (totalCount/pageSize)+1;
		}
		return totalPage;
	}

	public int getTotalCount(@RequestParam(value = "plateId",required = false)String plateId) {
		totalCount = baikeListService.getCount(plateId);
		return totalCount;
	}





	
	
	

}
