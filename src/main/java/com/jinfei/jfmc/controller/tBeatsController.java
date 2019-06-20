package com.jinfei.jfmc.controller;

import com.jinfei.jfmc.model.tBeats;
import com.jinfei.jfmc.service.ItBeatsService;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/tBeats")
public class tBeatsController {
    @Resource
    private ItBeatsService tBeatsService;

    @RequestMapping("/getSelect.do")
    public void getSelect(HttpServletResponse response, HttpServletRequest request)throws IOException{
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");

        List<tBeats> tBeatsList = tBeatsService.getSelect();
        ObjectMapper mapper = new ObjectMapper();
        response.getWriter().write(mapper.writeValueAsString(tBeatsList));
        response.getWriter().close();
    }

    @RequestMapping("/gettBeatsList.do")
    public void gettBeatsList(HttpServletResponse response, HttpServletRequest request)throws IOException{
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");

        String equipname = request.getParameter("equipname");

        List<tBeats> tBeatsList = tBeatsService.gettBeatsList(equipname);

        ObjectMapper mapper = new ObjectMapper();
        response.getWriter().write(mapper.writeValueAsString(tBeatsList));
        response.getWriter().close();
    }

    @RequestMapping("gettBeatsCount.do")
    public @ResponseBody List<tBeats> gettBeatsCount() {
        List<tBeats> tBeatsList = tBeatsService.gettBeatsCount();
        List<tBeats> tBeatsList1 = tBeatsService.getMechanicalBeatsCount();
        for ( tBeats tBeats :tBeatsList){
            for (tBeats tBeats1:tBeatsList1){
                if (tBeats.getEquipno().equals(tBeats1.getEquipno())){
                    tBeats.setMechanical(tBeats1.getMechanical());
                }
            }
        };
        return tBeatsList;
    }

}
