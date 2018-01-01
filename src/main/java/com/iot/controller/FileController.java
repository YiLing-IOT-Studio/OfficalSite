package com.iot.controller;

import com.iot.repository.FileRepository;
import com.iot.repository.ParticipantRepository;
import com.iot.entity.competition.Files;
import com.iot.entity.competition.Participant;
import com.iot.utils.FileUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
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

    @Autowired
    ParticipantRepository participantRepository;

    @RequestMapping(value = "/upload", method = RequestMethod.POST)
    @ResponseBody
    public String uploadFile(HttpServletRequest request, HttpServletResponse response, @RequestParam(value = "file") MultipartFile multipartFile) throws UnsupportedEncodingException, ServletException {

        request.setCharacterEncoding("utf-8");
        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");

        String fileType = ".txt,.docx,.doc";
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
            PrintWriter out = null;
            try {
                out.print("<script>alert('上传失败! 请与工作人员联系~~');</script>");
            } finally {
                if (null != out) {
                    out.close();
                }
            }
        }
        return "success";
    }

    @RequestMapping(value = "/submit", method = RequestMethod.POST)
    @ResponseBody
    public String uploadFile(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        request.setCharacterEncoding("utf-8");
        response.setCharacterEncoding("utf-8");
        response.setContentType("text/html;charset=utf-8");

        MultipartHttpServletRequest params = ((MultipartHttpServletRequest) request);
        //List<MultipartFile> multipartFile = ((MultipartHttpServletRequest) request).getFiles("file");
        MultipartFile multipartFile = ((MultipartHttpServletRequest) request).getFile("file");

        String fileType = ".txt,.docx,.doc";
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

        String name1 = params.getParameter("name1");
        String number1 = params.getParameter("id1");
        String major1 = params.getParameter("options-1-major");
        String grade1 = params.getParameter("options-1-grade");

        String name2 = params.getParameter("name2");
        String number2 = params.getParameter("id2");
        String major2 = params.getParameter("options-2-major");
        String grade2 = params.getParameter("options-2-grade");

        String name3 = params.getParameter("name3");
        String number3 = params.getParameter("id3");
        String major3 = params.getParameter("options-3-major");
        String grade3 = params.getParameter("options-3-grade");

        if (!participantRepository.findParticipantByName(name1).isEmpty())
            return "信息已存在，请勿重复提交！";

        Participant participant = new Participant(new Timestamp(System.currentTimeMillis()),name1,number1,major1,grade1,name2,number2,major2,grade2,name3,number3,major3,grade3);
        participantRepository.save(participant);

        Files files = new Files();
        String filePath = "/file/UploadFiles" + "/" + UUID.randomUUID() + "/";
        //String filePath = "D:/file/UploadFiles" + "/" + UUID.randomUUID() + "/";
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
            //PrintWriter out = null;
            //try {
            //    out = response.getWriter();
            //    out.print("<script>alert('提交失败! 请与工作人员联系~~');</script>");
            //} catch (IOException e1) {
            //    e1.printStackTrace();
            //} finally {
            //    if (null != out) {
            //        out.close();
            //    }
            //}
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
