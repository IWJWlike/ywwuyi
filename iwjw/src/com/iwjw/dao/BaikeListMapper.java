package com.iwjw.dao;


import com.iwjw.entity.BaikeList;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 *
 *
 */
public interface BaikeListMapper {

    //全查
    List<BaikeList> getBaikeList();
    //Ajax查
    List<BaikeList> getBaikeListByPlate(@Param("plateId")String platId);

}
