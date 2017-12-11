package com.iot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by 李攀 on 2017/12/9.
 */
@Controller
public class LoginController {

    @RequestMapping("/login")
    public String index() {
        return "yiling_signin";
    }
}
