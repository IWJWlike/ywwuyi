package com.iwjw.Servlet;

import com.iwjw.service.HouseImgListService;
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
@RequestMapping("houseTest")
public class HouseAjax extends HttpServlet{

    @Resource
    HouseImgListService houseImgListService;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String houseid = "";
        resp.setContentType("text/html;charset=UTF-8");
        String estateName = req.getParameter("estateName");
        houseid= houseImgListService.getHouseIdByhouseName(estateName);
        System.out.println(houseid);
        PrintWriter out = resp.getWriter();
        out.print(houseid);
/*        out.flush();
        out.close();*/
    }

    @Override
    @RequestMapping("/test")
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req,resp);
    }
}
