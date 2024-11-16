package com.example.tripsage.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.tripsage.DTO.TrainSearchDTO;
import com.example.tripsage.Model.Train;
import com.example.tripsage.Repository.TrainRepo;

@Service
public class TrainService {
	
	@Autowired
	private TrainRepo tr;
	
	public List<Train> getTrain(TrainSearchDTO search) {
		List<Train> data = new ArrayList<Train>();
		
		return data;
	}
	
	public void bookTrain(Train t) {
		tr.save(t);
	}

}
