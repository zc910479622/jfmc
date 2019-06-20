package com.jinfei.jfmc.dao;

import com.jinfei.jfmc.model.PeopleManage;

import java.util.List;

public interface PeopleManageMapper {

    List<PeopleManage> getPeopleManageData(int factoryId);

    List<PeopleManage> getPeopleManageList(int factoryId);
}