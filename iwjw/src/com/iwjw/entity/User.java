package com.iwjw.entity;

import java.io.Serializable;

public class User implements Serializable{

    private String uPhone;
    private String uid;

    public String getuPhone() {
        return uPhone;
    }

    public void setuPhone(String uPhone) {
        this.uPhone = uPhone;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }
}
