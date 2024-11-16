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
import com.example.tripsage.DTO.HotelSearchDTO;
import com.example.tripsage.Model.Hotel;
import com.example.tripsage.Model.UserPackage;
import com.example.tripsage.Service.HotelService;
import com.example.tripsage.Service.UserPackageService;
import com.example.tripsage.Service.UserService;

@RestController
@RequestMapping("/api/hotels")
public class HotelController {
	
	@Autowired
	private HotelService hs;
	
	@Autowired
	private JwtSecurity security;
	
	@Autowired
	private UserService us;
	
	@Autowired
	private UserPackageService ups;
	
	@PostMapping("/search")
	public List<Hotel> gethotels(@RequestBody HotelSearchDTO search) {
		return hs.getHotels(search);
	}
	
	@PostMapping("/book")
	public HashMap<String, String> bookhotels(@RequestHeader("Authorization") String token, @RequestBody Hotel hotel) {
		if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
		
		UserPackage packages = new UserPackage();
		packages.setPid(hotel.getId());
		packages.setType("hotel");
		packages.setUserId(us.getUserByEmail(security.extractUsername(token)).getId());
		
		ups.savePackages(packages);
		
		HashMap<String, String> data = new HashMap<String, String>();
		hs.bookHotel(hotel);
		data.put("status", "Saved");
		return data;
	}

}
