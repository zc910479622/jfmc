package com.jinfei.jfmc.service.impl;

import com.jinfei.jfmc.dao.tOrderInfoMapper;
import com.jinfei.jfmc.model.tOrderInfo;
import com.jinfei.jfmc.service.ITOrderInfoService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service()
public class TOrderInfoServiceImpl implements ITOrderInfoService {

    @Resource
    private tOrderInfoMapper tOrderInfoMapper;

    @Override
    public tOrderInfo selectByPrimaryKey() {
        return tOrderInfoMapper.selectByPrimaryKey();
    }

    @Override
    public tOrderInfo selectByPrimaryKey1() {
        return tOrderInfoMapper.selectByPrimaryKey1();
    }
}
