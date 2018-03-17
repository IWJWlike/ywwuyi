package com.iwjw.service;

import com.iwjw.entity.BaikeList;
import com.iwjw.entity.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserService {

    //创建用户
    int createUser(@Param("uPhone") String uPhone);
    //查找用户
    User selectUser(@Param("uPhone") String uPhone);



}
