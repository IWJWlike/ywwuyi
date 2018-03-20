package com.iwjw.controllers;


import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
@RequestMapping("/cal")
public class CalController extends HttpServlet{

    @RequestMapping("/cal")
    protected String goCal(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        return "calculator";
    }

}
