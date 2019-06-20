package com.jinfei.jfmc.dao;

import com.jinfei.jfmc.model.RealtimeCasting;
import com.jinfei.jfmc.model.tWorkshopZz;

import java.util.List;

public interface tWorkshopZzMapper {
    List<RealtimeCasting> getRealtimeData();

    List<RealtimeCasting> getRealtimeData1();
}