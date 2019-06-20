package com.jinfei.jfmc.controller;

import com.jinfei.jfmc.model.tEquipStateHistory;
import com.jinfei.jfmc.service.ITEquipStateHistoryService;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/EquipState")
public class EquipStateHistoryController {
    @Resource
    ITEquipStateHistoryService itEquipStateHistoryService;

    @RequestMapping("/getEquipStateList.do")
    public @ResponseBody List<tEquipStateHistory> getEquipStateList() {
       return itEquipStateHistoryService.getEquipStateList();

    }
}
