package com.jinfei.jfmc.dao;

import com.jinfei.jfmc.model.tEquipStateHistory;

import java.util.List;

public interface tEquipStateHistoryMapper {
    int deleteByPrimaryKey(Long id);

    int insert(tEquipStateHistory record);

    int insertSelective(tEquipStateHistory record);

    tEquipStateHistory selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(tEquipStateHistory record);

    int updateByPrimaryKey(tEquipStateHistory record);

    List<tEquipStateHistory> getEquipStateList();
}