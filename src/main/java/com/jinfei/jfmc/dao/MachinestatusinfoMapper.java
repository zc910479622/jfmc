package com.jinfei.jfmc.dao;

import com.jinfei.jfmc.model.Machinestatusinfo;

import java.util.List;

public interface MachinestatusinfoMapper {
    //根据工厂id获取设备列表
    List<Machinestatusinfo> queryMacList(Machinestatusinfo machinestatusinfo);

    List<Machinestatusinfo> getMacinestatusinfo();
}