package com.example.tripsage.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.example.tripsage.DTO.HotelSearchDTO;
import com.example.tripsage.Model.Hotel;
import com.example.tripsage.Repository.HotelRepo;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

@Service
public class HotelService {
	
	@Autowired
	private HotelRepo hr;
	
	@Value("${api.key}")
    private String api;
	
	public List<Hotel> getHotels(HotelSearchDTO search) {
		List<Hotel> data = new ArrayList<Hotel>();
		
		String apiUrl = "https://serpapi.com/search.json?api_key="
				+ api
				+ "&engine=google_hotels&q="
				+ search.getDest()
				+ "&hl=en&currency=INR&check_in_date="
				+ search.getCheckin()
				+ "&check_out_date="
				+ search.getCheckout()
				+ "&adults="
				+ search.getGuests().substring(0, 1)
				+ "&vacation_rentals=true&bedrooms="
				+ search.getRooms().substring(0, 1);
		
//		System.out.println("Location: " + search.getDest());
//		System.out.println("Checkin: " + search.getCheckin());
//		System.out.println("Checkout: " + search.getCheckout());
//		System.out.println("Guests: " + search.getGuests().substring(0, 1));
//		System.out.println("Rooms: " + search.getRooms().substring(0, 1));
		
		OkHttpClient client = new OkHttpClient();

        Request request = new Request.Builder()
                .url(apiUrl)
                .build();
        
        try (Response response = client.newCall(request).execute()) {
            if (response.isSuccessful()) {
            	
            	JsonObject results = JsonParser.parseString(response.body().string()).getAsJsonObject();
      		  
	      		  JsonArray propertiesArray = results.getAsJsonArray("properties");

	      		  int count = 0;

	      		  for (JsonElement element : propertiesArray) {
	                    if (count >= 10) break;
	                    
	                    String id = "", name = "", image = "", resloc = "", price = "", rating = "", amenities = "";

	                    JsonObject property = element.getAsJsonObject();
	                    try {	                    	
	                    	id = property.get("property_token").getAsString();
	                    } catch (Exception e) {}
	                    try {	                    	
	                    	name = property.get("name").getAsString();
	                    } catch (Exception e) {}
	                    try {							
	                    	image = property.get("images").getAsJsonArray().get(0).getAsJsonObject().get("thumbnail").getAsString();
						} catch (Exception e) {}
	                    try {
	                    	resloc = "https://maps.google.com/?q="+ property.get("gps_coordinates").getAsJsonObject().get("latitude").getAsString() + "," + property.get("gps_coordinates").getAsJsonObject().get("longitude").getAsString() ;							
						} catch (Exception e) {}
	                    try {							
	                    	price = property.getAsJsonObject("rate_per_night").get("lowest").getAsString();
						} catch (Exception e) {}
	                    try {
	                    	rating = property.get("overall_rating").getAsString();							
						} catch (Exception e) {}
	                    try {							
	                    	for(JsonElement ele: property.getAsJsonArray("amenities")) {
	                    		amenities += ele.getAsString() + ", ";
	                    	}
						} catch (Exception e) {}
	                    
	                    Hotel ht = new Hotel();
	                    ht.setId(id);
	                    ht.setName(name);
	                    ht.setImage(image);
	                    ht.setLocation(resloc);
	                    ht.setPrice(price);
	                    ht.setRating(rating);
	                    ht.setAmenities(amenities);
	                    data.add(ht);
	                    
	                    count++;
	                }
            	
            } else {
                System.out.println("Request failed. Response Code: " + response.code());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
		
		return data;
	}
	
	public void bookHotel(Hotel ht) {
		hr.save(ht);
	}

}
