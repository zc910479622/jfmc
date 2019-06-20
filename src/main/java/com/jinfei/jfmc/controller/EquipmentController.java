package com.jinfei.jfmc.controller;

import com.jinfei.jfmc.model.Equipment;
import com.jinfei.jfmc.service.IEquipmentService;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/equipment")
public class EquipmentController {

    @Resource
    private IEquipmentService equipmentService;

    @RequestMapping("/getEquipmentData.do")
    public void getEquipmentData(HttpServletResponse response, HttpServletRequest request)throws IOException{
        request.setCharacterEncoding("UTF-8");
        response.setCharacterEncoding("UTF-8");
        int factoryId = Integer.parseInt(request.getParameter("factoryId"));

        Equipment equipment = equipmentService.getEquipmentData(factoryId);

        JSONObject obj = new JSONObject();
        obj.put("total",equipment.getTotal());

        JSONArray array = new JSONArray();
        JSONObject fault = new JSONObject();
        JSONObject lackMaterial = new JSONObject();
        JSONObject unscheduling = new JSONObject();
        JSONObject shorthanded = new JSONObject();
        JSONObject timeout = new JSONObject();
        fault.put("name","故障");
        fault.put("value",equipment.getFault());
        lackMaterial.put("name","缺料");
        lackMaterial.put("value",equipment.getLackMaterial());
        unscheduling.put("name","未排程");
        unscheduling.put("value",equipment.getUnscheduling());
        shorthanded.put("name","缺人");
        shorthanded.put("value",equipment.getShorthanded());
        timeout.put("name","调机超时");
        timeout.put("value",equipment.getTimeout());

        array.add(fault);
        array.add(lackMaterial);
        array.add(unscheduling);
        array.add(shorthanded);
        array.add(timeout);
        obj.put("abnormal",array);



        ObjectMapper mapper = new ObjectMapper();
        response.getWriter().write(mapper.writeValueAsString(obj));
        response.getWriter().close();

    }

}
