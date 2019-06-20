package com.jinfei.jfmc.controller;

import com.jinfei.jfmc.model.tScPlan;
import com.jinfei.jfmc.model.tWip;
import com.jinfei.jfmc.service.ItWipService;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
@RequestMapping("/wip")
public class WipController {

    @Resource
    private ItWipService wipService;

    @RequestMapping("/getWipData.do")
    public void getWipData(HttpServletResponse response, HttpServletRequest request) throws IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        int factoryId = Integer.parseInt(request.getParameter("factoryId"));
        tWip wip = new tWip();

        if (factoryId == 1){
            wip = wipService.selectByPrimaryKey();
        }else{
            wip = wipService.selectByPrimaryKey1();
        }


        String data = new String(wip.getJsondata());
        ObjectMapper mapper = new ObjectMapper();
        response.getWriter().write(mapper.writeValueAsString(data));
        response.getWriter().close();

    }


}
