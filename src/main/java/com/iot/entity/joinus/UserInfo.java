package com.iot.entity.joinus;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

/**
 * Created by 李攀 on 2018/1/6.
 */
@ToString
@Getter
@Setter
@Entity
@Table(name = "userinfo")
public class UserInfo {

    @Id
    @GeneratedValue
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "tel")
    private String tel;

    @Column(name = "email")
    private String email;

    @Column(name = "selfBriefly")
    private String selfbriefly;

    @Column(name = "professional")
    private String professional;

    public UserInfo() {
    }

    public UserInfo(String name, String tel, String email, String selfbriefly, String professional) {
        this.name = name;
        this.tel = tel;
        this.email = email;
        this.selfbriefly = selfbriefly;
        this.professional = professional;
    }
}
