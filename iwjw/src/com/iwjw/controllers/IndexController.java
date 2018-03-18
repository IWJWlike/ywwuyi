package com.iwjw.controllers;

import com.iwjw.entity.Estate;
import com.iwjw.entity.HouseImage;
import com.iwjw.service.HouseImgListService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("indexController")
public class IndexController {
    @Resource
    HouseImgListService houseImgListService;

@RequestMapping("goHomePage")
public  String goHomePage(Model model, HttpServletResponse response, HttpServletRequest request){
    List<HouseImage> lists = houseImgListService.getHouseImgList("1");
    request.getSession().setAttribute("homeImgLists", lists);



    return "home";
}

}
