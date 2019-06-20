package com.jinfei.jfmc.model;

import java.util.List;

public class Machinestatusinfo {
    private Integer id;

    private String equipNo;

    private String equipName;

    private String proceCode;

    private String useCompany;

    private String useDept;

    private String useDate;

    private String madeFact;

    private String factNo;

    private Boolean enableFlag;

    private Integer errorType;
    //工厂ID
    private Integer factoryId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEquipNo() {
        return equipNo;
    }

    public void setEquipNo(String equipNo) {
        this.equipNo = equipNo == null ? null : equipNo.trim();
    }

    public String getEquipName() {
        return equipName;
    }

    public void setEquipName(String equipName) {
        this.equipName = equipName == null ? null : equipName.trim();
    }

    public String getProceCode() {
        return proceCode;
    }

    public void setProceCode(String proceCode) {
        this.proceCode = proceCode == null ? null : proceCode.trim();
    }

    public String getUseCompany() {
        return useCompany;
    }

    public void setUseCompany(String useCompany) {
        this.useCompany = useCompany == null ? null : useCompany.trim();
    }

    public String getUseDept() {
        return useDept;
    }

    public void setUseDept(String useDept) {
        this.useDept = useDept == null ? null : useDept.trim();
    }

    public String getUseDate() {
        return useDate;
    }

    public void setUseDate(String useDate) {
        this.useDate = useDate == null ? null : useDate.trim();
    }

    public String getMadeFact() {
        return madeFact;
    }

    public void setMadeFact(String madeFact) {
        this.madeFact = madeFact == null ? null : madeFact.trim();
    }

    public String getFactNo() {
        return factNo;
    }

    public void setFactNo(String factNo) {
        this.factNo = factNo == null ? null : factNo.trim();
    }

    public Boolean getEnableFlag() {
        return enableFlag;
    }

    public void setEnableFlag(Boolean enableFlag) {
        this.enableFlag = enableFlag;
    }

    public Integer getErrorType() {
        return errorType;
    }

    public void setErrorType(Integer errorType) {
        this.errorType = errorType;
    }

    public Integer getFactoryId() {
        return factoryId;
    }

    public void setFactoryId(Integer factoryId) {
        this.factoryId = factoryId;
    }
}