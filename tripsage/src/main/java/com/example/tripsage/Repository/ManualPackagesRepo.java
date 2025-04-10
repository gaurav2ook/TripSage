package com.example.tripsage.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.tripsage.Model.ManualPackages;

public interface ManualPackagesRepo extends JpaRepository<ManualPackages, Long>{
	List<ManualPackages> findByUid(Long id);
}
