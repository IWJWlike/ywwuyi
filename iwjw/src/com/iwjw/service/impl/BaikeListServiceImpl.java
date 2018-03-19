package com.iwjw.service.impl;

import com.iwjw.dao.BaikeListMapper;
import com.iwjw.entity.BaikeList;
import com.iwjw.service.BaikeListService;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import javax.annotation.Resource;
import java.util.List;

@Service("baikeListServiceImpl")
public class BaikeListServiceImpl implements BaikeListService {

    @Resource
    BaikeListMapper baikeListMapper;

    @Override
    public List<BaikeList> getBaikeList() {
        return baikeListMapper.getBaikeList();
    }

    @Override
    public List<BaikeList> getBaikeListByPlate(String platId) {
        return baikeListMapper.getBaikeListByPlate(platId);
    }

    @Override
    public List<BaikeList> getBaikeListByDate(String createDate) {
        return baikeListMapper.getBaikeListByDate(createDate);
    }

    @Override
    public BaikeList getNewst() {
        return baikeListMapper.getNewst();
    }

    @Override
    public BaikeList getSecond() {
        return baikeListMapper.getSecond();
    }

    @Override
    public BaikeList getThird() {
        return baikeListMapper.getThird();
    }

    @Override
    public List<BaikeList> getLikes() {
        return baikeListMapper.getLikes();
    }

    @Override
    public BaikeList getArticle(int id) {
        return baikeListMapper.getArticle(id);
    }

    @Override
    public Integer getCount(String plateId) {
        return baikeListMapper.getCount(plateId);
    }
}
