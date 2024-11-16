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
import com.example.tripsage.DTO.TrainSearchDTO;
import com.example.tripsage.Model.Train;
import com.example.tripsage.Model.UserPackage;
import com.example.tripsage.Service.TrainService;
import com.example.tripsage.Service.UserPackageService;
import com.example.tripsage.Service.UserService;

@RestController
@RequestMapping("/api/trains")
public class TrainController {
	
	@Autowired
	private TrainService ts;

	@Autowired
	private JwtSecurity security;
	
	@Autowired
	private UserService us;
	
	@Autowired
	private UserPackageService ups;
	
	@PostMapping("/search")
	public List<Train> getTrains(@RequestBody TrainSearchDTO search) {
		return ts.getTrain(search);
	}

	@PostMapping("/book")
	public HashMap<String, String> bookTrains(@RequestHeader("Authorization") String token, @RequestBody Train train) {
		if (token.startsWith("Bearer ")) {
            token = token.substring(7);
        }
		
		UserPackage packages = new UserPackage();
		packages.setPid(train.getId());
		packages.setType("train");
		packages.setUserId(us.getUserByEmail(security.extractUsername(token)).getId());
		ups.savePackages(packages);
		
		HashMap<String, String> data = new HashMap<String, String>();
		ts.bookTrain(train);
		data.put("status", "Saved");
		return data;
	}
}
