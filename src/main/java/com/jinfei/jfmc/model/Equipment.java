package com.jinfei.jfmc.model;


import java.util.List;

public class Equipment {

  private int id;
  private int total;
  private int fault;
  private int lackMaterial;
  private int unscheduling;
  private int shorthanded;
  private int timeout;
  private int factoryId;


  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }


  public int getTotal() {
    return total;
  }

  public void setTotal(int total) {
    this.total = total;
  }


  public int getFault() {
    return fault;
  }

  public void setFault(int fault) {
    this.fault = fault;
  }


  public int getLackMaterial() {
    return lackMaterial;
  }

  public void setLackMaterial(int lackMaterial) {
    this.lackMaterial = lackMaterial;
  }


  public int getUnscheduling() {
    return unscheduling;
  }

  public void setUnscheduling(int unscheduling) {
    this.unscheduling = unscheduling;
  }


  public int getShorthanded() {
    return shorthanded;
  }

  public void setShorthanded(int shorthanded) {
    this.shorthanded = shorthanded;
  }


  public int getTimeout() {
    return timeout;
  }

  public void setTimeout(int timeout) {
    this.timeout = timeout;
  }


  public int getFactoryId() {
    return factoryId;
  }

  public void setFactoryId(int factoryId) {
    this.factoryId = factoryId;
  }
}
