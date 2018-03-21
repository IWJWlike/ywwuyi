package com.iwjw.controllers;

import com.iwjw.entity.User;
import com.iwjw.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@Controller
@RequestMapping("loginAjax")
public class LoginAjax extends HttpServlet{

    @Resource
    UserService userService;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String uPhone = request.getParameter("uPhone");
        String textCode = request.getParameter("textCode");
        String code = (String) request.getSession().getAttribute(uPhone);
        if (textCode.equals("1111")) {
            if (userService.selectUser(uPhone) == (null)) {
                userService.createUser(uPhone);
            }
            User vistor = userService.selectUser(uPhone);
            request.getSession().setAttribute("vistor", vistor);
            PrintWriter out = response.getWriter();
            out.print(vistor);
        }
    }

    @Override
    @RequestMapping("/doLogin")
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        this.doGet(req,resp);
    }

    @RequestMapping("/index")
    public String goBack(){
        System.out.println("222222222222222222222222222222222222222");
        return "index";
    }

}
