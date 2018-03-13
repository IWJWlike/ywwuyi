package com.iwjw.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("main")
public class MainController {
    @RequestMapping("/test")
    public String goTest(){
        return "gfgl";
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
