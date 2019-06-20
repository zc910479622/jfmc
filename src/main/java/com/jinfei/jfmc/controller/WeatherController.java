package com.jinfei.jfmc.controller;


import com.jinfei.jfmc.model.Weather;
import com.jinfei.jfmc.service.IWeatherService;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Controller
@RequestMapping("/weather")
public class WeatherController {

    @Resource
    private IWeatherService weatherService;

    @RequestMapping("/getWeatherData.do")
    public void getWeatherData(HttpServletResponse response, HttpServletRequest request)throws IOException{
        response.setCharacterEncoding("UTF-8");
        request.setCharacterEncoding("UTF-8");

        Weather weather = weatherService.getWeatherData();

        ObjectMapper mapper = new ObjectMapper();
        response.getWriter().write(mapper.writeValueAsString(weather));
        response.getWriter().close();
    }
}