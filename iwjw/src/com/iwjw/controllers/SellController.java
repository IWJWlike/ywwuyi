package com.iwjw.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("sell")
public class SellController {

    @RequestMapping("/goSell")
    public  String goSell(){return "sell";}
}
