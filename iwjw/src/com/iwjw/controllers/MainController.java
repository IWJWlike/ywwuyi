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

    @RequestMapping("/test")
    public String goTest(Model model) {
        List<BaikeList> lists0 = baikeListService.getBaikeList();
        List<BaikeList> lists1 = baikeListService.getBaikeListByPlate("热点楼市");
        List<BaikeList> lists2 = baikeListService.getBaikeListByPlate("最新政策");
        List<BaikeList> lists3 = baikeListService.getBaikeListByPlate("购房须知");
        List<BaikeList> lists4 = baikeListService.getBaikeListByPlate("选房攻略");
        List<BaikeList> lists5 = baikeListService.getBaikeListByPlate("签约要点");
        List<BaikeList> lists6 = baikeListService.getBaikeListByPlate("贷款指南");
        List<BaikeList> lists7 = baikeListService.getBaikeListByPlate("缴税过户");
        List<BaikeList> lists8 = baikeListService.getBaikeListByPlate("典型案例");

        model.addAttribute("lists0", lists0);
        model.addAttribute("lists1", lists1);
        model.addAttribute("lists2", lists2);
        model.addAttribute("lists3", lists3);
        model.addAttribute("lists4", lists4);
        model.addAttribute("lists5", lists5);
        model.addAttribute("lists6", lists6);
        model.addAttribute("lists7", lists7);
        model.addAttribute("lists8", lists8);
        return "welcome";
    }

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

    @RequestMapping("/goGfgl")
    public String goGfgl(Model model) {
        List<BaikeList> lists0 = baikeListService.getBaikeList();
        List<BaikeList> lists1 = baikeListService.getBaikeListByPlate("热点楼市");
        List<BaikeList> lists2 = baikeListService.getBaikeListByPlate("最新政策");
        List<BaikeList> lists3 = baikeListService.getBaikeListByPlate("购房须知");
        List<BaikeList> lists4 = baikeListService.getBaikeListByPlate("选房攻略");
        List<BaikeList> lists5 = baikeListService.getBaikeListByPlate("签约要点");
        List<BaikeList> lists6 = baikeListService.getBaikeListByPlate("贷款指南");
        List<BaikeList> lists7 = baikeListService.getBaikeListByPlate("缴税过户");
        List<BaikeList> lists8 = baikeListService.getBaikeListByPlate("典型案例");

        model.addAttribute("lists0", lists0);
        model.addAttribute("lists1", lists1);
        model.addAttribute("lists2", lists2);
        model.addAttribute("lists3", lists3);
        model.addAttribute("lists4", lists4);
        model.addAttribute("lists5", lists5);
        model.addAttribute("lists6", lists6);
        model.addAttribute("lists7", lists7);
        model.addAttribute("lists8", lists8);
        return "gfgl";
    }

    @RequestMapping("/goUser")
    public String goUser(){return "agent";}

    /*文章*/
    @RequestMapping("/goArticle")
    public String goArticle(Model model){
        BaikeList baikeArticle1 = baikeListService.getArticle(1);

        model.addAttribute("baikeArticle1",baikeArticle1);

        return "baike_article";
    }
}


