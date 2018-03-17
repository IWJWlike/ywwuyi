package com.iwjw.service.impl;

import com.iwjw.dao.CommunityMapper;
import com.iwjw.entity.Community;
import com.iwjw.service.CommunityService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/**
 * 作者:Sunsongoing.drong
 * 时间:2018/3/17 0017 13:49
 * 项目名:ywwuyi
 * 描述:
 */
@Service("communityServiceImpl")
public class CommunityServiceImpl implements CommunityService {
    @Resource
    private CommunityMapper communityMapper;

    @Override
    public List<Community> likeCommunityName(String name) {

        return communityMapper.likeCommunityName(name);
    }
}
