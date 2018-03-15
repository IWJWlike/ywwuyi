package com.iwjw.controllers;

import com.iwjw.entity.BaikeList;
import com.iwjw.entity.Estate;
import com.iwjw.entity.HouseImage;
import com.iwjw.entity.Secondary;
import com.iwjw.service.BaikeListService;
import com.iwjw.service.HouseImgListService;
import org.jboss.logging.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;


@Controller
@RequestMapping("saleController")
public class SaleController {

    @Resource
    HouseImgListService houseImgListService;

    //去详情页
    @RequestMapping("goSale")
    public  String goSale(Model model, HttpServletResponse response, HttpServletRequest request){
        //获取房子信息
        List<HouseImage> lists = houseImgListService.getHouseImgList("1");
        //获取房子户型信息
        List<HouseImage> lists2 = houseImgListService.getHouseImgList2("1");
        //房子图片放入会话
        request.getSession().setAttribute("imgLists",lists);
        //房子户型图片放入会话
        request.getSession().setAttribute("imgLists2",lists2);
        //根据房id获取房屋信息
        Secondary secondary= houseImgListService.getHouseById("1");
        //根据房id获取房子所在小区信息
        Estate estate=houseImgListService.getEstateByHouseId("1");
        //房子朝向
        String houseFace=houseImgListService.getHouseFaceByHouseId("1");
        //把房信息放进当前会话
        request.getSession().setAttribute("secondary",secondary);
        //把小区信息放进当前会话
        request.getSession().setAttribute("estate",estate);
        //当前房子朝向
        request.getSession().setAttribute("houseFace",houseFace);
        return "sale";}

}


