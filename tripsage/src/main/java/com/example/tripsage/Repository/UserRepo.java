package com.example.tripsage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.tripsage.Model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
	
	User findByEmail(String email);
	
	User findByUsername(String username);

}
