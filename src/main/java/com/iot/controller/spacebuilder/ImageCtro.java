package com.iot.controller.spacebuilder;

import com.google.gson.Gson;
import com.iot.entity.spacebuilder.Image;
import com.iot.repository.spacebuilder.ImageRepository;
import com.iot.utils.spacebuilder.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.UUID;

/**
 * Created by xiongxiaoyu on 2017/12/7.
 */

@Controller
public class ImageCtro {

    @Autowired
    private ImageRepository imageRepository;

    private Gson gson=new Gson();

    @RequestMapping("/back")
    @ResponseBody
    public String back(HttpServletResponse response){
        response.addHeader("Access-Control-Allow-Origin", "*");
        response.addHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "x-requested-with");
        response.addHeader("Access-Control-Max-Age", "1800");
        List<Image> list=imageRepository.findAll();
        return gson.toJson(list);
    }

    @RequestMapping("/image")
    @ResponseBody
    public void image(HttpServletRequest request, HttpServletResponse response, @RequestParam(required = false,value = "image") MultipartFile image) throws IOException, ServletException {
        request.setCharacterEncoding("utf-8");
        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");
        Integer type = Integer.valueOf(request.getParameter("type"));
        Image img = new Image();
        if (type == 1) {
            img.setItemName(request.getParameter("itemName"));
            img.setLeader(request.getParameter("leader"));
            img.setIntroduce(request.getParameter("introduce"));
            img.setDate(new Date(System.currentTimeMillis()));
            img.setUrl(""+UUID.randomUUID());
            img.setType(type);
            FileUtils.upload(image.getInputStream(),img.getUrl());
            imageRepository.save(img);
            response.sendRedirect("/glory");
        }else if(type==2){
            img.setGloryName(request.getParameter("gloryName"));
            img.setRanking(request.getParameter("ranking"));
            img.setContestIntro(request.getParameter("contestIntro"));
            img.setResult(request.getParameter("result"));
            img.setgLeader(request.getParameter("gLeader"));
            img.setDate(new Date(System.currentTimeMillis()));
            img.setUrl(""+UUID.randomUUID());
            img.setType(type);
            FileUtils.upload(image.getInputStream(),img.getUrl());
            imageRepository.save(img);
//            request.getSession().setAttribute("imageList", imageRepository.findAll());
            response.sendRedirect("/glory");
        }
        else if (type == 3) {
//            String ids = request.getParameter("ids");
            String url = request.getParameter("url");
            FileUtils.delete(url);
            imageRepository.deleteByUrl(url);
//            String[] idArray = ids.split(",");
//            String[] urlArray = urls.split(",");
//            if (!"".equals(idArray[0]) && !"".equals(urlArray[0])) {
//                for (int i = 0; i < idArray.length; i++) {
//                    FileUtils.delete(urlArray[i]);
//                    imageRepository.deleteById(Integer.valueOf(idArray[i]));
//                }
//            }
//            request.getSession().setAttribute("imageList", imageRepository.getByUserId(((User) request.getSession().getAttribute("user")).getId()));
        }
    }
}
