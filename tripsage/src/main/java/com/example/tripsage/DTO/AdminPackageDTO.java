package com.example.tripsage.DTO;

import java.util.HashMap;
import java.util.List;

public class AdminPackageDTO {
	private String name;
    private List<HashMap<String, String>> packages;
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<HashMap<String, String>> getPackages() {
		return packages;
	}
	public void setPackages(List<HashMap<String, String>> packages) {
		this.packages = packages;
	}
    
}
