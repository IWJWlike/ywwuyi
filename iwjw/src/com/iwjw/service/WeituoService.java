package com.iwjw.service;

import com.iwjw.entity.Weituo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 作者:Sunsongoing.drong
 * 时间:2018/3/20 0020 16:35
 * 项目名:ywwuyi
 * 描述:
 */

public interface WeituoService {
    public List<Weituo> getWeituo();
    public void createWeituo(@Param("town_city") String town_city,@Param("town") String town,@Param("address") String address,@Param("money")  int money,@Param("owner_name")  String owner_name,@Param("phone_num")  String phone_num);
}
