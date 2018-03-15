package com.iwjw.entity;

/**
 * 房屋图片
 */
public class HouseImage {
    private  int houseid;//房屋id
    private  String imgUrl;//房屋图片链接

    public int getHouseid() {
        return houseid;
    }

    public void setHouseid(int houseid) {
        this.houseid = houseid;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }
}
