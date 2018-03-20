package com.iwjw.controllers;

import com.iwjw.entity.BaikeList;
import com.iwjw.service.BaikeListService;
import com.iwjw.utils.PageUtils;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("/baikePage")
public class BaikeController {

    @Resource
    BaikeListService baikeListService;

    PageUtils pageUtils = new PageUtils();

    @RequestMapping("/gfgl")
    public String goBaike(Model model, @RequestParam(value = "plateId",required = false)String plateId,@RequestParam(value = "indexPage",required = false)String indexPage){


        List<BaikeList> lists0 = baikeListService.getBaikeList();
        List<BaikeList> lists1 = baikeListService.getBaikeListByPlate("热点楼市");
        List<BaikeList> lists2 = baikeListService.getBaikeListByPlate("最新政策");
        List<BaikeList> lists3 = baikeListService.getBaikeListByPlate("购房须知");
        List<BaikeList> lists4 = baikeListService.getBaikeListByPlate("选房攻略");
        List<BaikeList> lists5 = baikeListService.getBaikeListByPlate("签约要点");
        List<BaikeList> lists6 = baikeListService.getBaikeListByPlate("贷款指南");
        List<BaikeList> lists7 = baikeListService.getBaikeListByPlate("缴税过户");
        List<BaikeList> lists8 = baikeListService.getBaikeListByPlate("典型案例");
        List<BaikeList> likes = baikeListService.getLikes();

        model.addAttribute("lists0", lists0);
        model.addAttribute("lists1", lists1);
        model.addAttribute("lists2", lists2);
        model.addAttribute("lists3", lists3);
        model.addAttribute("lists4", lists4);
        model.addAttribute("lists5", lists5);
        model.addAttribute("lists6", lists6);
        model.addAttribute("lists7", lists7);
        model.addAttribute("lists8", lists8);
        model.addAttribute("likes",likes);

        return "gfgl";
    }

    @RequestMapping("/goInfo")
    public String goInfo(@Param("id")String id,Model model){
        BaikeList article = baikeListService.getArticle(Integer.parseInt(id));
        model.addAttribute("article",article);
        return "baike_article";
    }

}
