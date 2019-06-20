package com.jinfei.jfmc.controller;


import com.jinfei.jfmc.model.RealtimeCasting;
import com.jinfei.jfmc.service.IRealtimeCastingService;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/Realtime")
public class RealtimeCastingController {

    @Resource
    private IRealtimeCastingService realtimeCastingService;

    @RequestMapping("/getRealtimeData.do")
    public @ResponseBody List<RealtimeCasting> getRealtimeData(Integer factoryId) {

        List<RealtimeCasting> realtimeCastingList = new ArrayList<RealtimeCasting>();

        if (factoryId == 1){
            realtimeCastingList = realtimeCastingService.getRealtimeData();
        }else {
            realtimeCastingList = realtimeCastingService.getRealtimeData1();
        }

        return realtimeCastingList;
    }

}
