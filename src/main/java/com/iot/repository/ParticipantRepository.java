package com.iot.repository;

import com.iot.entity.competition.Participant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * Created by 李攀 on 2017/12/29.
 */
public interface ParticipantRepository extends JpaRepository<Participant, Long> {

    @Query("select m from Participant m where m.name1=?1")
    List<Participant> findParticipantByName(String username);
}
