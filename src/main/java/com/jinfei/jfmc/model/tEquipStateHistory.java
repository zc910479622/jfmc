package com.jinfei.jfmc.model;

import java.util.Date;

public class tEquipStateHistory {
    private Long id;

    private String equipName;

    private String equipCode;

    private Date startTime;

    private Date endTime;

    private Integer equipState;

    private String proceCode;

    private Date updateTime;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEquipName() {
        return equipName;
    }

    public void setEquipName(String equipName) {
        this.equipName = equipName == null ? null : equipName.trim();
    }

    public String getEquipCode() {
        return equipCode;
    }

    public void setEquipCode(String equipCode) {
        this.equipCode = equipCode == null ? null : equipCode.trim();
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public Date getEndTime() {
        return endTime;
    }

    public void setEndTime(Date endTime) {
        this.endTime = endTime;
    }

    public Integer getEquipState() {
        return equipState;
    }

    public void setEquipState(Integer equipState) {
        this.equipState = equipState;
    }

    public String getProceCode() {
        return proceCode;
    }

    public void setProceCode(String proceCode) {
        this.proceCode = proceCode == null ? null : proceCode.trim();
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }
}