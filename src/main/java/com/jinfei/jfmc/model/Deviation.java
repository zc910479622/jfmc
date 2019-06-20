package com.jinfei.jfmc.model;


public class Deviation {

  private int id;
  private double generalTable;
  private String generalTableNo;
  private double subTable;
  private java.sql.Timestamp recordDate;


  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }


  public double getGeneralTable() {
    return generalTable;
  }

  public void setGeneralTable(double generalTable) {
    this.generalTable = generalTable;
  }


  public String getGeneralTableNo() {
    return generalTableNo;
  }

  public void setGeneralTableNo(String generalTableNo) {
    this.generalTableNo = generalTableNo;
  }


  public double getSubTable() {
    return subTable;
  }

  public void setSubTable(double subTable) {
    this.subTable = subTable;
  }


  public java.sql.Timestamp getRecordDate() {
    return recordDate;
  }

  public void setRecordDate(java.sql.Timestamp recordDate) {
    this.recordDate = recordDate;
  }

}
