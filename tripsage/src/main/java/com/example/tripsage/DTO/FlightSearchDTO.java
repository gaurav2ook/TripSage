package com.example.tripsage.DTO;

public class FlightSearchDTO {
	
	private String from;
	private String to;
	private String departureDate;
	private String returnDate;
	private String tripType;
	private String passengers;
	private String travelClass;
	public FlightSearchDTO(String from, String to, String departureDate, String returnDate, String tripType,
			String passengers, String travelClass) {
		super();
		this.from = from;
		this.to = to;
		this.departureDate = departureDate;
		this.returnDate = returnDate;
		this.tripType = tripType;
		this.passengers = passengers;
		this.travelClass = travelClass;
	}
	public String getFrom() {
		return from;
	}
	public void setFrom(String from) {
		this.from = from;
	}
	public String getTo() {
		return to;
	}
	public void setTo(String to) {
		this.to = to;
	}
	public String getDepartureDate() {
		return departureDate;
	}
	public void setDepartureDate(String departureDate) {
		this.departureDate = departureDate;
	}
	public String getReturnDate() {
		return returnDate;
	}
	public void setReturnDate(String returnDate) {
		this.returnDate = returnDate;
	}
	public String getTripType() {
		return tripType;
	}
	public void setTripType(String tripType) {
		this.tripType = tripType;
	}
	public String getPassengers() {
		return passengers;
	}
	public void setPassengers(String passengers) {
		this.passengers = passengers;
	}
	public String getTravelClass() {
		return travelClass;
	}
	public void setTravelClass(String travelClass) {
		this.travelClass = travelClass;
	}
	
	

}
