package com.jinfei.jfmc.controller;


import com.jinfei.jfmc.model.Quatityinfo;
import com.jinfei.jfmc.service.IQuatityinfoService;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/quatityinfo")
public class QuatityInfoController {

    @Resource
    private IQuatityinfoService quatityinfoService;

    @RequestMapping("/getQuatityinfoLiat.do")
    public void getQuatityinfoLiat(HttpServletResponse response,HttpServletRequest request) throws IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");

        int factoryId = Integer.parseInt(request.getParameter("factoryId"));

        List<Quatityinfo> quatityinfoList = quatityinfoService.getQuatityinfoLiat(factoryId);

        ObjectMapper mapper = new ObjectMapper();
        response.getWriter().write(mapper.writeValueAsString(quatityinfoList));
        response.getWriter().close();
    }
}
