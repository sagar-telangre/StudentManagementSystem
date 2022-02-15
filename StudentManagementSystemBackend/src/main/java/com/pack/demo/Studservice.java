package com.pack.demo;

import java.util.List;

import com.fasterxml.jackson.core.sym.Name;

public interface Studservice {
	public List<Student> getStudent();

	public Student getStudent(int enNo);

	public Student addStudent(Student s);

	//public Student getStudent(S name);

	public Student updateStudent(Student s);

	public void deleteStudent(int parseInt);





}
