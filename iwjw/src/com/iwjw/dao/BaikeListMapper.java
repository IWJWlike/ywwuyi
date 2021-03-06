package com.iwjw.dao;


import com.iwjw.entity.BaikeList;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 *
 *
 */
@Repository
public interface BaikeListMapper {

    //全查
    List<BaikeList> getBaikeList(int index);
    //Ajax查
    List<BaikeList> getBaikeListByPlate(@Param("plateId")String plateId);
    //根据更新时间来查新闻
    List<BaikeList> getBaikeListByDate(@Param("createDate")String createDate);
    //获取第一条
    BaikeList getNewst();
    //获取第二条
    BaikeList getSecond();
    //获取第三条
    BaikeList getThird();
    //获取likes数前八条
    List<BaikeList> getLikes();
    //获取条数
    Integer getCount();
    //获取条数
    Integer getCount(String plateId);

    //获取文章
    BaikeList getArticle(int id);

    //分页显示文章
    List<BaikeList> getByPage();
}
