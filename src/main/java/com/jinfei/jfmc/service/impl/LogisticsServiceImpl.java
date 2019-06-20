package com.jinfei.jfmc.service.impl;


import com.jinfei.jfmc.dao.LogisticsMapper;
import com.jinfei.jfmc.model.Logistics;
import com.jinfei.jfmc.service.ILogisticsService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("LogisticsService")
public class LogisticsServiceImpl implements ILogisticsService {

    @Resource
    LogisticsMapper logisticsMapper;

    @Override
    public List<Logistics> selectAll() {
        return logisticsMapper.selectAll();
    }
}
