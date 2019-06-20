package com.jinfei.jfmc.service.impl;

import com.jinfei.jfmc.dao.PeopleManageMapper;
import com.jinfei.jfmc.model.PeopleManage;
import com.jinfei.jfmc.service.IPeopleManageService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("peopleManageService")
public class PeopleManageServiceImpl implements IPeopleManageService {

    @Resource
    private PeopleManageMapper peopleManageMapper;

    @Override
    public List<PeopleManage> getPeopleManageData(int factoryId) {
        return peopleManageMapper.getPeopleManageData(factoryId);
    }

    @Override
    public List<PeopleManage> getPeopleManageList(int factoryId) {
        return peopleManageMapper.getPeopleManageList(factoryId);
    }
}
