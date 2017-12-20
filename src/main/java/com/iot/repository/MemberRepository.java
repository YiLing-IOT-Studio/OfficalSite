package com.iot.repository;

import com.iot.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by 李攀 on 2017/12/3.
 */
public interface MemberRepository extends JpaRepository<Member,Long> {

    Member findByUsername(String username);
}
