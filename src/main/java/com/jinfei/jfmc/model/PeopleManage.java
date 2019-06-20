package com.jinfei.jfmc.model;

import java.util.Date;

public class PeopleManage {
    private Integer id;

    private Integer workdate;

    private Integer peoplenum;

    private Integer shidao;

    private Byte rotattype;

    private String locale;

    private Integer factoryId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getWorkdate() {
        return workdate;
    }

    public void setWorkdate(Integer workdate) {
        this.workdate = workdate;
    }

    public Integer getPeoplenum() {
        return peoplenum;
    }

    public void setPeoplenum(Integer peoplenum) {
        this.peoplenum = peoplenum;
    }

    public Integer getShidao() {
        return shidao;
    }

    public void setShidao(Integer shidao) {
        this.shidao = shidao;
    }

    public Byte getRotattype() {
        return rotattype;
    }

    public void setRotattype(Byte rotattype) {
        this.rotattype = rotattype;
    }

    public String getLocale() {
        return locale;
    }

    public void setLocale(String locale) {
        this.locale = locale == null ? null : locale.trim();
    }

    public Integer getFactoryId() {
        return factoryId;
    }

    public void setFactoryId(Integer factoryId) {
        this.factoryId = factoryId;
    }
}