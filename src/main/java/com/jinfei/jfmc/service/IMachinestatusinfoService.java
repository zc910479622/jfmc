package com.jinfei.jfmc.service;

import com.jinfei.jfmc.model.Machinestatusinfo;

import java.util.List;

public interface IMachinestatusinfoService {
    //根据工厂id获取设备列表
    List<Machinestatusinfo> queryMacListService(Machinestatusinfo machinestatusinfo);

    List<Machinestatusinfo> getMacinestatusinfo();
}
