package com.iwjw.controllers;

import com.iwjw.service.BaikeListService;
import com.iwjw.service.PlateInfoService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@Controller
@RequestMapping("/baikeAjax")
public class BaikeAjax extends HttpServlet{
    @Resource
    BaikeListService baikeListService;
    @Resource
    PlateInfoService PlateInfoService;
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String title = "";
        String plateName = req.getParameter("plateName");
        if (plateName.equals("全部文章")){
            title = "0";
        }
        else{
            title = PlateInfoService.getTitleNum(plateName).getPlateId();
        }
        PrintWriter out = resp.getWriter();
        out.print(title);
        out.flush();
        out.close();
    }

    @Override
    @RequestMapping("/test")
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req, resp);
    }
}
