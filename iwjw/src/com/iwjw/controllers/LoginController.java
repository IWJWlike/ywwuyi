package com.iwjw.controllers;

import com.aliyuncs.exceptions.ClientException;
import com.iwjw.entity.User;
import com.iwjw.service.UserService;
import com.iwjw.utils.SendCode;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("login")
public class LoginController {

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
        try {
            SendCode.sendSms(uPhone,code);
        } catch (ClientException e) {
            e.printStackTrace();
        }
    }

    @RequestMapping("/login")
    public String goLogin(@Param("uPhone")String uPhone, Model model){
        if (userService.selectUser(uPhone)==(null)){
            userService.createUser(uPhone);
        }
        User vistor = userService.selectUser(uPhone);
        model.addAttribute("vistor",vistor);
        return "homePage";
    }


}
