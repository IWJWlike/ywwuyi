package com.iwjw.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/userInfo")
public class UserController {
    //经纪人
    @RequestMapping("agent")
    public String goAgent(){
        return "agent";
    }
    //我的账户
    @RequestMapping("account")
    public String goAccount(){
        return "account";
    }
    //我的委托
    @RequestMapping("delegate")
    public String goDelegate(){
        return "delegate";
    }

    @RequestMapping("orders")
    public String goOrders(){
        return "orders";
    }
    //我的投诉
    @RequestMapping("complaints")
    public String goComplaints(){
        return "complaints";
    }

    @RequestMapping("logout")
    public String goLogout(HttpServletRequest request){
        request.getSession().invalidate();
        return "index";
    }
}
