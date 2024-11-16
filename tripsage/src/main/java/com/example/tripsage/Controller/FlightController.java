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
import com.example.tripsage.DTO.FlightSearchDTO;
import com.example.tripsage.Model.Flight;
import com.example.tripsage.Model.UserPackage;
import com.example.tripsage.Service.FlightService;
import com.example.tripsage.Service.UserPackageService;
import com.example.tripsage.Service.UserService;

@RestController
@RequestMapping("/api/flights")
public class FlightController {
	
	@Autowired
	private FlightService fs;
	
	@Autowired
	private JwtSecurity security;
	
	@Autowired
	private UserService us;
	
	@Autowired
	private UserPackageService ups;
	
	@PostMapping("/search")
	public List<Flight> getFlights(@RequestBody FlightSearchDTO search) {
		return fs.getFlight(search);
	}
	
	@PostMapping("/book")
	public HashMap<String, String> bookFlights(@RequestHeader("Authorization") String token, @RequestBody Flight flight) {
		if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
		
		UserPackage packages = new UserPackage();
		packages.setPid(flight.getId());
		packages.setType("flight");
		packages.setUserId(us.getUserByEmail(security.extractUsername(token)).getId());
		
		ups.savePackages(packages);
		
		HashMap<String, String> data = new HashMap<String, String>();
		fs.bookFlight(flight);
		data.put("status", "Saved");
		return data;
	}

}
