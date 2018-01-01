package com.iot.repository.competition;

import com.iot.entity.competition.Participant;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by 李攀 on 2017/12/29.
 */
public interface ParticipantRepository extends JpaRepository<Participant, Long> {
}
