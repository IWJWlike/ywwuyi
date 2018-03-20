package com.iwjw.controllers;

import com.aliyuncs.exceptions.ClientException;
import com.iwjw.entity.User;
import com.iwjw.service.UserService;
import com.iwjw.utils.SendCode;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
@RequestMapping("login")
public class LoginController extends HttpServlet{

    @Resource
    UserService userService;


    //短信验证(获取电话号码，通过电话号码，获得短信验证码)
    @RequestMapping("/gotoSendCode")
    public void gotoSendCode(@RequestParam("uPhone")String uPhone, HttpServletRequest request){
        //发送随机数验证码
        StringBuffer stringBuffer= new StringBuffer();
        String code =null;
        for (int i = 0; i < 4; i++) {
            code = stringBuffer.append((int)(Math.random() * 10)).toString();
        }
        request.getSession().setAttribute(uPhone,code);
//        request.getSession().setAttribute(uPhone,"8423");
        try {
            SendCode.sendSms(uPhone,code);
        } catch (ClientException e) {
            e.printStackTrace();
        }
    }

    @RequestMapping("/goLogin")
//    public String goLogin(HttpServletRequest request, HttpServletResponse response, @RequestParam("uPhone")String uPhone, Model model,@RequestParam("textCode")String textCode ) {
    public String goLogin(HttpServletRequest request, HttpServletResponse response, @RequestParam("uPhone")String uPhone,@RequestParam("textCode")String textCode, Model model) throws IOException {
        String code = (String) request.getSession().getAttribute(uPhone);
        if (textCode.equals(code)) {
            if (userService.selectUser(uPhone) == (null)) {
                userService.createUser(uPhone);
            }
            User vistor = userService.selectUser(uPhone);
            model.addAttribute("vistor", vistor);
            response.sendRedirect("doLogin");
        }
            return "index";
    }

    @RequestMapping("/doLogin")
    public   String   goAdd(){
      System.out.println("eeee");

          return "test";
    }

    @RequestMapping("/goAgent")
    public String goAgent(){return "agent";}

    @RequestMapping("/goComplaints")
    public String goComplaints(){return "complaints";}

    @RequestMapping("/goOrders")
    public String goOrders(){return "orders";}

}
