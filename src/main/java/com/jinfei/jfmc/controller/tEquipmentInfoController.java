package com.jinfei.jfmc.controller;

import com.jinfei.jfmc.model.tEquipmentInfo;
import com.jinfei.jfmc.service.ITEquipmentInfoService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("/tEquipmentInfo")
public class tEquipmentInfoController {

    @Resource
    private ITEquipmentInfoService itEquipmentInfoService;

    @RequestMapping("/getTEquipmentInfo.do")
    public @ResponseBody List<tEquipmentInfo> getTEquipmentInfo(){
        return itEquipmentInfoService.getTEquipmentInfo();
    }

}
