package com.jinfei.jfmc.service.impl;

import com.jinfei.jfmc.dao.tScPlanMapper;
import com.jinfei.jfmc.model.tScPlan;
import com.jinfei.jfmc.service.ITScPlanService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("itScPlanService")
public class TScPlanServiceImpl implements ITScPlanService {

    @Resource
    private tScPlanMapper tScPlanMapper;

    @Override
    public List<tScPlan> getPlaninfoData() {
        return tScPlanMapper.getPlaninfoData();
    }

    @Override
    public List<tScPlan> getPlaninfoData1() {
        return tScPlanMapper.getPlaninfoData1();
    }
}
