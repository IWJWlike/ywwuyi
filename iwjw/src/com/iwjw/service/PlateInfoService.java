package com.iwjw.service;


import com.iwjw.entity.PlateInfo;
import org.apache.ibatis.annotations.Param;

/**
 *
 *
 */
public interface PlateInfoService {

    //查找num
    PlateInfo getTitleNum(@Param("plateName") String plateName);


}
