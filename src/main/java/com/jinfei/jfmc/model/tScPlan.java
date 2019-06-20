package com.jinfei.jfmc.model;

import java.util.Date;

public class tScPlan {
    private Integer id;

    private Date date;

    private Integer planproduction;

    private Integer realproduction;

    private byte[] scPlanJson;

    private String jsondata;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getPlanproduction() {
        return planproduction;
    }

    public void setPlanproduction(Integer planproduction) {
        this.planproduction = planproduction;
    }

    public Integer getRealproduction() {
        return realproduction;
    }

    public void setRealproduction(Integer realproduction) {
        this.realproduction = realproduction;
    }

    public byte[] getScPlanJson() {
        return scPlanJson;
    }

    public void setScPlanJson(byte[] scPlanJson) {
        this.scPlanJson = scPlanJson;
    }

    public String getJsondata() {
        return jsondata;
    }

    public void setJsondata(String jsondata) {
        this.jsondata = jsondata;
    }
}