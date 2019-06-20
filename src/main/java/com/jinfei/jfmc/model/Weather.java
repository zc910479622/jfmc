package com.jinfei.jfmc.model;

public class Weather {
    private Integer id;

    private String city;

    private Integer wendunow;

    private Integer wendumin;

    private Integer wendumax;

    private String type;

    private Integer shidu;

    private Integer pm25;

    private Integer pm10;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city == null ? null : city.trim();
    }

    public Integer getWendunow() {
        return wendunow;
    }

    public void setWendunow(Integer wendunow) {
        this.wendunow = wendunow;
    }

    public Integer getWendumin() {
        return wendumin;
    }

    public void setWendumin(Integer wendumin) {
        this.wendumin = wendumin;
    }

    public Integer getWendumax() {
        return wendumax;
    }

    public void setWendumax(Integer wendumax) {
        this.wendumax = wendumax;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type == null ? null : type.trim();
    }

    public Integer getShidu() {
        return shidu;
    }

    public void setShidu(Integer shidu) {
        this.shidu = shidu;
    }

    public Integer getPm25() {
        return pm25;
    }

    public void setPm25(Integer pm25) {
        this.pm25 = pm25;
    }

    public Integer getPm10() {
        return pm10;
    }

    public void setPm10(Integer pm10) {
        this.pm10 = pm10;
    }
}