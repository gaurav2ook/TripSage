package com.example.tripsage.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tripsage.Model.AdminPackages;
import com.example.tripsage.Model.Flight;
import com.example.tripsage.Model.Hotel;
import com.example.tripsage.Model.ManualPackages;
import com.example.tripsage.Model.Restaurant;
import com.example.tripsage.Model.Train;
import com.example.tripsage.Repository.AdminPackageRepo;
import com.example.tripsage.Repository.FlightRepo;
import com.example.tripsage.Repository.HotelRepo;
import com.example.tripsage.Repository.ManualPackagesRepo;
import com.example.tripsage.Repository.RestaurantRepo;
import com.example.tripsage.Repository.TrainRepo;

@Service
public class AdminPackageService {
	
	@Autowired
	private AdminPackageRepo apr;
	
	@Autowired
	private HotelRepo hr;
	
	@Autowired
	private RestaurantRepo rr;
	
	@Autowired
	private TrainRepo tr;
	
	@Autowired
	private FlightRepo fr;
	
	@Autowired
	private ManualPackagesRepo mr;
	
	public void savePackage(String name, HashMap<String, String> data, Long uid) {
		if(data.get("ptype").equals("hotel")) {
			Hotel ht = new Hotel();
			ht.setId(data.get("id"));
			ht.setImage(data.get("image"));
			ht.setName(data.get("name"));
			ht.setLocation(data.get("location"));
			ht.setRating(data.get("rating"));
			ht.setPrice(data.get("price"));
			ht.setAmenities(data.get("amenities"));
			hr.save(ht);
		} else if(data.get("ptype").equals("flight")) {
			Flight ft = new Flight();
			ft.setId(data.get("id"));
			ft.setImage(data.get("image"));
			ft.setName(data.get("name"));
			ft.setDeparture(data.get("departure"));
			ft.setArrival(data.get("arrival"));
			ft.setType(data.get("type"));
			ft.setDuration(data.get("duration"));
			ft.setPrice(data.get("price"));
			fr.save(ft);
		} else if(data.get("ptype").equals("restaurant")) {
			Restaurant rest = new Restaurant();
			rest.setCuisine(data.get("cuisine"));
			rest.setFeatures(data.get("features"));
			rest.setId(data.get("id"));
			rest.setImage(data.get("image"));
			rest.setLocation(data.get("location"));
			rest.setName(data.get("name"));
			rest.setPrice(data.get("price"));
			rest.setRating(data.get("rating"));
			rr.save(rest);
		} else if(data.get("ptype").equals("train")) {
			Train train = new Train();
			train.setArrival(data.get("arrival"));
			train.setClasses(data.get("classes"));
			train.setDeparture(data.get("departure"));
			train.setId(data.get("id"));
			train.setImage(data.get("image"));
			train.setName(data.get("name"));
			train.setPrice(data.get("price"));
			train.setStops(data.get("stops"));
			tr.save(train);
		}
		AdminPackages adpkg = new AdminPackages();
		adpkg.setPid(data.get("id"));
		adpkg.setUid(uid);
		adpkg.setName(name);
		adpkg.setType(data.get("ptype"));
		apr.save(adpkg);
	}
	
	public void saveManualPackages(Long uid, HashMap<String, String> data) {
		ManualPackages mpkg = new ManualPackages();
		mpkg.setDescription(data.get("description"));
		mpkg.setName(data.get("name"));
		mpkg.setDuration(data.get("duration"));
		mpkg.setImage(data.get("image"));
		mpkg.setLocation(data.get("location"));
		mpkg.setPrice(data.get("price"));
		mpkg.setUid(uid);
		mr.save(mpkg);
	}
	
	public void saveHotels(Long uid, Hotel hotel) {
		hr.save(hotel);
		AdminPackages adpkg = new AdminPackages();
		adpkg.setPid(hotel.getId());
		adpkg.setUid(uid);
		adpkg.setName("Trip");
		adpkg.setType("hotel");
		apr.save(adpkg);
	}
	
	public void saveRestaurants(Long uid, Restaurant restaurant) {
		rr.save(restaurant);
		
		AdminPackages adpkg = new AdminPackages();
		adpkg.setPid(restaurant.getId());
		adpkg.setUid(uid);
		adpkg.setName("Trip");
		adpkg.setType("restaurant");
		apr.save(adpkg);
	}
	
	public List<ManualPackages> getManualPackages() {
		List<ManualPackages> data = mr.findAll();
		return data;
	}
	
	public List<HashMap<String, String>> getAllPackages(Long id) {
		List<HashMap<String, String>> data = new ArrayList<HashMap<String,String>>();
		
		for(AdminPackages pkg : apr.findByUid(id)) {
			HashMap<String, String> dt = new HashMap<String, String>();
			dt.put("id", ""+pkg.getId());
			dt.put("name", pkg.getName());
			dt.put("type", pkg.getType());
			dt.put("location", "");
			dt.put("price", "");
			dt.put("image", "");
			dt.put("duration", "");
			dt.put("description", "");
			dt.put("createdDate", "");
			if(pkg.getType().equals("hotel")) {
				Hotel ht = hr.findById(pkg.getPid()).orElse(null);
				dt.put("location", ht.getLocation());
				dt.put("price", ht.getPrice());
				dt.put("description", ht.getAmenities());
				dt.put("image", ht.getImage());
				dt.put("createdDate", ht.getDate().toString());
			} else if(pkg.getType().equals("restaurant")) {
				Restaurant rt = rr.findById(pkg.getPid()).orElse(null);
				dt.put("location", rt.getLocation());
				dt.put("price", rt.getPrice());
				dt.put("description", rt.getFeatures());
				dt.put("image", rt.getImage());
				dt.put("createdDate", rt.getDate().toString());
			} else if(pkg.getType().equals("train")) {
				Train train = tr.findById(pkg.getPid()).orElse(null);
				dt.put("location", train.getName());
				dt.put("price", train.getPrice());
				dt.put("description", train.getClasses());
				dt.put("image", train.getImage());
				dt.put("createdDate", train.getDate().toString());
			} else if(pkg.getType().equals("flight")) {
				Flight flight = fr.findById(pkg.getPid()).orElse(null);
				dt.put("location", flight.getName());
				dt.put("price", flight.getPrice());
				dt.put("description", flight.getType());
				dt.put("image", flight.getImage());
				dt.put("createdDate", flight.getDate().toString());
			}
			
			data.add(dt);
		}
		
		return data;
	}
	
	public void deletePackage(Long id) {
		apr.deleteById(id);
	}

}
