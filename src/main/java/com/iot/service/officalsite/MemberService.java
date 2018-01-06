package com.iot.service.officalsite;

import com.iot.repository.MemberRepository;
import com.iot.entity.officalsite.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

/**
 * Created by 李攀 on 2017/12/3.
 */
public class MemberService implements UserDetailsService {

    @Autowired
    MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String name) {

        Member member = memberRepository.findByUsername(name);
        if (member == null) {
            throw new UsernameNotFoundException("用户名不存在");
        }

        return member;
    }
}
