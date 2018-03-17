package com.iwjw.dao;

import com.iwjw.entity.Community;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 作者:Sunsongoing.drong
 * 时间:2018/3/17 0017 13:52
 * 项目名:ywwuyi
 * 描述:
 */
@Repository
public interface CommunityMapper {
    //模糊查询
    public List<Community> likeCommunityName(@Param("name") String name);
}
