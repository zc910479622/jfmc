package com.jinfei.jfmc.dao;

import com.jinfei.jfmc.model.tEquipmentInfo;

import java.util.List;

public interface tEquipmentInfoMapper {
    int deleteByPrimaryKey(String equipNo);

    int insert(tEquipmentInfo record);

    int insertSelective(tEquipmentInfo record);

    tEquipmentInfo selectByPrimaryKey(String equipNo);

    int updateByPrimaryKeySelective(tEquipmentInfo record);

    int updateByPrimaryKey(tEquipmentInfo record);

    List<tEquipmentInfo> getTEquipmentInfo();
}