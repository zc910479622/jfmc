package com.jinfei.jfmc.service.impl;

import com.jinfei.jfmc.dao.tWipMapper;
import com.jinfei.jfmc.model.tWip;
import com.jinfei.jfmc.service.ItWipService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("wipService")
public class tWipServiceImpl implements ItWipService {

    @Resource
    private tWipMapper tWipMapper;

    @Override
    public tWip selectByPrimaryKey() {
        return tWipMapper.selectByPrimaryKey();
    }

    @Override
    public tWip selectByPrimaryKey1() {
        return tWipMapper.selectByPrimaryKey1();
    }
}
