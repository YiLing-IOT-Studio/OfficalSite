package com.iot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by 李攀 on 2017/12/9.
 */
@Controller
public class LoginController {

    @RequestMapping("/index")
    public String login() {
        return "yiling";
    }

    @RequestMapping("/fail")
    public String fail(HttpServletResponse response) {

        response.setContentType("text/html;charset=utf-8");
        PrintWriter out;
        try {
            out = response.getWriter();
            out.print("<script>alert('登录失败，请检查权限！');</script>");
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "yiling";
    }
}
