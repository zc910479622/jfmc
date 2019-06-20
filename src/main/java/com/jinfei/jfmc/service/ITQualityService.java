package com.jinfei.jfmc.service;

import com.jinfei.jfmc.model.tQuality;
import com.jinfei.jfmc.model.tQualityCopy1;

import java.util.List;

public interface ITQualityService {
    List<tQuality> getQualityData(int factoryId);
    List<tQualityCopy1> getQualityData1(int factoryId);
}
