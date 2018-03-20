package com.iwjw.dao;

import com.iwjw.entity.Weituo;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 作者:Sunsongoing.drong
 * 时间:2018/3/20 0020 16:28
 * 项目名:ywwuyi
 * 描述:
 */
@Repository
public interface WeituoMapper {
    public List<Weituo> getWeituo();
    public void createWeituo(@Param("town_city") String town_city,@Param("town") String town,@Param("address") String address,@Param("money")  int money,@Param("owner_name")  String owner_name,@Param("phone_num")  String phone_num);
}
