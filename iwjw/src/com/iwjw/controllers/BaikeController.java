package com.iwjw.controllers;

import com.alibaba.fastjson.JSON;
import com.iwjw.entity.BaikeList;
import com.iwjw.service.BaikeListService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.io.PrintWriter;

@Controller
@RequestMapping("/baike")
public class BaikeController extends HttpServlet{
    @Resource
    BaikeListService baikeListService;
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {


        String plateId = req.getParameter("plateId");
        List<BaikeList> lists = baikeListService.getBaikeListByPlate(plateId);
        resp.setContentType("text/html;charset=UTF-8");
        PrintWriter out = resp.getWriter();
        String listString = JSON.toJSONString(lists);
        out.print(listString);
        out.flush();
        out.close();
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doPost(req, resp);
    }
}
