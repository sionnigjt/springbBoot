package com.example.springbootnote.service;

import com.example.springbootnote.bean.User;

import java.util.List;

public interface UserService {
    /**
     * 新增用户
     */
    boolean addUser(User user);

    /**
     * 修改用户
     */
    boolean updateUser(User user);


    /**
     * 删除用户
     */
    boolean deleteUser(int id);

    /**
     * 根据名字查询用户信息
     */
    User findUserByName(String userName);
    boolean verityByName(String userName);
    /**
     * 查询所有数据
     */
    List<User> findAll();
}
