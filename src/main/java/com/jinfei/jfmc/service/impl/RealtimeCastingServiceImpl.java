package com.jinfei.jfmc.service.impl;

import com.jinfei.jfmc.dao.RealtimeCastingMapper;
import com.jinfei.jfmc.dao.tWorkshopZzMapper;
import com.jinfei.jfmc.model.RealtimeCasting;
import com.jinfei.jfmc.service.IRealtimeCastingService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("realtimeCastingService")
public class RealtimeCastingServiceImpl implements IRealtimeCastingService {
    @Resource
    private tWorkshopZzMapper tWorkshopZzMapper;

    @Override
    public List<RealtimeCasting> getRealtimeData() {
        return tWorkshopZzMapper.getRealtimeData();
    }

    @Override
    public List<RealtimeCasting> getRealtimeData1() {
        return tWorkshopZzMapper.getRealtimeData1();
    }
}
