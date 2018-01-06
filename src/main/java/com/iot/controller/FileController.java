package com.iot.controller;

import com.iot.entity.competition.Files;
import com.iot.repository.FileRepository;
import com.iot.utils.FileUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.sql.Timestamp;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

/**
 * Created by 李攀 on 2017/12/5.
 */
@Controller
public class FileController {

    @Autowired
    FileRepository fileRepository;

    @RequestMapping(value = "/submit", method = RequestMethod.POST)
    @ResponseBody
    public String uploadFile(HttpServletRequest request, HttpServletResponse response, @RequestParam(value = "file") MultipartFile multipartFile) throws UnsupportedEncodingException, ServletException {

        request.setCharacterEncoding("utf-8");
        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");

        Long length = multipartFile.getSize();//返回的是字节，1M=1024KB=1048576字节 1KB=1024Byte
        String fileName = multipartFile.getOriginalFilename();
        String suffix = fileName.substring(fileName.lastIndexOf(".")).toLowerCase().trim();//文件后缀名

        String fileType = ".txt,.docx,.doc";
        //String[] typeArray = fileType.split(",");

        if (multipartFile.isEmpty()) {

            return "redirect:/registration";

        } else if (length > 1048576) {

            return "redirect:/registration";

        } else if (!Arrays.asList(fileType.split(",")).contains(suffix)) {

            return "redirect:/registration";
        }

        Files files = new Files();
        String filePath = "/file/UploadFiles" + "/" + UUID.randomUUID() + "/";
        //String filePath = request.getSession().getServletContext().getRealPath("/") + "upload/";
        String fileUrl = filePath + fileName;
        files.setName(fileName);
        files.setUrl(fileUrl);
        files.setDate(new Timestamp(System.currentTimeMillis()));

        try {
            FileUtil.uploadFile(filePath, fileName, multipartFile);
            fileRepository.save(files);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "success";
    }

    @RequestMapping(value = "/fileDownload")
    @ResponseBody
    public void downloadFile(HttpServletResponse response) {

        String fileName = "下学期公式表.doc";
        String filePath = "/file/";
        File file = new File(filePath, fileName);

        try {
            response.reset();
            response.setCharacterEncoding("utf-8");
            response.setHeader("content-type", "application/octet-stream");
            response.setHeader("Content-Disposition", "attachment; filename=" + URLEncoder.encode(fileName, "UTF-8"));
            OutputStream output = response.getOutputStream();

            FileUtil.downloadFile(file, output);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @RequestMapping(value = "/zipDownload")
    @ResponseBody
    public void downloadZip(HttpServletResponse response) {

        List<Files> filesList = fileRepository.findAll();

        String zipName = "file.zip";
        String outPath = "/file/";
        File zipPath = new File(outPath, zipName);

        try {
            response.reset();
            response.setCharacterEncoding("utf-8");
            response.setHeader("content-type", "application/octet-stream");
            response.setHeader("Content-Disposition", "attachment; filename=" + URLEncoder.encode(zipName, "UTF-8"));//解决中文名乱码
            OutputStream output = response.getOutputStream();//得到服务器的输入流

            FileUtil.zipFile(zipPath, filesList);
            FileUtil.downloadFile(zipPath, output);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
