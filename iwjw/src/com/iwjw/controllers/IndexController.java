package com.iwjw.controllers;

import com.iwjw.service.HouseImgListService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
@RequestMapping("indexController")
public class IndexController {
    @Resource
    HouseImgListService houseImgListService;

    @RequestMapping("toIndex")
    public String toIndex(Model model, HttpServletResponse response, HttpServletRequest request){


        return "homePage";
    }


}
