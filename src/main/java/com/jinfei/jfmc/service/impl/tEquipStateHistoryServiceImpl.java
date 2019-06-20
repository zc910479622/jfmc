package com.jinfei.jfmc.service.impl;

import com.jinfei.jfmc.dao.tEquipStateHistoryMapper;
import com.jinfei.jfmc.model.tEquipStateHistory;
import com.jinfei.jfmc.service.ITEquipStateHistoryService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("itEquipStateHistoryService")
public class tEquipStateHistoryServiceImpl implements ITEquipStateHistoryService {
    @Resource
    private tEquipStateHistoryMapper tEquipStateHistoryMapper;

    @Override
    public List<tEquipStateHistory> getEquipStateList() {
        return tEquipStateHistoryMapper.getEquipStateList();
    }
}
