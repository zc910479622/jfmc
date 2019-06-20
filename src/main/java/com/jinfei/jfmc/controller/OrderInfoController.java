package com.jinfei.jfmc.controller;

import com.jinfei.jfmc.model.tOrderInfo;
import com.jinfei.jfmc.service.ITOrderInfoService;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
@RequestMapping("/order")
public class OrderInfoController {

    @Resource
    private ITOrderInfoService itOrderInfoService;

    @RequestMapping("/getOrderData.do")
    public void getOrderData(HttpServletResponse response, HttpServletRequest request)throws IOException{
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        tOrderInfo tOrderInfo = new tOrderInfo();
        int factoryId = Integer.parseInt(request.getParameter("factoryId"));
        if (factoryId == 1){
            tOrderInfo = itOrderInfoService.selectByPrimaryKey();
            tOrderInfo.setJson(new String(tOrderInfo.getOrderInfoJson(),"UTF-8"));
        }else {
            tOrderInfo = itOrderInfoService.selectByPrimaryKey1();
            tOrderInfo.setJson(new String(tOrderInfo.getOrderInfoJson(),"GBK"));
        }

        ObjectMapper mapper = new ObjectMapper();
        response.getWriter().write(mapper.writeValueAsString(tOrderInfo));
        response.getWriter().close();
    }
}
