package com.pack.demo.ragister;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository

public interface RegisterRepo extends JpaRepository<Register,String> {
	
//public Register findUserByEmailAndPassword(String userName,String password);
	
	
}
