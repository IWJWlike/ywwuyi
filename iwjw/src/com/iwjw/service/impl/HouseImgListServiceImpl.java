package com.iwjw.service.impl;

import com.iwjw.dao.BaikeListMapper;
import com.iwjw.dao.HouseImgListMapper;
import com.iwjw.entity.BaikeList;
import com.iwjw.entity.Estate;
import com.iwjw.entity.HouseImage;
import com.iwjw.entity.Secondary;
import com.iwjw.service.BaikeListService;
import com.iwjw.service.HouseImgListService;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import java.util.List;

@Service("houseImgListServiceImpl")
public class HouseImgListServiceImpl implements HouseImgListService {

    @Resource
    HouseImgListMapper houseImgListMapper;


    //根据房id获取图片
    @Override
    public List<HouseImage> getHouseImgList(String houseid) {
        return houseImgListMapper.getHouseImgList(houseid);
    }

    //查某房子的户型图片
    @Override
    public List<HouseImage> getHouseImgList2(String houseid) {
        return houseImgListMapper.getHouseImgList2(houseid);
    }

    //根据房子id查询房子信息
    @Override
    public Secondary getHouseById(String houseid) {
        return houseImgListMapper.getHouseById(houseid);
    }
    //根据房子id查询小区信息
    @Override
    public Estate getEstateByHouseId(String houseid) {
        return houseImgListMapper.getEstateByHouseId(houseid);
    }
    //根据房子id查询房子朝向
    @Override
    public String getHouseFaceByHouseId(String houseid) {
        return houseImgListMapper.getHouseFaceByHouseId(houseid);
    }
}
