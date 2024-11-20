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
		
		Restaurant r1 = new Restaurant();
		r1.setId("23023329");
		r1.setImage("https://media-cdn.tripadvisor.com/media/photo-l/1c/e7/29/39/breakfast-corner.jpg");
		r1.setName("Sadrasa Kitchen and Bar");
		r1.setLocation("Bandung, West Java, Java");
		r1.setCuisine("International");
		r1.setPrice("65");
		r1.setRating("5.0");
		data.add(r1);
		Restaurant r2 = new Restaurant();
		r2.setId("15699453");
		r2.setImage("https://media-cdn.tripadvisor.com/media/photo-l/24/8a/61/76/ambience.jpg");
		r2.setName("Justus Steak House Dago");
		r2.setLocation("Bandung, West Java, Java");
		r2.setCuisine("Italian");
		r2.setPrice("70");
		r2.setRating("5.0");
		data.add(r2);
		Restaurant r3 = new Restaurant();
		r3.setId("15333482");
		r3.setImage("https://media-cdn.tripadvisor.com/media/photo-l/15/7a/f4/02/pago-balcony.jpg");
		r3.setName("Pago Restaurant");
		r3.setLocation("Bandung, West Java, Java");
		r3.setCuisine("American");
		r3.setPrice("75");
		r3.setRating("5.0");
		data.add(r3);
		Restaurant r4 = new Restaurant();
		r4.setId("2368427");
		r4.setImage("https://media-cdn.tripadvisor.com/media/photo-l/26/b6/2f/cc/new-aviary.jpg");
		r4.setName("Hummingbird Eatery & Space");
		r4.setLocation("Bandung, West Java, Java");
		r4.setCuisine("European");
		r4.setPrice("60");
		r4.setRating("5.0");
		data.add(r4);
		Restaurant r5 = new Restaurant();
		r5.setId("23789757");
		r5.setImage("https://media-cdn.tripadvisor.com/media/photo-l/21/b6/a6/14/semi-outdoor-seating.jpg");
		r5.setName("Mad Cow Wine & Grill Bandung");
		r5.setLocation("Bandung, West Java, Java");
		r5.setCuisine("International");
		r5.setPrice("50");
		r5.setRating("5.0");
		data.add(r5);
		
		return data;
	}
	
	public void bookRestaurant(Restaurant rt) {
		rr.save(rt);
	}
}
