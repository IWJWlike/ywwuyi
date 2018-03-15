package com.iwjw.entity;

import java.io.Serializable;

public class PlateInfo implements Serializable{

    private String plateId;
    private String plateName;

    public String getPlateId() {
        return plateId;
    }

    public void setPlateId(String plateId) {
        this.plateId = plateId;
    }

    public String getPlateName() {
        return plateName;
    }

    public void setPlateName(String plateName) {
        this.plateName = plateName;
    }
}
