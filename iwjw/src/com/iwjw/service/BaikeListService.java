package com.iwjw.service;

import com.iwjw.entity.BaikeList;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 *
 *
 */
public interface BaikeListService {

    //全查
    List<BaikeList> getBaikeList();
    //Ajax查
    List<BaikeList> getBaikeListByPlate(@Param("plateId")String platId);

}