package com.jinfei.jfmc.service.impl;

import com.jinfei.jfmc.dao.tEquipmentInfoMapper;
import com.jinfei.jfmc.model.tEquipmentInfo;
import com.jinfei.jfmc.service.ITEquipmentInfoService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class tEquipmentInfoServiceImpl implements ITEquipmentInfoService {

    @Resource
    private tEquipmentInfoMapper tEquipmentInfoMapper;

    @Override
    public List<tEquipmentInfo> getTEquipmentInfo() {
        return tEquipmentInfoMapper.getTEquipmentInfo();
    }
}
