package com.example.tripsage.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.tripsage.Model.AdminPackages;

public interface AdminPackageRepo extends JpaRepository<AdminPackages, Long>{
	List<AdminPackages> findByUid(Long id);
}
