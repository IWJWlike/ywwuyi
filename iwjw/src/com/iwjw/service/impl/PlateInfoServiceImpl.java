package com.iwjw.service.impl;


import com.iwjw.dao.PlateInfoMapper;
import com.iwjw.entity.PlateInfo;
import com.iwjw.service.PlateInfoService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("plateInfoServiceImpl")
public class PlateInfoServiceImpl implements PlateInfoService {

    @Resource
    PlateInfoMapper PlateInfoMapper;
    @Override
    public PlateInfo getTitleNum(String plateName) {
        return PlateInfoMapper.getTitleNum(plateName);
    }



}
