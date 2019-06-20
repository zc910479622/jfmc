package com.jinfei.jfmc.service;

import com.jinfei.jfmc.model.PeopleManage;

import java.util.List;

public interface IPeopleManageService {
    List<PeopleManage> getPeopleManageData(int factoryId);


    List<PeopleManage> getPeopleManageList(int factoryId);
}
