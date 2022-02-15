package com.pack.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int enNo;
	String studentName;
	String fatherName;
	String sirName;
	String email;
	String moNo;

	
	public Student(int enNo, String studentName, String fatherName, String sirName, String email, String moNo) {
		super();
		this.enNo = enNo;
		this.studentName = studentName;
		this.fatherName = fatherName;
		this.sirName = sirName;
		this.email = email;
		this.moNo = moNo;
	}

	public int getEnNo() {
		return enNo;
	}

	public void setEnNo(int enNo) {
		this.enNo = enNo;
	}

	public String getStudentName() {
		return studentName;
	}

	public void setStudentName(String studentName) {
		this.studentName = studentName;
	}

	public String getFatherName() {
		return fatherName;
	}

	public void setFatherName(String fatherName) {
		this.fatherName = fatherName;
	}

	public String getSirName() {
		return sirName;
	}

	public void setSirName(String sirName) {
		this.sirName = sirName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getMoNo() {
		return moNo;
	}

	public void setMoNo(String moNo) {
		this.moNo = moNo;
	}

	public Student() {
		super();
		
	}

	

	
	
	
}