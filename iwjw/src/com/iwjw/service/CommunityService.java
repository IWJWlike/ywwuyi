package com.iwjw.service;

import com.iwjw.entity.Community;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 作者:Sunsongoing.drong
 * 时间:2018/3/17 0017 13:46
 * 项目名:ywwuyi
 * 描述:
 */

public interface CommunityService {

    //按照小区名称模糊查询
    public List<Community> likeCommunityName(@Param("name") String name);
}
