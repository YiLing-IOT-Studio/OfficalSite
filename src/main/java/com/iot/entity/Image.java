package com.iot.entity;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

/**
 * Created by xiongxiaoyu on 2017/12/7.
 */

//@Setter
//@Getter
//@ToString
@Entity
public class Image {

    @Id
    @GeneratedValue
    private Integer id;

    private  String itemName;
    private  String leader ;
    private  String introduce ;
    private  String gLeader;

    private  String gloryName;
    private  String ranking;
    private  String contestIntro;
    private  String result;
    private  String url;
    private  Date date;
    private  Integer type;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getLeader() {
        return leader;
    }

    public void setLeader(String leader) {
        this.leader = leader;
    }

    public String getIntroduce() {
        return introduce;
    }

    public void setIntroduce(String introduce) {
        this.introduce = introduce;
    }

    public String getgLeader() {
        return gLeader;
    }

    public void setgLeader(String gLeader) {
        this.gLeader = gLeader;
    }

    public String getGloryName() {
        return gloryName;
    }

    public void setGloryName(String gloryName) {
        this.gloryName = gloryName;
    }

    public String getRanking() {
        return ranking;
    }

    public void setRanking(String ranking) {
        this.ranking = ranking;
    }

    public String getContestIntro() {
        return contestIntro;
    }

    public void setContestIntro(String contestIntro) {
        this.contestIntro = contestIntro;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }
}
