package com.jinfei.jfmc.model;

public class tOrderInfo {
    private Integer id;

    private Integer orderProductionPlan;

    private Integer orderProductionFinish;

    private byte[] orderInfoJson;

    private String json;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getOrderProductionPlan() {
        return orderProductionPlan;
    }

    public void setOrderProductionPlan(Integer orderProductionPlan) {
        this.orderProductionPlan = orderProductionPlan;
    }

    public Integer getOrderProductionFinish() {
        return orderProductionFinish;
    }

    public void setOrderProductionFinish(Integer orderProductionFinish) {
        this.orderProductionFinish = orderProductionFinish;
    }

    public byte[] getOrderInfoJson() {
        return orderInfoJson;
    }

    public void setOrderInfoJson(byte[] orderInfoJson) {
        this.orderInfoJson = orderInfoJson;
    }

    public String getJson() {
        return json;
    }

    public void setJson(String json) {
        this.json = json;
    }
}