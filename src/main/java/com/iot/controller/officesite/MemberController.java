package com.iot.controller.officesite;

import com.iot.repository.officesite.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/**
 * Created by 李攀 on 2017/12/20.
 */
@Controller
public class MemberController {

    @Autowired
    MemberRepository memberRepository;

    public String getCurrentUsername() {
        return SecurityContextHolder.getContext().getAuthentication().getName();
    }

    @RequestMapping("/setPassword")
    public String setPassword(@RequestParam String oldPassword, @RequestParam String newPassword, @RequestParam String newPassword2, HttpServletResponse response) {

        String username = getCurrentUsername();

        PrintWriter out = null;

        if (memberRepository.findPasswordByName(username).equals(oldPassword) && newPassword.equals(newPassword2)) {

            memberRepository.setPassword(username,newPassword);

            return "yiling";
        }else {

            try {
                out = response.getWriter();
                out.print("<script>alert('输入有误，请检查！');</script>");
            } catch (IOException e) {
                e.printStackTrace();
            }finally {
                if (null != out)
                    out.close();
            }
            return "redirect:/";
        }
    }
}
