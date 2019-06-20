package com.jinfei.jfmc.dao;

import com.jinfei.jfmc.model.Production;

import java.util.List;

public interface ProductionMapper {
    List<Production> getProductionList(Integer factoryId);
}