package com.example.tripsage.Controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.tripsage.JwtSecurity;
import com.example.tripsage.DTO.RestaurantSearchDTO;
import com.example.tripsage.Model.Restaurant;
import com.example.tripsage.Model.UserPackage;
import com.example.tripsage.Service.RestaurantService;
import com.example.tripsage.Service.UserPackageService;
import com.example.tripsage.Service.UserService;

@RestController
@RequestMapping("/api/restaurants")
public class RestaurantController {
	
	@Autowired
	private RestaurantService rs;
	
	@Autowired
	private JwtSecurity security;
	
	@Autowired
	private UserService us;
	
	@Autowired
	private UserPackageService ups;
	
	@PostMapping("/search")
	public List<Restaurant> getRestaurant(@RequestBody RestaurantSearchDTO search) {
		return rs.getRestaurant(search);
	}
	
	@PostMapping("/book")
	public HashMap<String, String> bookRestaurant(@RequestHeader("Authorization") String token, @RequestBody Restaurant restaurant) {
		if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
		
		UserPackage packages = new UserPackage();
		packages.setPid(restaurant.getId());
		packages.setType("restaurant");
		packages.setUserId(us.getUserByEmail(security.extractUsername(token)).getId());
		ups.savePackages(packages);
		
		HashMap<String, String> data = new HashMap<String, String>();
		rs.bookRestaurant(restaurant);
		data.put("status", "Saved");
		return data;
	}

}
