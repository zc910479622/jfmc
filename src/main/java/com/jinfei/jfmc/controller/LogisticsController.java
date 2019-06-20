package com.jinfei.jfmc.controller;


import com.jinfei.jfmc.model.Logistics;
import com.jinfei.jfmc.service.ILogisticsService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import java.io.UnsupportedEncodingException;
import java.util.List;

@Controller
@RequestMapping("/Logistics")
public class LogisticsController {

    @Resource
    ILogisticsService logisticsService;

    @RequestMapping("/SelectLogistics.do")
    public @ResponseBody List<Logistics> SelectLogistics(HttpServletResponse response){
        response.setCharacterEncoding("UTF-8");
        List<Logistics> logisticsList = logisticsService.selectAll();
        for (Logistics logistics:logisticsList){
            String str = null;
            try {
                str = new String(logistics.getCarGoods(),"UTF-8");
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }
            logistics.setGoods(str);
        }
        return logisticsList;
    }
}
