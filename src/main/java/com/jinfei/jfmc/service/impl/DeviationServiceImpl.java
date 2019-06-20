package com.jinfei.jfmc.service.impl;

import com.jinfei.jfmc.dao.DeviationMapper;
import com.jinfei.jfmc.model.Deviation;
import com.jinfei.jfmc.service.IDeviationService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("deviationService")
public class DeviationServiceImpl implements IDeviationService {

    @Resource
    private DeviationMapper deviationMapper;

    @Override
    public List<Deviation> getPianCha() {
        return deviationMapper.getPianCha();
    }


}
