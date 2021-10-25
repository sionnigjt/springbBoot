package com.example.springbootnote.Controller;

import com.example.springbootnote.bean.User;
import com.example.springbootnote.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author sion
 */
@RestController
@RequestMapping(value = "/api")
@CrossOrigin()
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/addUser", method = RequestMethod.POST)
    public Boolean addUser(@RequestBody User user) {
        System.out.println("新增数据："+user.getUsername());
        return userService.addUser(user);
    }

    @RequestMapping(value = "/changeUser", method = RequestMethod.PUT)
    public boolean updateUser(@RequestBody User user) {
        System.out.println("更新数据：");
        return userService.updateUser(user);
    }

    @RequestMapping(value = "/deleteUser", method = RequestMethod.DELETE)
    public boolean delete(@RequestParam(value = "id") int id) {
        System.out.println("删除数据：");
        return userService.deleteUser(id);
    }


    @RequestMapping(value = "/userByName", method = RequestMethod.GET)
    public User findByUserName(@RequestParam(value = "username") String username) {
        System.out.println("查询数据："+username);
        return userService.findUserByName(username);
    }

    @RequestMapping(value = "/verityByName", method = RequestMethod.GET)
    public boolean verityByUserName(@RequestParam(value = "username") String username) {
        System.out.println("验证用户名字："+username);
        return  userService.verityByName(username);
    }


    @RequestMapping(value = "/verityUser", method = RequestMethod.POST)
    public String verityUser(@RequestBody User user ) {
        System.out.println("验证数据："+user.getUsername()+user.getPassword());
        if (!user.getPassword().isEmpty()&&user.getPassword().equals(userService.findUserByName(user.getUsername())!=null?userService.findUserByName(user.getUsername()).getPassword():null))
            return "token";
        return "false";
    }
    @RequestMapping(value = "/userAll", method = RequestMethod.GET)
    public List<User> findByUser(@RequestHeader String token) {
        System.out.println("查询所有数据:");
        System.out.println(token);
        return userService.findAll();
    }
}
