package com.iwjw.controllers;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.iwjw.entity.Community;
import com.iwjw.service.CommunityService;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

/**
 * 作者:Sunsongoing.drong
 * 时间:2018/3/14 0014 17:31
 * 项目名:ywwuyi
 * 描述:
 */
@Controller
@RequestMapping("/map")
public class MapController {
    @Resource
    private CommunityService communityService;

    @RequestMapping("/goMap")
    public String goToMap() {
        return "baiduMap";
    }

    @RequestMapping("/search")
    public void search(@Param("name") String name, HttpServletRequest request, HttpServletResponse response) {
        List<Community> communities = communityService.likeCommunityName(name);
        PrintWriter p = null;
        try {
            p = response.getWriter();
        } catch (IOException e) {
            e.printStackTrace();
        }
//        request.getSession().setAttribute("community", communities);
        response.setStatus(200);


        p.println(communities.toString());
//        return "baiduMap";
    }
}

