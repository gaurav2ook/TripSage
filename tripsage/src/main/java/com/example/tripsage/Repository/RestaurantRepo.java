package com.example.tripsage.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.tripsage.Model.Restaurant;

@Repository
public interface RestaurantRepo extends JpaRepository<Restaurant, String> {

}
