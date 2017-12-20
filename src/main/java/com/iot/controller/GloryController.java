package com.iot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by 李攀 on 2017/12/19.
 */
@Controller
public class GloryController {

    @RequestMapping("/glory")
    public String glory() {
        return "glory";
    }
}
