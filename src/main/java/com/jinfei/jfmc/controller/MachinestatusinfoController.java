
package com.jinfei.jfmc.controller;

import com.jinfei.jfmc.model.Machinestatusinfo;
import com.jinfei.jfmc.service.IMachinestatusinfoService;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping(value = {"/Machinestatusinfo"})
public class MachinestatusinfoController {
    @Resource
    private IMachinestatusinfoService machinestatusinfoService;

    @RequestMapping(value = {"/queryMacinestatusinfo"},method = RequestMethod.GET)
    public @ResponseBody List<Machinestatusinfo> queryMacinestatusinfo(Machinestatusinfo machinestatusinfo){
        List<Machinestatusinfo> list = new ArrayList<Machinestatusinfo>();
      /*  Machinestatusinfo machinestatusinfo1 = new Machinestatusinfo();
        machinestatusinfo1.setEnableFlag(false);
        machinestatusinfo1.setEquipName("test");
        machinestatusinfo1.setEquipNo("123456");
        machinestatusinfo1.setErrorType(2);
        machinestatusinfo1.setFactNo("sdsfafd1254564");
        machinestatusinfo1.setFactoryId(2554);
        list.add(machinestatusinfo1);*/
        if (machinestatusinfo!=null){
            list=machinestatusinfoService.queryMacListService(machinestatusinfo);
            return list;
        }
        return null;
    }

    @RequestMapping("getMacinestatusinfo.do")
    public void getMacinestatusinfo(HttpServletResponse response, HttpServletRequest request) throws IOException {
        response.setCharacterEncoding("UTF-8");
        response.setHeader("Access-Control-Allow-Origin", "*");
        request.setCharacterEncoding("UTF-8");
        List<Machinestatusinfo> machinestatusinfoList = machinestatusinfoService.getMacinestatusinfo();

        ObjectMapper objectMapper = new ObjectMapper();
        response.getWriter().write(objectMapper.writeValueAsString(machinestatusinfoList));
        response.getWriter().close();
    }
}
