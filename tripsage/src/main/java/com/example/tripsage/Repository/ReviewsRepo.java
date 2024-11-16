package com.example.tripsage.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.tripsage.Model.Reviews;

@Repository
public interface ReviewsRepo extends JpaRepository<Reviews, Long> {
	List<Reviews> findByUserId(Long id);
}
