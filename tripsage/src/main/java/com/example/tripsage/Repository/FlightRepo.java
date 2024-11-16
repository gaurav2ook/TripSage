package com.example.tripsage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.tripsage.Model.Flight;

@Repository
public interface FlightRepo extends JpaRepository<Flight, String>{

}
