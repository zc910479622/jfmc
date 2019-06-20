package com.jinfei.jfmc.service.impl;

import com.jinfei.jfmc.dao.EquipmentMapper;
import com.jinfei.jfmc.model.Equipment;
import com.jinfei.jfmc.service.IEquipmentService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("equipmentService")
public class EquipmentServiceImpl implements IEquipmentService {

    @Resource
    private EquipmentMapper equipmentMapper;

    @Override
    public Equipment getEquipmentData(int factoryId) {
        return equipmentMapper.getEquipmentData(factoryId);
    }
}
