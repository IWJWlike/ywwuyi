package com.iwjw.service.impl;

import com.iwjw.dao.BaikeListMapper;
import com.iwjw.entity.BaikeList;
import com.iwjw.service.BaikeListService;
import org.springframework.stereotype.Service;
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
}
