package com.jinfei.jfmc.model;

public class tEquipmentInfo {
    private String equipNo;

    private String equipName;

    private Integer equipTypeId;

    private String proceCode;

    private String proceName;

    private String proceDesc;

    private String useCompany;

    private String useDept;

    private String useDate;

    private String equipImportance;

    private String remarks;

    private String orgNo;

    private String productionMonitoringFlag;

    private String equipMonitoringFlag;

    private String orgName;

    private String orgDesc;

    private Integer equipProduction;

    private Integer equipProductionHour;

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

    public Integer getEquipTypeId() {
        return equipTypeId;
    }

    public void setEquipTypeId(Integer equipTypeId) {
        this.equipTypeId = equipTypeId;
    }

    public String getProceCode() {
        return proceCode;
    }

    public void setProceCode(String proceCode) {
        this.proceCode = proceCode == null ? null : proceCode.trim();
    }

    public String getProceName() {
        return proceName;
    }

    public void setProceName(String proceName) {
        this.proceName = proceName == null ? null : proceName.trim();
    }

    public String getProceDesc() {
        return proceDesc;
    }

    public void setProceDesc(String proceDesc) {
        this.proceDesc = proceDesc == null ? null : proceDesc.trim();
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

    public String getEquipImportance() {
        return equipImportance;
    }

    public void setEquipImportance(String equipImportance) {
        this.equipImportance = equipImportance == null ? null : equipImportance.trim();
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks == null ? null : remarks.trim();
    }

    public String getOrgNo() {
        return orgNo;
    }

    public void setOrgNo(String orgNo) {
        this.orgNo = orgNo == null ? null : orgNo.trim();
    }

    public String getProductionMonitoringFlag() {
        return productionMonitoringFlag;
    }

    public void setProductionMonitoringFlag(String productionMonitoringFlag) {
        this.productionMonitoringFlag = productionMonitoringFlag == null ? null : productionMonitoringFlag.trim();
    }

    public String getEquipMonitoringFlag() {
        return equipMonitoringFlag;
    }

    public void setEquipMonitoringFlag(String equipMonitoringFlag) {
        this.equipMonitoringFlag = equipMonitoringFlag == null ? null : equipMonitoringFlag.trim();
    }

    public String getOrgName() {
        return orgName;
    }

    public void setOrgName(String orgName) {
        this.orgName = orgName == null ? null : orgName.trim();
    }

    public String getOrgDesc() {
        return orgDesc;
    }

    public void setOrgDesc(String orgDesc) {
        this.orgDesc = orgDesc == null ? null : orgDesc.trim();
    }

    public Integer getEquipProduction() {
        return equipProduction;
    }

    public void setEquipProduction(Integer equipProduction) {
        this.equipProduction = equipProduction;
    }

    public Integer getEquipProductionHour() {
        return equipProductionHour;
    }

    public void setEquipProductionHour(Integer equipProductionHour) {
        this.equipProductionHour = equipProductionHour;
    }
}