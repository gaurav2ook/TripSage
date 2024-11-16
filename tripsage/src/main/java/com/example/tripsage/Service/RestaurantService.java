package com.example.tripsage.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tripsage.DTO.RestaurantSearchDTO;
import com.example.tripsage.Model.Restaurant;
import com.example.tripsage.Repository.RestaurantRepo;

@Service
public class RestaurantService {
	
	@Autowired
	private RestaurantRepo rr;
	
	
	public List<Restaurant> getRestaurant(RestaurantSearchDTO search) {
		List<Restaurant> data = new ArrayList<Restaurant>();
		
		
		return data;
	}
	
	public void bookRestaurant(Restaurant rt) {
		rr.save(rt);
	}
}
