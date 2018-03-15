package com.iwjw.dao;


import com.iwjw.entity.BaikeList;
import com.iwjw.entity.PlateInfo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 *
 *
 */
public interface PlateInfoMapper {

    //查找num
    PlateInfo getTitleNum(@Param("plateName")String plateName);


}
