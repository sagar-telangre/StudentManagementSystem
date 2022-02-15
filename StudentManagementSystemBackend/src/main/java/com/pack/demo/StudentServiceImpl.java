package com.pack.demo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class StudentServiceImpl implements Studservice {

	//List<Student>list;
	@Autowired
	private Studantdao dao;

	public StudentServiceImpl()
	{
//		list=new ArrayList<>();
//		list.add(new Student(1,"sagar","waluba","Telangre","sagar@gmai.com","7756940443"));
//		list.add(new Student(2,"akshay","waluba","Telangre","sagar@gmai.com","7756940443"));
//		list.add(new Student(3,"ram","waluba","Telangre","sagar@gmai.com","7756940443"));
//		list.add(new Student(4,"vaibhav","waluba","Telangre","sagar@gmai.com","7756940443"));
}
	@Override
	public List<Student> getStudent() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public Student getStudent(int enNo) {

//		Student s=null;
//		for (Student student : list) {
//			if (student.getEnNo()==EnNo) {
//			s=student;
//			break;
//			}
//		}
		return dao.getOne(enNo);
	}

	@Override
	public Student addStudent(Student s) {
	
		
		//list.add(s);
		dao.save(s);
		
		return s;
	}
	
	
	@Override
	public Student updateStudent(Student s) {
//		list.forEach(e->
//		{
//			if (e.getEnNo()==s.getEnNo()) {
//				e.setStudentname(s.getStudentname());
//				e.setFathername(s.getFathername());
//				e.setSirname(s.getSirname());
//				e.setEmail(s.getEmail());
//				e.setMono(s.getMono());
//				
//			}
//		}
//	);
	
		dao.save(s);
		return s;
	}
	
	
	@Override
	public void deleteStudent(int Id) {
		
		//list=this.list.stream().filter(e->e.getEnNo()!=parseInt).collect(Collectors.toList());
	  dao.deleteById(Id);

		
	}
	
	

}
