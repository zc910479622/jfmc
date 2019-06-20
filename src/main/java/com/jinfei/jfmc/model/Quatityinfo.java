package com.jinfei.jfmc.model;

public class Quatityinfo {
    private Integer id;

    private String locale;

    private String workstep;

    private Integer num;

    private Integer badnum;

    private Integer execdate;

    private Integer factoryid;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLocale() {
        return locale;
    }

    public void setLocale(String locale) {
        this.locale = locale == null ? null : locale.trim();
    }

    public String getWorkstep() {
        return workstep;
    }

    public void setWorkstep(String workstep) {
        this.workstep = workstep == null ? null : workstep.trim();
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public Integer getBadnum() {
        return badnum;
    }

    public void setBadnum(Integer badnum) {
        this.badnum = badnum;
    }

    public Integer getExecdate() {
        return execdate;
    }

    public void setExecdate(Integer execdate) {
        this.execdate = execdate;
    }

    public Integer getFactoryid() {
        return factoryid;
    }

    public void setFactoryid(Integer factoryid) {
        this.factoryid = factoryid;
    }
}