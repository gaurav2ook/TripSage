package com.example.tripsage.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tripsage.DTO.HotelSearchDTO;
import com.example.tripsage.Model.Hotel;
import com.example.tripsage.Repository.HotelRepo;

@Service
public class HotelService {
	
	@Autowired
	private HotelRepo hr;
	
	public List<Hotel> getHotels(HotelSearchDTO search) {
		List<Hotel> data = new ArrayList<Hotel>();
		
		
		return data;
	}
	
	public void bookHotel(Hotel ht) {
		hr.save(ht);
	}

}
