package com.iwjw.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("lease")
public class LeaseController {
    @RequestMapping("/test")
    public String goTest() {
        return "lease";
    }

    @RequestMapping("/home")
    public String goLogin() {
        return "homePage";
    }

    @RequestMapping("/register")
    public String goRegister() {
        return "register";
    }

}
