package com.iwjw.dao;


import com.iwjw.entity.PlateInfo;
import com.iwjw.entity.User;
import org.apache.ibatis.annotations.Param;

/**
 *
 *
 */
public interface UserMapper {

    //创建用户
    User createUser(@Param("uPhone") String uPhone);
    //查找用户
    User selectUser(@Param("uPhone") String uPhone);



}
