package com.jinfei.jfmc.controller;

import com.jinfei.jfmc.model.Deviation;
import com.jinfei.jfmc.model.tEnergyConsumption;
import com.jinfei.jfmc.service.IDeviationService;
import com.jinfei.jfmc.service.IEnergyService;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/energy")
public class EnergyController {

    @Resource
    private IEnergyService energyService;

    @Resource
    private IDeviationService deviationService;

    @RequestMapping("/nenghao.do")
    public void getEnergyData(HttpServletResponse response, HttpServletRequest request) throws IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        List<tEnergyConsumption> energydataList = energyService.getEnergyData();

        ObjectMapper mapper = new ObjectMapper();
        response.getWriter().write(mapper.writeValueAsString(energydataList));
        response.getWriter().close();

    }

    @RequestMapping("/piancha.do")
    public void getpPianCha(HttpServletRequest request,HttpServletResponse response)throws IOException{
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");

        List<Deviation> deviationList = deviationService.getPianCha();

        ObjectMapper mapper = new ObjectMapper();
        response.getWriter().write(mapper.writeValueAsString(deviationList));
        response.getWriter().close();
    }

 }
