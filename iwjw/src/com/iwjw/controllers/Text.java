package com.iwjw.controllers;

import com.iwjw.dao.HouseImgListMapper;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

public class Text {
    public static void main(String[] args) {
        InputStream is = null;
        try {
            is = Resources.getResourceAsStream("applicationContext-mybatis.xml");
        } catch (IOException e) {
            e.printStackTrace();
        }
        SqlSessionFactory session = new SqlSessionFactoryBuilder().build(is);
        SqlSession ss = session.openSession();
       List lis= ss.getMapper(HouseImgListMapper.class).getALLHouseByCityLike("白云");
       System.out.println(lis.size());
    }


}
