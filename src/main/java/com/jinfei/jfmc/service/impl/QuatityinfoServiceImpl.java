package com.jinfei.jfmc.service.impl;

import com.jinfei.jfmc.dao.QuatityinfoMapper;
import com.jinfei.jfmc.model.Quatityinfo;
import com.jinfei.jfmc.service.IQuatityinfoService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("quatityinfoService")
public class QuatityinfoServiceImpl implements IQuatityinfoService {
    @Resource
    private QuatityinfoMapper quatityinfoMapper;


    @Override
    public List<Quatityinfo> getQuatityinfoLiat(int factoryId) {
        return quatityinfoMapper.getQuatityinfoLiat(factoryId);
    }
}
