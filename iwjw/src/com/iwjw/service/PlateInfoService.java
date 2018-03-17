package com.iwjw.service;


import com.iwjw.entity.PlateInfo;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

/**
 *
 *
 */
@Repository
public interface PlateInfoService {

    //查找num
    PlateInfo getTitleNum(@Param("plateName") String plateName);


}
