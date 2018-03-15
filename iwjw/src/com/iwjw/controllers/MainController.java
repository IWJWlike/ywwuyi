package com.iwjw.controllers;

import com.iwjw.entity.BaikeList;
import com.iwjw.entity.HouseImage;
import com.iwjw.service.BaikeListService;
import com.iwjw.service.HouseImgListService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import com.iwjw.service.impl.BaikeListServiceImpl;

import javax.annotation.Resource;
import java.util.List;


@Controller
@RequestMapping("main")
public class MainController {

    @Resource
    BaikeListService baikeListService;
    @Resource
    HouseImgListService houseImgListService;

    @RequestMapping("/test")
    public String goTest(Model model){
        List<BaikeList> lists = baikeListService.getBaikeList();
        model.addAttribute("lists",lists);
        return "welcome";
    }
    @RequestMapping("/home")
    public String goLogin(){
        return "homePage";
    }
    @RequestMapping("/goDemo")
    public String goDemo(){
        return "demo";
    }


}


