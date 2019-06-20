package com.jinfei.jfmc.model;

public class tInventory {
    private Integer id;

    private String factory;

    private byte[] jsondata;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFactory() {
        return factory;
    }

    public void setFactory(String factory) {
        this.factory = factory == null ? null : factory.trim();
    }

    public byte[] getJsondata() {
        return jsondata;
    }

    public void setJsondata(byte[] jsondata) {
        this.jsondata = jsondata;
    }
}