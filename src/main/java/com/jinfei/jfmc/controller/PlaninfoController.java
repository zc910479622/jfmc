package com.jinfei.jfmc.controller;

import com.jinfei.jfmc.model.tScPlan;
import com.jinfei.jfmc.service.ITScPlanService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping("/planinfo")
public class PlaninfoController {

    @Resource
    private ITScPlanService itScPlanService;

    @RequestMapping("/getPlaninfoData.do")
    public void getPlaninfoData(HttpServletResponse response, HttpServletRequest request)throws IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        int factoryId = Integer.parseInt(request.getParameter("factoryId"));
        List<tScPlan> tScPlans = new ArrayList<tScPlan>();
        if (factoryId == 1){
            tScPlans = itScPlanService.getPlaninfoData();
            for(tScPlan tScPlan:tScPlans){
                tScPlan.setJsondata(new String(tScPlan.getScPlanJson(),"UTF-8"));
            }
        }else{
            tScPlans = itScPlanService.getPlaninfoData1();
            for(tScPlan tScPlan:tScPlans){
                tScPlan.setJsondata(new String(tScPlan.getScPlanJson(),"UTF-8"));
            }
        }

        ObjectMapper mapper = new ObjectMapper();
        response.getWriter().write(mapper.writeValueAsString(tScPlans));
        response.getWriter().close();
    }

    public static String dateToStr(Date time) {
        DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
        String str = df.format(time);
        return str;
    }
}
