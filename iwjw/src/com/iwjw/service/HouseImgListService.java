package com.iwjw.service;

import com.iwjw.entity.BaikeList;
import com.iwjw.entity.Estate;
import com.iwjw.entity.HouseImage;
import com.iwjw.entity.Secondary;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 *
 *
 */
public interface HouseImgListService {
    //根据房id获取图片
    List<HouseImage> getHouseImgList(@Param("houseid")String houseid);
    //查某房子的户型图片
    List<HouseImage> getHouseImgList2(@Param("houseid")String houseid);
    //根据房子id查询房子信息
    Secondary getHouseById(@Param("houseid")String houseid);
    //根据房子id查询所在小区
    Estate getEstateByHouseId(@Param("houseid")String houseid);
    //根据房子id查询房子朝向
    String getHouseFaceByHouseId(@Param("houseid")String houseid);
}