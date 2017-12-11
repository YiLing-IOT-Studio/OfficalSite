package com.iot.entity;

import lombok.Getter;
import lombok.Setter;

/**
 * Created by 李攀 on 2017/12/3.
 */
@Getter
@Setter
public class Message {

    private String title;
    private String content;
    private String extraInfo;

    public Message(String title,String content,String extraInfo) {

        this.title = title;
        this.content = content;
        this.extraInfo = extraInfo;
    }
}
