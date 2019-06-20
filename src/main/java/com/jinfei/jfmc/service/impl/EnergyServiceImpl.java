package com.jinfei.jfmc.service.impl;

import com.jinfei.jfmc.dao.tEnergyConsumptionMapper;
import com.jinfei.jfmc.model.tEnergyConsumption;
import com.jinfei.jfmc.service.IEnergyService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("energyService")
public class EnergyServiceImpl implements IEnergyService {

    @Resource
    private tEnergyConsumptionMapper tEnergyConsumptionMapper;

    @Override
    public List<tEnergyConsumption> getEnergyData() {
        return tEnergyConsumptionMapper.getEnergyData();
    }


}
