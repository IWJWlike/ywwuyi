package com.iwjw.service.impl;

import com.iwjw.dao.UserMapper;
import com.iwjw.entity.User;
import com.iwjw.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
@Service("userServeImpl")
public class UserServeImpl implements UserService{
    @Resource
    UserMapper userMapper;

    @Override
    public int createUser(String uPhone) {
        return userMapper.createUser(uPhone);
    }

    @Override
    public User selectUser(String uPhone) {
        return userMapper.selectUser(uPhone);
    }
}
