package com.example.tripsage.Controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.tripsage.JwtSecurity;
import com.example.tripsage.Model.User;
import com.example.tripsage.Service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	private PasswordEncoder pe;
	
	@Autowired
	private JwtSecurity security;

	@Autowired
	private UserService userService;
	
	@PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
		User us1 = userService.getUserByEmail(user.getEmail());
		User us2 = userService.getUserByUsername(user.getUsername());
		HashMap<String, Object> data = new HashMap<String, Object>();
		if(us1 != null) {
			data.put("status", "error");
			data.put("data", "Email already exists");
			return ResponseEntity.ok(data);
		} else if(us2 != null) {
			data.put("status", "error");
			data.put("data", "Username already exists");
		} else {
			data.put("status", "success");
			data.put("data", userService.registerUser(user));
		}
		return ResponseEntity.ok(data);
    }
	
	@PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
		HashMap<String, Object> dt = new HashMap<String, Object>();
		User us = userService.getUserByEmail(user.getEmail());
		if(us == null) {
			dt.put("data", "Email not registered");
			dt.put("status", "error");
		} else if(!pe.matches(user.getPassword(), us.getPassword())) {
			dt.put("data", "Invalid password");
			dt.put("status", "error");
		} else {
			String token = security.generateToken(user.getEmail());
			HashMap<String, String> data = new HashMap<String, String>();
			data.put("token", token);
			data.put("role", us.getRole());
			dt.put("data", data);
			dt.put("status", "success");
		}
		return ResponseEntity.ok(dt);
    }
	
	@GetMapping("/user/profile")
	public ResponseEntity<?> getUserProfile(@RequestHeader("Authorization") String token) {
		if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
		return ResponseEntity.ok(userService.getUserByEmail(security.extractUsername(token)));
    }
	
	@PutMapping("/user/update")
	public ResponseEntity<?> updateUser(@RequestHeader("Authorization") String token, @RequestBody User user) {
		if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
		return ResponseEntity.ok(userService.updateUser(userService.getUserByEmail(security.extractUsername(token)), user));
	}
	
}
