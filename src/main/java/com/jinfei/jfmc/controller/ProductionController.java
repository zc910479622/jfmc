package com.jinfei.jfmc.controller;

import com.jinfei.jfmc.model.Production;
import com.jinfei.jfmc.service.IProductionService;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/production")
public class ProductionController {
    @Resource
    private IProductionService productionService;

    @RequestMapping("/getProductionList.do")
    public void getProductionList(HttpServletResponse response, HttpServletRequest request) throws IOException {
        response.setCharacterEncoding("UTF-8");
        request.setCharacterEncoding("UTF-8");
        Integer factoryId = Integer.parseInt(request.getParameter("factoryId"));

        List<Production> productionList = productionService.getProductionList(factoryId);

        ObjectMapper mapper = new ObjectMapper();
        response.getWriter().write(mapper.writeValueAsString(productionList));
        response.getWriter().close();
    }
}
