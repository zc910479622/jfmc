package com.jinfei.jfmc.dao;


import com.jinfei.jfmc.model.Logistics;

import java.util.List;

public interface LogisticsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Logistics record);

    int insertSelective(Logistics record);

    Logistics selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Logistics record);

    int updateByPrimaryKey(Logistics record);

    List<Logistics> selectAll();
}