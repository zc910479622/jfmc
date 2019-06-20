package com.jinfei.jfmc.model;

import java.util.Date;

public class Production {
    private Integer dayPlanId;

    private Date day;

    private String planOrderNum;

    private String productModel;

    private Integer target;

    private Integer morningProduction;

    private Integer afternoonProduction;

    private Integer eveningProduction;

    private Integer factoryid;

    public Integer getDayPlanId() {
        return dayPlanId;
    }

    public void setDayPlanId(Integer dayPlanId) {
        this.dayPlanId = dayPlanId;
    }

    public Date getDay() {
        return day;
    }

    public void setDay(Date day) {
        this.day = day;
    }

    public String getPlanOrderNum() {
        return planOrderNum;
    }

    public void setPlanOrderNum(String planOrderNum) {
        this.planOrderNum = planOrderNum == null ? null : planOrderNum.trim();
    }

    public String getProductModel() {
        return productModel;
    }

    public void setProductModel(String productModel) {
        this.productModel = productModel == null ? null : productModel.trim();
    }

    public Integer getTarget() {
        return target;
    }

    public void setTarget(Integer target) {
        this.target = target;
    }

    public Integer getMorningProduction() {
        return morningProduction;
    }

    public void setMorningProduction(Integer morningProduction) {
        this.morningProduction = morningProduction;
    }

    public Integer getAfternoonProduction() {
        return afternoonProduction;
    }

    public void setAfternoonProduction(Integer afternoonProduction) {
        this.afternoonProduction = afternoonProduction;
    }

    public Integer getEveningProduction() {
        return eveningProduction;
    }

    public void setEveningProduction(Integer eveningProduction) {
        this.eveningProduction = eveningProduction;
    }

    public Integer getFactoryid() {
        return factoryid;
    }

    public void setFactoryid(Integer factoryid) {
        this.factoryid = factoryid;
    }
}