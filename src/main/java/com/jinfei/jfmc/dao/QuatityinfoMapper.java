package com.jinfei.jfmc.dao;

import com.jinfei.jfmc.model.Quatityinfo;

import java.util.List;

public interface QuatityinfoMapper {
    List<Quatityinfo> getQuatityinfoLiat(int factoryId);
}