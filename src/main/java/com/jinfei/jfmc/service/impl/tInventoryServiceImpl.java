package com.jinfei.jfmc.service.impl;

import com.jinfei.jfmc.dao.tInventoryMapper;
import com.jinfei.jfmc.model.tInventory;
import com.jinfei.jfmc.service.ItInventoryService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("itInventoryService")
public class tInventoryServiceImpl implements ItInventoryService {

    @Resource
    private tInventoryMapper tInventoryMapper;

    @Override
    public tInventory selectByPrimaryKey() {
        return tInventoryMapper.selectByPrimaryKey();
    }

    @Override
    public tInventory selectByPrimaryKey1() {
        return tInventoryMapper.selectByPrimaryKey1();
    }
}
