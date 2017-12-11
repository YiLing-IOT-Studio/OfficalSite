package com.iot.dao;

import com.iot.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by 李攀 on 2017/12/3.
 */
public interface MemberDao extends JpaRepository<Member,Long> {

    Member findByUsername(String username);
}
