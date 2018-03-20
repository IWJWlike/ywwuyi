package com.iwjw.controllers;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.iwjw.entity.Weituo;
import com.iwjw.service.WeituoService;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

/**
 * 作者:Sunsongoing.drong
 * 时间:2018/3/20 0020 16:26
 * 项目名:ywwuyi
 * 描述:
 */
@Controller
@RequestMapping("/weituo")
public class WeituoController {
    @Resource
    private WeituoService weituoService;

    @RequestMapping("/getWeituo")
    public void getWeituo(HttpServletResponse response) {
        PrintWriter out =null;
        try {
            out = response.getWriter();
        } catch (IOException e) {
            e.printStackTrace();
        }
        List<Weituo> list = weituoService.getWeituo();
        out.print(list);
    }

    @RequestMapping("/setWeituo")
    @ResponseBody//此注解很重要，使用ajax需要引入
    public void setWeituo(HttpServletRequest request, HttpServletResponse response) {
        System.out.println(request.getHeader("FormData"));
        String jsonObj = request.getParameter("jsonObj");
        JSONObject jb = JSON.parseObject(jsonObj);
        String town_city =jb.getString("town_city");
         String town =jb.getString("town");
         String address =jb.getString("address");
         int money =jb.getInteger("money");
         String owner_name =jb.getString("owner_name");
         String phone_num =jb.getString("phone_num");
        weituoService.createWeituo(town_city,town,address,money,owner_name,phone_num);
        response.setStatus(200);
    }
}
