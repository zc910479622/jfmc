package com.jinfei.jfmc.service;

import com.jinfei.jfmc.model.Production;

import java.util.List;

public interface IProductionService {
    List<Production> getProductionList(Integer factoryId);
}
