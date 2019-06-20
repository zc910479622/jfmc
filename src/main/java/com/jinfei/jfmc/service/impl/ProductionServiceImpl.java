package com.jinfei.jfmc.service.impl;

import com.jinfei.jfmc.dao.ProductionMapper;
import com.jinfei.jfmc.model.Production;
import com.jinfei.jfmc.service.IProductionService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service("productionService")
public class ProductionServiceImpl implements IProductionService {

    @Resource
    private ProductionMapper productionMapper;

    @Override
    public List<Production> getProductionList(Integer factoryId) {
        return productionMapper.getProductionList(factoryId);
    }
}
