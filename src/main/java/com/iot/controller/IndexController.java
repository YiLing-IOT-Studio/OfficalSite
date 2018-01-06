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

    @RequestMapping("/info")
    public String info() {
        return "info";
    }

    @RequestMapping("/manager")
    public String manger() {
        return "manager";
    }

    @RequestMapping("/match")
    public String competition() {
        return "match";
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

    @RequestMapping("/family")
    public String aboutus_other(){
        return "family";
    }

    @RequestMapping("/aboutus")
    public String about(){
        return "aboutUs";
    }

    @RequestMapping("/direction")
    public String direction(){
        return "main";
    }

    @RequestMapping("/android")
    public String android(){
        return "android";
    }

    @RequestMapping("/flush")
    public String flush(){
        return "flushbonading";
    }

    @RequestMapping("/end")
    public String back(){
        return "webBack";
    }

    @RequestMapping("/fronted")
    public String fronted(){
        return "webFronted";
    }
}