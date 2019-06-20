package com.jinfei.jfmc.service;

import com.jinfei.jfmc.model.Quatityinfo;

import java.util.List;

public interface IQuatityinfoService {
    List<Quatityinfo> getQuatityinfoLiat(int factoryId);
}
