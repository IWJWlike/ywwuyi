package com.iwjw.entity;

/**
 * 作者:Sunsongoing.drong
 * 时间:2018/3/17 0017 13:41
 * 项目名:ywwuyi
 * 描述:
 */

public class Community {
    private int community_id;
    private String community_name;

    public int getCommunity_id() {
        return community_id;
    }

    public void setCommunity_id(int community_id) {
        this.community_id = community_id;
    }

    public String getCommunity_name() {
        return community_name;
    }

    public void setCommunity_name(String community_name) {
        this.community_name = community_name;
    }

    @Override
    public String toString() {
        return "{" +
                "\"community_id\":" + "\"" + community_id + "\"" +
                ", \"community_name\":" + "\"" + community_name + "\"" +
                '}';
    }
}
