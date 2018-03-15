package com.iwjw.entity;


import java.util.Date;

/**
 * 小区信息
 */
public class Estate {
    private  int provinceId;//市
    private int cityId;//区
    private int townId;//街道
    private int estateId;//小区id
    private  String estateName;//小区名
    private int buildAge;//建造年代
    private int totalBuildings;//总栋数
    private int totalHouse;//总房屋数
    private  int managepay;//物业费
    private  int car;//停车位
    private int area;//占地面积

    public int getProvinceId() {
        return provinceId;
    }

    public void setProvinceId(int provinceId) {
        this.provinceId = provinceId;
    }

    public int getCityId() {
        return cityId;
    }

    public void setCityId(int cityId) {
        this.cityId = cityId;
    }

    public int getTownId() {
        return townId;
    }

    public void setTownId(int townId) {
        this.townId = townId;
    }

    public int getEstateId() {
        return estateId;
    }

    public void setEstateId(int estateId) {
        this.estateId = estateId;
    }

    public String getEstateName() {
        return estateName;
    }

    public void setEstateName(String estateName) {
        this.estateName = estateName;
    }

    public int getBuildAge() {
        return buildAge;
    }

    public void setBuildAge(int buildAge) {
        this.buildAge = buildAge;
    }

    public int getTotalBuildings() {
        return totalBuildings;
    }

    public void setTotalBuildings(int totalBuildings) {
        this.totalBuildings = totalBuildings;
    }

    public int getTotalHouse() {
        return totalHouse;
    }

    public void setTotalHouse(int totalHouse) {
        this.totalHouse = totalHouse;
    }

    public int getManagepay() {
        return managepay;
    }

    public void setManagepay(int managepay) {
        this.managepay = managepay;
    }

    public int getCar() {
        return car;
    }

    public void setCar(int car) {
        this.car = car;
    }

    public int getArea() {
        return area;
    }

    public void setArea(int area) {
        this.area = area;
    }
}
