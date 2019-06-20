package com.jinfei.jfmc.service.impl;

import com.jinfei.jfmc.dao.MachinestatusinfoMapper;
import com.jinfei.jfmc.model.Machinestatusinfo;
import com.jinfei.jfmc.service.IMachinestatusinfoService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
@Service

public class MachinestatusinfoServiceImpl implements IMachinestatusinfoService {
    @Resource
    private MachinestatusinfoMapper machinestatusinfoMapper;
    @Override
    public List<Machinestatusinfo> queryMacListService(Machinestatusinfo machinestatusinfo) {
       return   machinestatusinfoMapper.queryMacList(machinestatusinfo);
    }

    @Override
    public List<Machinestatusinfo> getMacinestatusinfo() {
        return machinestatusinfoMapper.getMacinestatusinfo();
    }
}
