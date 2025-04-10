package com.example.tripsage.Controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.tripsage.JwtSecurity;
import com.example.tripsage.DTO.AdminPackageDTO;
import com.example.tripsage.Model.Hotel;
import com.example.tripsage.Model.ManualPackages;
import com.example.tripsage.Model.Restaurant;
import com.example.tripsage.Service.AdminPackageService;
import com.example.tripsage.Service.UserService;

@RestController
@RequestMapping("/api")
public class AdminPackageController {
	
	@Autowired
	private AdminPackageService adService;
	
	@Autowired
	private JwtSecurity security;
	
	@Autowired
	private UserService us;
	
	@PostMapping("/create-package")
	public ResponseEntity<?> savePackages(@RequestHeader("Authorization") String token, @RequestBody AdminPackageDTO packages) {
		if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
		
		for(HashMap<String, String> data : packages.getPackages()) {
			adService.savePackage(packages.getName(), data, us.getUserByEmail(security.extractUsername(token)).getId());
		}
		
		HashMap<String, String> dt = new HashMap<String, String>();
		dt.put("response", "saved");
		
		return ResponseEntity.ok(dt);
	}
	
	@PostMapping("/create-manual-package")
	public ResponseEntity<?> saveManualPackages(@RequestHeader("Authorization") String token, @RequestBody HashMap<String, String> packages) {
		if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }

		adService.saveManualPackages(us.getUserByEmail(security.extractUsername(token)).getId(), packages);
		
		HashMap<String, String> dt = new HashMap<String, String>();
		dt.put("response", "saved");
		
		return ResponseEntity.ok(dt);
	}
	
	@PostMapping("/create-hotel-package")
	public HashMap<String, String> bookhotels(@RequestHeader("Authorization") String token, @RequestBody Hotel hotel) {
		if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
		
		adService.saveHotels(us.getUserByEmail(security.extractUsername(token)).getId(), hotel);
		
		HashMap<String, String> data = new HashMap<String, String>();
		data.put("status", "Saved");
		return data;
	}
	
	@PostMapping("/create-restaurant-package")
	public HashMap<String, String> bookrestaurant(@RequestHeader("Authorization") String token, @RequestBody Restaurant restaurant) {
		if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
		
		adService.saveRestaurants(us.getUserByEmail(security.extractUsername(token)).getId(), restaurant);
		
		HashMap<String, String> data = new HashMap<String, String>();
		data.put("status", "Saved");
		return data;
	}
	
	@GetMapping("/get-manual-packages")
	public List<ManualPackages> getManualPackages(@RequestHeader("Authorization") String token) {
		if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
		
		return adService.getManualPackages();
	}
	
	@GetMapping("/get-packages")
	public List<HashMap<String, String>> getPackages(@RequestHeader("Authorization") String token) {
		if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
		
		return adService.getAllPackages(us.getUserByEmail(security.extractUsername(token)).getId());
	}
	
	@DeleteMapping("/delete-package/{id}")
	public void deletePackage(@PathVariable Long id) {
		System.out.println(id);
		adService.deletePackage(id);
	}

}
