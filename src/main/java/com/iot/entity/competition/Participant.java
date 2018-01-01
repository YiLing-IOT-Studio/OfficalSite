package com.iot.entity.competition;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created by 李攀 on 2017/12/29.
 */
@Entity
@Getter
@Setter
@ToString
@Table(name = "member")
public class Participant {

    @Id
    @GeneratedValue
    private Integer id;

    private String name1;
    private String number1;
    private String major1;
    private String grade1;

    private String name2;
    private String number2;
    private String major2;
    private String grade2;

    private String name3;
    private String number3;
    private String major3;
    private String grade3;

    public Participant() {}

    public Participant(String name1, String number1, String major1, String grade1, String name2, String number2, String major2, String grade2, String name3, String number3, String major3, String grade3) {
        this.name1 = name1;
        this.number1 = number1;
        this.major1 = major1;
        this.grade1 = grade1;
        this.name2 = name2;
        this.number2 = number2;
        this.major2 = major2;
        this.grade2 = grade2;
        this.name3 = name3;
        this.number3 = number3;
        this.major3 = major3;
        this.grade3 = grade3;
    }
}
