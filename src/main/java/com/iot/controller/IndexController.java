package com.iot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by 李攀 on 2017/12/30.
 */
@Controller
public class IndexController {

    @RequestMapping("/index")
    public String login() {
        return "yiling";
    }

    @RequestMapping("/glory")
    public String glory(){
        return  "glory";
    }

    @RequestMapping("/joinus")
    public String index() {
        return "joinus";
    }

    @RequestMapping("/haha")
    public String info() {
        return "info";
    }

    @RequestMapping("/manager")
    public String manger() {
        return "manager";
    }

    @RequestMapping("/competition")
    public String competition() {
        return "competition";
    }

    @RequestMapping("/registration")
    public String registration() {
        return "registration";
    }

    @RequestMapping("/message")
    public String message() {
        return "message";
    }

    @RequestMapping("/failed")
    public String failed() {
        return "failed";
    }

    @RequestMapping("/other")
    public String aboutus_other(){
        return "aboutUS-other";
    }

    @RequestMapping("/aboutus")
    public String index1(){
        return "aboutUS";
    }
}