package com.example.tripsage.DTO;

public class RestaurantSearchDTO {
	
	private String location;
	private String date;
	private String time;
	private String guestCount;
	private String cuisine;
	public RestaurantSearchDTO(String location, String date, String time, String guestCount, String cuisine) {
		super();
		this.location = location;
		this.date = date;
		this.time = time;
		this.guestCount = guestCount;
		this.cuisine = cuisine;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getGuestCount() {
		return guestCount;
	}
	public void setGuestCount(String guestCount) {
		this.guestCount = guestCount;
	}
	public String getCuisine() {
		return cuisine;
	}
	public void setCuisine(String cuisine) {
		this.cuisine = cuisine;
	}
	
	

}
