package com.pack.demo;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController

@CrossOrigin(origins = "*")
public class MyController {
	
	@Autowired
	private StudentServiceImpl ssi;
	
	
	@GetMapping("/getstudent")
public List  getSudent() 
{
	return this.ssi.getStudent();
}	
	@GetMapping("/{EnNo}")
	public Student getStudent(@PathVariable int EnNo)
	{
		return ssi.getStudent(EnNo);
	}
	@PostMapping("/addstudent")
	public Student addStudent(@RequestBody Student s)
	{
		return this.ssi.addStudent(s);
	}
	
	
	//update Student
	@PutMapping("/updatestudent")
	public Student updateStudent(@RequestBody Student student) {
		
		return this.ssi.updateStudent(student);
	}
	
	
	@DeleteMapping("/delete/{enNo}")
	public void DeleteStudent(@PathVariable int enNo)
	{
		
		 this.ssi.deleteStudent(enNo);
			
	}
}