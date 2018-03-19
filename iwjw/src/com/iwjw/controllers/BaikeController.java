package com.iwjw.controllers;

import com.iwjw.service.BaikeListService;
import com.iwjw.utils.PageUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;

@Controller
@RequestMapping("/baikePage")
public class BaikeController {

    @Resource
    BaikeListService baikeListService;

    PageUtils pageUtils = new PageUtils();

    public String goBaike(Model model, @RequestParam(value = "plateId",required = false)String pkateId){

        return "gfgl";
    }

}
