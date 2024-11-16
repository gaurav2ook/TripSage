package com.example.tripsage.Controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.tripsage.JwtSecurity;
import com.example.tripsage.Service.UserPackageService;
import com.example.tripsage.Service.UserService;

@RestController
@RequestMapping("/api")
public class UserPackageController {
	
	@Autowired
	private UserPackageService ups;
	
	@Autowired
	private UserService us;
	
	@Autowired
	private JwtSecurity security;
	
	@GetMapping("/get-user-packages")
	public List<HashMap<String, Object>> getUserPackages(@RequestHeader("Authorization") String token) {
		if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
		
		return ups.getPackages(us.getUserByEmail(security.extractUsername(token)).getId());
	}

}
