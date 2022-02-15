package com.pack.demo.ragister;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.type.TrueFalseType;
import org.springframework.web.bind.annotation.GetMapping;
@Entity
@Table(name="Mytable")
public class Register {
	
	
	private static final boolean TrueFalseType = true;
	@Id
	@Column(name = "userName",unique = TrueFalseType)
	String userName;
	 String password;
	String name;
	@Column
	//String sirName;
	String email;
	public Register() {
		
	}
	public Register(String userName, String password, String name, String sirName, String email) {
		super();
		this.userName = userName;
		this.password = password;
		this.name = name;
		//this.sirName = sirName;
		this.email = email;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
//	public String getSirName() {
//		return sirName;
//	}
//	public void setSirName(String sirName) {
//		this.sirName = sirName;
//	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public static boolean isTruefalsetype() {
		return TrueFalseType;
	}
	
}