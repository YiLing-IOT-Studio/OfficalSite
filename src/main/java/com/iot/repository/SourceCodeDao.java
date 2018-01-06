package com.iot.repository;

import com.iot.entity.joinus.UserInfo;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @author: zhangocean
 * @Date: Created in 21:44 2017/12/21
 * Describe: 查询分页
 */
public interface SourceCodeDao extends PagingAndSortingRepository<UserInfo, String> {
}
