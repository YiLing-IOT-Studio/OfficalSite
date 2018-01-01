package com.iot.repository.officesite;

import com.iot.entity.officesite.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by 李攀 on 2017/12/3.
 */
public interface MemberRepository extends JpaRepository<Member,Long> {

    Member findByUsername(String username);

    @Query("select m.password from Member m where m.username=?1")
    String findPasswordByName(String username);

    @Modifying
    @Transactional
    @Query("update Member m set m.password=?1 where m.username=?2")
    void setPassword(String username,String password);
}
