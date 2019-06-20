package com.jinfei.jfmc.controller;

import com.jinfei.jfmc.model.PeopleManage;
import com.jinfei.jfmc.service.IPeopleManageService;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/peoplemanage")
public class PeopleManageController {

    @Resource
    private IPeopleManageService peopleManageService;

    @RequestMapping("/getPeopleManageData.do")
    public void getPeopleManageData(HttpServletResponse response, HttpServletRequest request) throws IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        int factoryId = Integer.parseInt(request.getParameter("factoryId"));
        List<PeopleManage> peopleManageList = peopleManageService.getPeopleManageData(factoryId);

        ObjectMapper mapper = new ObjectMapper();
        response.getWriter().write(mapper.writeValueAsString(peopleManageList));
        response.getWriter().close();

    }

    @RequestMapping("getPeopleManageList.do")
    public void getPeoPleManageList(HttpServletResponse response, HttpServletRequest request) throws IOException {
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        int factoryId = Integer.parseInt(request.getParameter("factoryId"));
        List<PeopleManage> peopleManageList = peopleManageService.getPeopleManageList(factoryId);

        ObjectMapper mapper = new ObjectMapper();
        response.getWriter().write(mapper.writeValueAsString(peopleManageList));
        response.getWriter().close();

    }
}
