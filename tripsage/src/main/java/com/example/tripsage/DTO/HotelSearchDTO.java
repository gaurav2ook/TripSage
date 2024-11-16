package com.example.tripsage.DTO;

public class HotelSearchDTO {
	
	private String dest;
	private String checkin;
	private String checkout;
	private String guests;
	private String rooms;
	public HotelSearchDTO(String dest, String checkin, String checkout, String guests, String rooms) {
		super();
		this.dest = dest;
		this.checkin = checkin;
		this.checkout = checkout;
		this.guests = guests;
		this.rooms = rooms;
	}
	public String getDest() {
		return dest;
	}
	public void setDest(String dest) {
		this.dest = dest;
	}
	public String getCheckin() {
		return checkin;
	}
	public void setCheckin(String checkin) {
		this.checkin = checkin;
	}
	public String getCheckout() {
		return checkout;
	}
	public void setCheckout(String checkout) {
		this.checkout = checkout;
	}
	public String getGuests() {
		return guests;
	}
	public void setGuests(String guests) {
		this.guests = guests;
	}
	public String getRooms() {
		return rooms;
	}
	public void setRooms(String rooms) {
		this.rooms = rooms;
	}
	
	

}
