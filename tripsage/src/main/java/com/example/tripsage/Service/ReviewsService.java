package com.example.tripsage.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tripsage.Model.Reviews;
import com.example.tripsage.Repository.ReviewsRepo;

@Service
public class ReviewsService {
	@Autowired
	private ReviewsRepo rr;
	
	public void saveReviews(Reviews review) {
		rr.save(review);
	}
	
	public List<Reviews> getAllReviews(Long uid) {
		return rr.findByUserId(uid);
	}
}
