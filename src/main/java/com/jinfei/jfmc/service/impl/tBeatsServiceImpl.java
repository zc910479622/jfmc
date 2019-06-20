package com.jinfei.jfmc.service.impl;

import com.jinfei.jfmc.dao.tBeatsMapper;
import com.jinfei.jfmc.model.tBeats;
import com.jinfei.jfmc.service.ItBeatsService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("tBeatsService")
public class tBeatsServiceImpl implements ItBeatsService {

    @Resource
    private tBeatsMapper tBeatsMapper;

    @Override
    public List<tBeats> getSelect() {
        return tBeatsMapper.getSelect();
    }

    @Override
    public List<tBeats> gettBeatsList(String equipName) {
        return tBeatsMapper.gettBeatsList(equipName);
    }

    @Override
    public List<tBeats> gettBeatsCount() {
        return tBeatsMapper.gettBeatsCount();
    }

    @Override
    public List<tBeats> getMechanicalBeatsCount() {
        return tBeatsMapper.getMechanicalBeatsCount();
    }
}
