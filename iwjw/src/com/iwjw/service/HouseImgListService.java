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
    //1.根据房id获取图片
    List<HouseImage> getHouseImgList(@Param("houseid")String houseid);
    //2.查某房子的户型图片
    List<HouseImage> getHouseImgList2(@Param("houseid")String houseid);
    //3.根据房子id查询房子信息
    Secondary getHouseById(@Param("houseid")String houseid);
    //4.根据房子id查询所在小区
    Estate getEstateByHouseId(@Param("houseid")String houseid);
    //5.根据房子id查询房子朝向
    String getHouseFaceByHouseId(@Param("houseid")String houseid);
    //6.查询某城市的所有小区
    List<Estate>getEstateSumBuProvinceId(@Param("provinceId")String provinceId);
    //7.根据小区id查询某小区的所有房子
    List<Secondary>getALLHouseByEstateId(@Param("estateId")String estateId);
//8.模糊查询某市的所有小区
    List<Estate>getALLHouseByProvinceLike(@Param("likep")String likep);
    //9.模糊查询某区所有小区
    List<Estate>getALLHouseByCityLike(@Param("likec")String likec);
    //10.模糊查询某街道所有小区
    List<Estate>getALLHouseByTownLike(@Param("liket")String liket);
    //11.模糊查询所有小区
    List<Estate>getALLHouseByEstateLike(@Param("likee")String likee);
    //根据房子名字查询id
    String getHouseIdByhouseName(@Param("estateName")String estateName);
}