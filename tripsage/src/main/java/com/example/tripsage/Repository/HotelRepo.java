package com.example.tripsage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.tripsage.Model.Hotel;

@Repository
public interface HotelRepo extends JpaRepository<Hotel, String>{

}
