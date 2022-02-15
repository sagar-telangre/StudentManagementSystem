package com.pack.demo.ragister;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class RegiController {
	@Autowired
private RegisterServiceImpl service;
	
	@PostMapping("/register")
	
	public Register registerUser(@RequestBody Register register)
	{
		
		return  this.service.RegisterService(register);
	}
	
	@PostMapping("/loginuser")
public Register loginUser(@RequestBody Register regi) throws Exception
{
		String userName=regi.getUserName();
		
		String password=regi.getPassword();
		
	Register r=service.fetchUserByEmailAndPassword(userName);
		
			if(r!=null)
			{
				return r;
			}
			else
			{
				throw new Exception("Username And Pass not found");
			}
	}
		
	
}
	
	


	



	
	
	
	

