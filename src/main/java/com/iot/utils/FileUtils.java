package com.iot.utils;

import com.qiniu.api.auth.AuthException;
import com.qiniu.api.auth.digest.Mac;
import com.qiniu.api.io.IoApi;
import com.qiniu.api.rs.PutPolicy;
import com.qiniu.api.rs.RSClient;
import org.json.JSONException;

import java.io.InputStream;

/**
 * Created by xiongxiaoyu on 2017/12/7.
 */
public class FileUtils {
    private static final String ACCESS_KEY = "NdIM5ma4z28Xv-8pN7eyUrt2M3ubcuWqJtG2t-iD";//这里填上面我们讲到的，密钥管理里面的密钥
    private static final String SECRET_KEY = "KpYxMOcafT-XOkTSWh_lnswhDmWmyrgrqGarMuIa";
    private static final String BUCKET_NAME = "photos";//填我们在七牛云创建的 Bucket 名字

    /**
     * 上传图片到七牛云存储
     * @param reader
     * @param fileName
     */
    public static void upload(InputStream reader, String fileName) {
        String uptoken;
        try {
            Mac mac = new Mac(ACCESS_KEY, SECRET_KEY);
            PutPolicy putPolicy = new PutPolicy(BUCKET_NAME);
            uptoken = putPolicy.token(mac);
            IoApi.Put(uptoken, fileName, reader, null);
        } catch (AuthException e) {
            e.printStackTrace();
        } catch (JSONException e) {
            e.printStackTrace();
        }
    }

    /**
     * 删除七牛云存储上的图片
     * @param key
     */
    public static void delete( String key) {
        Mac mac = new Mac(ACCESS_KEY, SECRET_KEY);
        RSClient client = new RSClient(mac);
        client.delete(BUCKET_NAME, key);
    }
}