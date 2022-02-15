package com.pack.demo.ragister;

import java.util.DuplicateFormatFlagsException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegisterServiceImpl {
	@Autowired
	private RegisterRepo repo;

	public RegisterServiceImpl() {

	}

	public Register RegisterService(Register register) {
		try {
			repo.equals(register.userName);
		} catch (DuplicateFormatFlagsException e) {
			System.out.println(e);
		}

		repo.save(register);
		return register;
	}

//public Register getUserNameAndPassword(String userName, String password) throws Exception
//{
//	
//	/*Register temp=repo.findUserByUserNameAndPassword(userName, password);
//	
//	if(temp==null)
//	{
//	 throw new Exception("UserNotFound");	
//	}
//	else 
//	{
//		
//return temp;	
//	}
// */
//
//Register register=repo.getById(userName);
//System.out.println(register==null);
//return register;
//}
//	

	public Register fetchUserByEmailAndPassword(String userName) {
		
		//return repo.findUserByEmailAndPassword(userName, password);
		return repo.findById(userName).get();
		
	}

}
