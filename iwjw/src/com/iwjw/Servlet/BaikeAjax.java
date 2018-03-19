package com.iwjw.Servlet;

import com.alibaba.fastjson.JSON;
import com.iwjw.entity.BaikeList;
import com.iwjw.service.BaikeListService;
import com.iwjw.service.PlateInfoService;
import com.iwjw.service.impl.PlateInfoServiceImpl;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.io.PrintWriter;
@Controller
@RequestMapping("baike")
public class BaikeAjax extends HttpServlet{

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
        resp.setContentType("text/html;charset=UTF-8");
        PrintWriter out = resp.getWriter();
        out.print(title);
        out.flush();
        out.close();
    }

    @Override
    @RequestMapping("/getList")
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req, resp);
    }
}
