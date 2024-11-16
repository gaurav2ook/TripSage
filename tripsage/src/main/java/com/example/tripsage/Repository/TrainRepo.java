package com.example.tripsage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.tripsage.Model.Train;

@Repository
public interface TrainRepo extends JpaRepository<Train, String>{

}
