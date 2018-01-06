package com.iot.controller;

import com.iot.entity.joinus.UserInfo;
import com.iot.service.joinus.GetUserInformation;
import com.iot.service.joinus.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;

/**
 * @author: zhangocean
 * @Date: Created in 14:11 2017/12/6
 * Describe: 保存信息- 控制层
 */
@Controller
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    GetUserInformation getUserInformation;


    @RequestMapping(value = "/saveUser", method = RequestMethod.POST)
    @ResponseBody
    public void saveUser(HttpServletRequest request) {
        /**
         * 接收、处理前台传来Json字符串数组
         */
        String data = request.getParameter("data");
        UserInfo userInfo = getUserInformation.getUserInformation(data);

        //保存数据
        userService.saveUser(userInfo);

   }
}
