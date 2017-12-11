package com.iot.service;

import com.iot.dao.MemberDao;
import com.iot.entity.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

/**
 * Created by 李攀 on 2017/12/3.
 */
public class MemberService implements UserDetailsService {

    @Autowired
    MemberDao memberDao;

    @Override
    public UserDetails loadUserByUsername(String name) {

        Member member = memberDao.findByUsername(name);
        if (member == null) {
            throw new UsernameNotFoundException("用户名不存在");
        }

        return member;
    }
}
