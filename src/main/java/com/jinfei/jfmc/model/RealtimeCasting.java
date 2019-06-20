package com.jinfei.jfmc.model;


public class RealtimeCasting {

  private int recordId;
  private String equipName;
  private int yield;
  private int turnDown;
  private int operatioState;
  private int factoryId;


  public int getRecordId() {
    return recordId;
  }

  public void setRecordId(int recordId) {
    this.recordId = recordId;
  }


  public String getEquipName() {
    return equipName;
  }

  public void setEquipName(String equipName) {
    this.equipName = equipName;
  }


  public int getYield() {
    return yield;
  }

  public void setYield(int yield) {
    this.yield = yield;
  }


  public int getTurnDown() {
    return turnDown;
  }

  public void setTurnDown(int turnDown) {
    this.turnDown = turnDown;
  }


  public int getOperatioState() {
    return operatioState;
  }

  public void setOperatioState(int operatioState) {
    this.operatioState = operatioState;
  }


  public int getFactoryId() {
    return factoryId;
  }

  public void setFactoryId(int factoryId) {
    this.factoryId = factoryId;
  }

}
