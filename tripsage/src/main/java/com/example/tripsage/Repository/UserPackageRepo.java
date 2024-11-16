package com.example.tripsage.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.tripsage.Model.UserPackage;

@Repository
public interface UserPackageRepo extends JpaRepository<UserPackage, Long>{
	
	List<UserPackage> findByUserId(Long id);

}
