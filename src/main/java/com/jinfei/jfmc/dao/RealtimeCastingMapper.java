package com.jinfei.jfmc.dao;

import com.jinfei.jfmc.model.RealtimeCasting;

import java.util.List;

public interface RealtimeCastingMapper {
    List<RealtimeCasting> getRealtimeData(int factoryId);
}
