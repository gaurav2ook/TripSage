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
		
		Flight f1 = new Flight();
		f1.setId("SK 566");
		f1.setImage("https://www.gstatic.com/flights/airline_logos/70px/SK.png");
		f1.setName("Airbus A320neo");
		f1.setDeparture("2024-11-21 11:10");
		f1.setArrival("2024-11-21 13:00\"");
		f1.setType("Economy");
		f1.setDuration("110");
		f1.setPrice("72");
		data.add(f1);
		Flight f2 = new Flight();
		f2.setId("SK 939");
		f2.setImage("https://www.gstatic.com/flights/airline_logos/70px/SK.png");
		f2.setName("Airbus A350");
		f2.setDeparture("2024-11-21 15:45");
		f2.setArrival("2024-11-21 18:00");
		f2.setType("Economy");
		f2.setDuration("675");
		f2.setPrice("65");
		data.add(f2);
		Flight f3 = new Flight();
		f3.setId("DL 692");
		f3.setImage("https://www.gstatic.com/flights/airline_logos/70px/DL.png");
		f3.setName("Boeing 737");
		f3.setDeparture("2024-11-21 19:31");
		f3.setArrival("2024-11-22 00:28");
		f3.setType("Economy");
		f3.setDuration("177");
		f3.setPrice("60");
		data.add(f3);
		Flight f4 = new Flight();
		f4.setId("UA 914");
		f4.setImage("https://www.gstatic.com/flights/airline_logos/70px/UA.png");
		f4.setName("Boeing 787");
		f4.setDeparture("2024-11-21 11:40");
		f4.setArrival("2024-11-21 14:25");
		f4.setType("Economy");
		f4.setDuration("525");
		f4.setPrice("55");
		data.add(f4);
		Flight f5 = new Flight();
		f5.setId("UA 1858");
		f5.setImage("https://www.gstatic.com/flights/airline_logos/70px/UA.png");
		f5.setName("Boeing 737");
		f5.setDeparture("2024-11-21 17:55");
		f5.setArrival("2024-11-21 20:41");
		f5.setType("Economy");
		f5.setDuration("226");
		f5.setPrice("50");
		data.add(f5);
		
		return data;
	}
	
	public void bookFlight(Flight ft) {
		fr.save(ft);
	}
	
}
