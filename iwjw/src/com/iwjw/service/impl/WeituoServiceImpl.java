package com.iwjw.service.impl;

import com.iwjw.dao.WeituoMapper;
import com.iwjw.entity.Weituo;
import com.iwjw.service.WeituoService;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * 作者:Sunsongoing.drong
 * 时间:2018/3/20 0020 16:36
 * 项目名:ywwuyi
 * 描述:
 */
@Service("weituoServiceImpl")
public class WeituoServiceImpl implements WeituoService {
    @Resource
    private WeituoMapper weituoMapper;

    @Override
    public List<Weituo> getWeituo() {
        return weituoMapper.getWeituo();
    }

    @Override
    public void createWeituo(@Param("town_city") String town_city,@Param("town") String town,@Param("address") String address,@Param("money")  int money,@Param("owner_name")  String owner_name,@Param("phone_num")String phone_num) {
        weituoMapper.createWeituo(town_city,town,address,money,owner_name,phone_num);
    }
}
