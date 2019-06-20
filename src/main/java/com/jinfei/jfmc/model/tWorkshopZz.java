package com.jinfei.jfmc.model;

public class tWorkshopZz {
    private Integer id;

    private String equipNo;

    private String equipName;

    private Integer production;

    private Integer badWg;

    private Integer goodProduction;

    private Boolean equipState;

    private String happenTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEquipNo() {
        return equipNo;
    }

    public void setEquipNo(String equipNo) {
        this.equipNo = equipNo == null ? null : equipNo.trim();
    }

    public String getEquipName() {
        return equipName;
    }

    public void setEquipName(String equipName) {
        this.equipName = equipName == null ? null : equipName.trim();
    }

    public Integer getProduction() {
        return production;
    }

    public void setProduction(Integer production) {
        this.production = production;
    }

    public Integer getBadWg() {
        return badWg;
    }

    public void setBadWg(Integer badWg) {
        this.badWg = badWg;
    }

    public Integer getGoodProduction() {
        return goodProduction;
    }

    public void setGoodProduction(Integer goodProduction) {
        this.goodProduction = goodProduction;
    }

    public Boolean getEquipState() {
        return equipState;
    }

    public void setEquipState(Boolean equipState) {
        this.equipState = equipState;
    }

    public String getHappenTime() {
        return happenTime;
    }

    public void setHappenTime(String happenTime) {
        this.happenTime = happenTime == null ? null : happenTime.trim();
    }
}