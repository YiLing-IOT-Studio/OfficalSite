package com.iot.repository;

import com.iot.entity.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by xiongxiaoyu on 2017/12/7.
 */
public interface ImageRepository extends JpaRepository<Image,Integer>{

    List<Image> findAll();

    @Modifying
    @Transactional
    void deleteByUrl(String url);
}
