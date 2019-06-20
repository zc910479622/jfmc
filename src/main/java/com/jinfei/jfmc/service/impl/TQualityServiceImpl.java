package com.jinfei.jfmc.service.impl;

import com.jinfei.jfmc.dao.tQualityCopy1Mapper;
import com.jinfei.jfmc.dao.tQualityMapper;
import com.jinfei.jfmc.model.tQuality;
import com.jinfei.jfmc.model.tQualityCopy1;
import com.jinfei.jfmc.service.ITQualityService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("qualityService")
public class TQualityServiceImpl implements ITQualityService {

    @Resource
    private tQualityMapper tQualityMapper;

    @Resource
    private tQualityCopy1Mapper tQualityCopy1Mapper;

    @Override
    public List<tQuality> getQualityData(int factoryId) {
        return tQualityMapper.getQualityData(factoryId);
    }

    @Override
    public List<tQualityCopy1> getQualityData1(int factoryId) {
        return tQualityCopy1Mapper.getQualityData(factoryId);
    }
}
