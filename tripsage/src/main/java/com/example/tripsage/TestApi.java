package com.example.tripsage;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class TestApi {
	
	void hotel() {
		String api = "df1ee5b47137c937d8037e4f95d2983bca0ada200a5208497fc2660e25de1c59";
		String location = "nagpur";
		String checkin = "2024-11-20";
		String checkout = "2024-11-21";
		String guests = "6";
		String rooms = "6";
		
		
		
		String apiUrl = "https://serpapi.com/search.json?api_key="
				+ api
				+ "&engine=google_hotels&q="
				+ location
				+ "&hl=en&currency=INR&check_in_date="
				+ checkin
				+ "&check_out_date="
				+ checkout
				+ "&adults="
				+ guests
				+ "&vacation_rentals=true&bedrooms="
				+ rooms;

        OkHttpClient client = new OkHttpClient();

        Request request = new Request.Builder()
                .url(apiUrl)
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (response.isSuccessful()) {
            	
            	JsonObject results = JsonParser.parseString(response.body().string()).getAsJsonObject();
      		  
	      		  JsonArray propertiesArray = results.getAsJsonArray("properties");
//	      		  
	      		  int count = 0;
//	      		  
	      		  for (JsonElement element : propertiesArray) {
	                    if (count >= 10) break;
//	      
	                    JsonObject property = element.getAsJsonObject();
	                    String id = property.get("property_token").getAsString();
	                    String name = property.get("name").getAsString();
	                    String image = property.get("images").getAsJsonArray().get(0).getAsJsonObject().get("thumbnail").getAsString();
	                    String resloc = "https://maps.google.com/?q="+ property.get("gps_coordinates").getAsJsonObject().get("latitude").getAsString() + "," + property.get("gps_coordinates").getAsJsonObject().get("longitude").getAsString() ;
//	                    String price = property.getAsJsonObject("rate_per_night").get("lowest").getAsString();
	                    String rating = property.get("overall_rating").getAsString();
	                    String amenities = "";
	                    for(JsonElement ele: property.getAsJsonArray("amenities")) {
	                  	  amenities += ele.getAsString() + ", ";
	                    }
//	                    
	                    System.out.println("Id: " + id);
	                    System.out.println("name: " + name);
	                    System.out.println("image: " + image);
	                    System.out.println("location: " + resloc);
//	                    System.out.println("price: " + price);
	                    System.out.println("rating: " + rating);
	                    System.out.println("amenities: " + amenities);
	                    
//	                    System.out.println(property);
//	      
	                    count++; // Increment the counter
	                }
	      		  
	      		  
//	      		  System.out.println(propertiesArray);
            	
            	
            	
            	
            } else {
                System.out.println("Request failed. Response Code: " + response.code());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
	}
	
	public static void main(String[] args) {
		
		
		
	}

}
