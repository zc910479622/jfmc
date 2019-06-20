package com.jinfei.jfmc.model;

import java.util.Date;

public class Logistics {
    private Integer id;

    private String carPlate;

    private Integer carPlateType;

    private String driverName;

    private String driverPhone;

    private String pointStart;

    private String vehicleCargoNo;

    private byte[] carGoods;

    private String Goods;

    private String equipNo;

    private Double beidoulongitudeBaidu;

    private Double beidoulatitudeBaidu;

    private Double equipSpeed;

    private Boolean equipState;

    private Date updateTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCarPlate() {
        return carPlate;
    }

    public void setCarPlate(String carPlate) {
        this.carPlate = carPlate == null ? null : carPlate.trim();
    }

    public Integer getCarPlateType() {
        return carPlateType;
    }

    public void setCarPlateType(Integer carPlateType) {
        this.carPlateType = carPlateType;
    }

    public String getDriverName() {
        return driverName;
    }

    public void setDriverName(String driverName) {
        this.driverName = driverName == null ? null : driverName.trim();
    }

    public String getDriverPhone() {
        return driverPhone;
    }

    public void setDriverPhone(String driverPhone) {
        this.driverPhone = driverPhone == null ? null : driverPhone.trim();
    }

    public String getPointStart() {
        return pointStart;
    }

    public void setPointStart(String pointStart) {
        this.pointStart = pointStart == null ? null : pointStart.trim();
    }

    public String getVehicleCargoNo() {
        return vehicleCargoNo;
    }

    public void setVehicleCargoNo(String vehicleCargoNo) {
        this.vehicleCargoNo = vehicleCargoNo == null ? null : vehicleCargoNo.trim();
    }

    public byte[] getCarGoods() {
        return carGoods;
    }

    public void setCarGoods(byte[] carGoods) {
        this.carGoods = carGoods;
    }

    public String getGoods() {
        return Goods;
    }

    public void setGoods(String goods) {
        Goods = goods;
    }

    public String getEquipNo() {
        return equipNo;
    }

    public void setEquipNo(String equipNo) {
        this.equipNo = equipNo == null ? null : equipNo.trim();
    }

    public Double getBeidoulongitudeBaidu() {
        return beidoulongitudeBaidu;
    }

    public void setBeidoulongitudeBaidu(Double beidoulongitudeBaidu) {
        this.beidoulongitudeBaidu = beidoulongitudeBaidu;
    }

    public Double getBeidoulatitudeBaidu() {
        return beidoulatitudeBaidu;
    }

    public void setBeidoulatitudeBaidu(Double beidoulatitudeBaidu) {
        this.beidoulatitudeBaidu = beidoulatitudeBaidu;
    }

    public Double getEquipSpeed() {
        return equipSpeed;
    }

    public void setEquipSpeed(Double equipSpeed) {
        this.equipSpeed = equipSpeed;
    }

    public Boolean getEquipState() {
        return equipState;
    }

    public void setEquipState(Boolean equipState) {
        this.equipState = equipState;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }
}