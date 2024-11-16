package com.example.tripsage.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tripsage.DTO.FlightSearchDTO;
import com.example.tripsage.Model.Flight;
import com.example.tripsage.Repository.FlightRepo;

@Service
public class FlightService {
	
	@Autowired
	private FlightRepo fr;
	
	public List<Flight> getFlight(FlightSearchDTO search) {
		List<Flight> data = new ArrayList<Flight>();
		
		return data;
	}
	
	public void bookFlight(Flight ft) {
		fr.save(ft);
	}
	
}
