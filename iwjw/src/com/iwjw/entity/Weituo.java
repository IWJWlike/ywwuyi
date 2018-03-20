package com.iwjw.entity;

/**
 * 作者:Sunsongoing.drong
 * 时间:2018/3/20 0020 16:19
 * 项目名:ywwuyi
 * 描述:
 */

public class Weituo {
    private int id;
    private String town_city;
    private String town;
    private String address;
    private int money;
    private String owner_name;
    private String phone_num;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTown_city() {
        return town_city;
    }

    public void setTown_city(String town_city) {
        this.town_city = town_city;
    }

    public String getTown() {
        return town;
    }

    public void setTown(String town) {
        this.town = town;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getMoney() {
        return money;
    }

    public void setMoney(int money) {
        this.money = money;
    }

    public String getOwner_name() {
        return owner_name;
    }

    public void setOwner_name(String owner_name) {
        this.owner_name = owner_name;
    }

    public String getPhone_num() {
        return phone_num;
    }

    public void setPhone_num(String phone_num) {
        this.phone_num = phone_num;
    }

    @Override
    public String toString() {
        return "{" +
                "\"id\":" + "\"" + id + "\"" +
                ", \"town_city\":" + "\"" + town_city + "\"" +
                ", \"town\":" + "\"" + town + "\"" +
                ", \"address\":" + "\"" + address + "\"" +
                ", \"money\":" + "\"" + money + "\"" +
                ", \"owner_name\":" + "\"" + owner_name + "\"" +
                ", \"phone_num\":" + "\"" + phone_num + "\"" +
                '}';
    }
}
