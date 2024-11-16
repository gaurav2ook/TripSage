package com.example.tripsage.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tripsage.Model.UserPackage;
import com.example.tripsage.Repository.FlightRepo;
import com.example.tripsage.Repository.HotelRepo;
import com.example.tripsage.Repository.RestaurantRepo;
import com.example.tripsage.Repository.TrainRepo;
import com.example.tripsage.Repository.UserPackageRepo;

@Service
public class UserPackageService {
	
	@Autowired
	private UserPackageRepo up;
	
	@Autowired
	private HotelRepo hr;
	
	@Autowired
	private RestaurantRepo rt;
	
	@Autowired
	private TrainRepo tr;
	
	@Autowired
	private FlightRepo fr;
	
	public void savePackages(UserPackage packages) {
		up.save(packages);
	}
	
	public List<HashMap<String, Object>> getPackages(Long uid) {
		
		List<HashMap<String, Object>> data = new ArrayList<HashMap<String,Object>>();
		
		for(UserPackage packages: up.findByUserId(uid)) {
			HashMap<String, Object> pkg = new HashMap<String, Object>();
			if(packages.getType().equals("hotel"))
				pkg.put("data", hr.findById(packages.getPid()).orElse(null));
			else if(packages.getType().equals("restaurant"))
				pkg.put("data", rt.findById(packages.getPid()).orElse(null));
			else if(packages.getType().equals("flight"))
				pkg.put("data", fr.findById(packages.getPid()).orElse(null));
			else if(packages.getType().equals("train"))
				pkg.put("data", tr.findById(packages.getPid()).orElse(null));

			pkg.put("Id", packages.getId());
			pkg.put("type", packages.getType());

			data.add(pkg);

		}
		
		return data;
	}

}
