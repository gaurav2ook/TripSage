package com.example.tripsage.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.tripsage.JwtSecurity;
import com.example.tripsage.Model.Reviews;
import com.example.tripsage.Service.ReviewsService;
import com.example.tripsage.Service.UserService;

@RestController
@RequestMapping("/api")
public class ReviewsController {
	
	@Autowired
	private ReviewsService rs;
	
	@Autowired
	private JwtSecurity security;
	
	@Autowired
	private UserService us;
	
	@PostMapping("save-reviews")
	public void addReviews(@RequestHeader("Authorization") String token, @RequestBody Reviews reviews) {
		if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
		reviews.setUserId(us.getUserByEmail(security.extractUsername(token)).getId());
		rs.saveReviews(reviews);
	}
	
	@GetMapping("get-reviews")
	public List<Reviews> getReviews(@RequestHeader("Authorization") String token) {
		if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
		return rs.getAllReviews(us.getUserByEmail(security.extractUsername(token)).getId());
	}
}
