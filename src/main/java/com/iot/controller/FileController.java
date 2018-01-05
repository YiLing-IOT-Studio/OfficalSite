package com.iot.controller;

import com.iot.entity.competition.Files;
import com.iot.repository.FileRepository;
import com.iot.utils.FileUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
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

        String fileType = ".docx,.doc";
        //String[] typeArray = fileType.split(",");

        if (multipartFile.isEmpty()) {
            return "failed";
        }

        Long length = multipartFile.getSize();//返回的是字节，1M=1024KB=1048576字节 1KB=1024Byte
        if (length > 1048576) {
            return "文件过大，限制大小为1M";
        }

        String fileName = multipartFile.getOriginalFilename();
        String suffix = fileName.substring(fileName.lastIndexOf(".")).toLowerCase().trim();//文件后缀名
        //if (!suffix.equals("docx")) {
        //    return "格式错误，请检查后缀名";
        //}

        if (!Arrays.asList(fileType.split(",")).contains(suffix)) {
            return "格式错误，请检查后缀名";
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

    @RequestMapping(value = "/upload", method = RequestMethod.POST)
    @ResponseBody
    public String uploadFile(HttpServletRequest request, HttpServletResponse response, Model model) throws IOException, ServletException {

        request.setCharacterEncoding("utf-8");
        //response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");

        PrintWriter out=null;
        //out = response.getWriter();

        MultipartHttpServletRequest params = ((MultipartHttpServletRequest) request);
        //List<MultipartFile> multipartFile = ((MultipartHttpServletRequest) request).getFiles("file");
        MultipartFile multipartFile = ((MultipartHttpServletRequest) request).getFile("file");

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
        //if (!suffix.equals("docx")) {
        //    return "格式错误，请检查后缀名";
        //}

        Files files = new Files();
        //String filePath = "/file/UploadFiles" + "/" + UUID.randomUUID() + "/";
        String filePath = "D:/file/UploadFiles" + "/" + UUID.randomUUID() + "/";
        //String filePath = request.getSession().getServletContext().getRealPath("/") + "upload/";
        String fileUrl = filePath + fileName;
        files.setName(fileName);
        files.setUrl(fileUrl);
        files.setDate(new Timestamp(System.currentTimeMillis()));

        try {
            FileUtil.uploadFile(filePath, fileName, multipartFile);
            fileRepository.save(files);

            return "redirect:/index";
        } catch (Exception e) {
            e.printStackTrace();

            return "redirect:/failed";
        }
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
