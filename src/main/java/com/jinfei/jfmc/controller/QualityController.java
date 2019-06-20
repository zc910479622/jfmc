package com.jinfei.jfmc.controller;

import com.jinfei.jfmc.model.tQuality;
import com.jinfei.jfmc.model.tQualityCopy1;
import com.jinfei.jfmc.service.ITQualityService;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/quality")
public class QualityController {

    @Resource
    private ITQualityService qualityService;

    @RequestMapping("/getQualityData.do")
    public void getQualityData(HttpServletResponse response, HttpServletRequest request) throws IOException {
        response.setCharacterEncoding("UTF-8");
        request.setCharacterEncoding("UTF-8");
        int factoryId = Integer.parseInt(request.getParameter("factoryId"));

        if(factoryId == 1){
            List<tQuality> qualityList = qualityService.getQualityData(factoryId);

            ObjectMapper mapper = new ObjectMapper();
            response.getWriter().write(mapper.writeValueAsString(qualityList));
            response.getWriter().close();
        }else if(factoryId == 2) {
            List<tQualityCopy1> tQualityCopy1s = qualityService.getQualityData1(factoryId);

            ObjectMapper mapper = new ObjectMapper();
            response.getWriter().write(mapper.writeValueAsString(tQualityCopy1s));
            response.getWriter().close();
        }

    }

}
