package com.iwjw.entity;

/**
 * 二手房
 */
public class Secondary {
    private  int estateId;//小区id
    private  int houseid ;//房屋id
    private  double housePrice ;//价格
    private  int houseMiles ;//房屋平方米
    private  int houseRoom ;//房屋-室
    private  int houseDiv ;//房屋-厅
    private  int houseBath ;//房屋-卫
    private  int houseAge ;//房屋年龄
    private  int houseFace ;//房屋朝向
    private  int houseFloor ;//房屋楼层
    private  int totalFloor ;//总楼层

    public int getEstateId() {
        return estateId;
    }

    public void setEstateId(int estateId) {
        this.estateId = estateId;
    }

    public int getHouseid() {
        return houseid;
    }

    public void setHouseid(int houseid) {
        this.houseid = houseid;
    }

    public double getHousePrice() {
        return housePrice;
    }

    public void setHousePrice(double housePrice) {
        this.housePrice = housePrice;
    }

    public int getHouseMiles() {
        return houseMiles;
    }

    public void setHouseMiles(int houseMiles) {
        this.houseMiles = houseMiles;
    }

    public int getHouseRoom() {
        return houseRoom;
    }

    public void setHouseRoom(int houseRoom) {
        this.houseRoom = houseRoom;
    }

    public int getHouseDiv() {
        return houseDiv;
    }

    public void setHouseDiv(int houseDiv) {
        this.houseDiv = houseDiv;
    }

    public int getHouseBath() {
        return houseBath;
    }

    public void setHouseBath(int houseBath) {
        this.houseBath = houseBath;
    }

    public int getHouseAge() {
        return houseAge;
    }

    public void setHouseAge(int houseAge) {
        this.houseAge = houseAge;
    }

    public int getHouseFace() {
        return houseFace;
    }

    public void setHouseFace(int houseFace) {
        this.houseFace = houseFace;
    }

    public int getHouseFloor() {
        return houseFloor;
    }

    public void setHouseFloor(int houseFloor) {
        this.houseFloor = houseFloor;
    }

    public int getTotalFloor() {
        return totalFloor;
    }

    public void setTotalFloor(int totalFloor) {
        this.totalFloor = totalFloor;
    }
}
