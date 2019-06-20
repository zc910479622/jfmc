package com.jinfei.jfmc.dao;

import com.jinfei.jfmc.model.tQuality;

import java.util.List;

public interface tQualityMapper {
    List<tQuality> getQualityData(int factoryId);
}