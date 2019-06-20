package com.jinfei.jfmc.controller;

import com.jinfei.jfmc.model.tInventory;
import com.jinfei.jfmc.model.tWip;
import com.jinfei.jfmc.service.ItInventoryService;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
@RequestMapping("/tInventory")
public class tInventoryController {
    @Resource
    private ItInventoryService itInventoryService;

    @RequestMapping("/getTInventoryData.do")
    public void getTInventoryData(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setCharacterEncoding("UTF-8");
        request.setCharacterEncoding("UTF-8");
        int factoryId = Integer.parseInt(request.getParameter("factoryId"));
        tInventory tInventory = new tInventory();
        if (factoryId == 1){
            tInventory = itInventoryService.selectByPrimaryKey();
        }else{
            tInventory = itInventoryService.selectByPrimaryKey1();
        }

        String data = new String(tInventory.getJsondata());

        ObjectMapper mapper = new ObjectMapper();
        response.getWriter().write(mapper.writeValueAsString(data));
        response.getWriter().close();
    }
}

