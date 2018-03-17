package com.iwjw.service.impl;

import com.iwjw.dao.BaikeListMapper;
import com.iwjw.dao.HouseImgListMapper;
import com.iwjw.entity.BaikeList;
import com.iwjw.entity.Estate;
import com.iwjw.entity.HouseImage;
import com.iwjw.entity.Secondary;
import com.iwjw.service.BaikeListService;
import com.iwjw.service.HouseImgListService;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;
import javax.annotation.Resource;
import java.util.List;

@Service("houseImgListServiceImpl")
public class HouseImgListServiceImpl implements HouseImgListService{

    @Resource
    HouseImgListMapper houseImgListMapper;


    //1.根据房id获取图片
    @Override
    public List<HouseImage> getHouseImgList(String houseid) {
        return houseImgListMapper.getHouseImgList(houseid);
    }
    //2.查某房子的户型图片
    @Override
    public List<HouseImage> getHouseImgList2(String houseid) {
        return houseImgListMapper.getHouseImgList2(houseid);
    }
    //3.根据房子id查询房子信息
    @Override
    public Secondary getHouseById(String houseid) {
        return houseImgListMapper.getHouseById(houseid);
    }
    //4.根据房子id查询小区信息
    @Override
    public Estate getEstateByHouseId(String houseid) {
        return houseImgListMapper.getEstateByHouseId(houseid);
    }
    //5.根据房子id查询房子朝向
    @Override
    public String getHouseFaceByHouseId(String houseid) {
        return houseImgListMapper.getHouseFaceByHouseId(houseid);
    }
    //6.查询某城市的所有小区
    @Override
    public List<Estate>getEstateSumBuProvinceId(String provinceId) { return houseImgListMapper.getEstateSumBuProvinceId(provinceId); }
    //7.根据小区id查询某小区的所有房子
    @Override
    public List<Secondary>getALLHouseByEstateId(String estateId) { return houseImgListMapper.getALLHouseByEstateId(estateId); }
//8.模糊查询某市所有小区
    @Override
    public List<Estate>getALLHouseByProvinceLike(String likep) { return houseImgListMapper.getALLHouseByProvinceLike(likep); }
    //9.模糊查询某区所有小区
    @Override
    public List<Estate>getALLHouseByCityLike(String likec) { return houseImgListMapper.getALLHouseByCityLike(likec); }
    //10.模糊查询某街道所有小区
    @Override
    public List<Estate>getALLHouseByTownLike(String liket) { return houseImgListMapper.getALLHouseByTownLike(liket); }
    //11.模糊查询所有小区
    @Override
    public List<Estate>getALLHouseByEstateLike(String likee) { return houseImgListMapper.getALLHouseByEstateLike(likee); }


}
