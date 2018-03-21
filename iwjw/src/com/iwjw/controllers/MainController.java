package com.iwjw.controllers;

import com.iwjw.entity.BaikeList;
import com.iwjw.entity.User;
import com.iwjw.service.BaikeListService;
import com.iwjw.service.UserService;
import org.apache.ibatis.annotations.Param;
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
    UserService userService;


    @RequestMapping("/home")
    public String goLogin(Model model) {

        BaikeList newst = baikeListService.getNewst();
        BaikeList second = baikeListService.getSecond();
        BaikeList third = baikeListService.getThird();
        model.addAttribute("newst", newst);
        model.addAttribute("second", second);
        model.addAttribute("third", third);
        return "homePage";
    }

    @RequestMapping("/goDemo")
    public String goDemo() {
        return "demo";
    }

    //q去详情页
//    @RequestMapping("/goSale")
//    public  String goSale(){return "sale";}
    @RequestMapping("/login")
    public String goLogin(@Param("uPhone") String uPhone, Model model) {
        if (userService.selectUser(uPhone) == (null)) {
            userService.createUser(uPhone);
        }
        User vistor = userService.selectUser(uPhone);
        model.addAttribute("vistor", vistor);
        return "homePage";
    }

    @RequestMapping("/goMap")
    public String goMap(){return "baiduMap";}


    @RequestMapping("/goUser")
    public String goUser(){return "agent";}

    /*文章*/
    @RequestMapping("/goArticle")
    public String goArticle(Model model){
        BaikeList baikeArticle1 = baikeListService.getArticle(1);

        model.addAttribute("baikeArticle1",baikeArticle1);

        return "baike_article";
    }

    @RequestMapping("/goCal")
    public String goCal(){return "calculator";}
}


