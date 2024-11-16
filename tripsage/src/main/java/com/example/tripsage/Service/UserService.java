package com.example.tripsage.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.tripsage.Model.User;
import com.example.tripsage.Repository.UserRepo;

@Service
public class UserService {
	
	@Autowired
	private PasswordEncoder pe;
	
	@Autowired
	private UserRepo ur;
	
	public User registerUser(User user) {
		user.setPassword(pe.encode(user.getPassword()));
		return ur.save(user);
	}
	
	public User getUserByEmail(String email) {
		return ur.findByEmail(email);
	}
	
	public User getUserByUsername(String username) {
		return ur.findByUsername(username);
	}
	
	public User updateUser(User user1, User user2) {
		user1.setFirstName(user2.getFirstName());
		user1.setLastName(user2.getLastName());
		user1.setPhoneNumber(user2.getPhoneNumber());
		user1.setPassword(pe.encode(user2.getPassword()));
		return ur.save(user1);
	}

}
