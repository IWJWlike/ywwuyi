package com.iwjw.entity;

/**
 * 房屋朝向
 */
public class HouseFace {
    private  int faceId;//房屋朝向id
    private  String faceName;//房屋朝向

    public int getFaceId() {
        return faceId;
    }

    public void setFaceId(int faceId) {
        this.faceId = faceId;
    }

    public String getFaceName() {
        return faceName;
    }

    public void setFaceName(String faceName) {
        this.faceName = faceName;
    }
}
