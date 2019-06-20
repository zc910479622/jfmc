package com.jinfei.jfmc.service.impl;

import com.jinfei.jfmc.dao.WeatherMapper;
import com.jinfei.jfmc.model.Weather;
import com.jinfei.jfmc.service.IWeatherService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service("weatherService")
public class WeatherServiceImpl implements IWeatherService {

    @Resource
    private WeatherMapper weatherMapper;

    @Override
    public Weather getWeatherData() {
        return weatherMapper.getWeatherData();
    }
}
