package co.yedam;

import java.sql.Date;

public class Employee {
	private int empNo;
	private String name;

	private String phone;
	private String mail;
	private String hdate;
	private int sal;
	

	@Override
	public String toString() {
		// "사번\t 이름\t 이메일\t 급여\t "
		return String.format("%2d %-15s %-15s %10d", empNo, name , mail, sal);
	}

	public String showInfo() {
		// "사번\t 이름\t 이메일\t 급여\t "
		return String.format("%2d %-15s %-15s %10d", empNo, name, phone, sal);
	}
	
	public int getEmpNo() {
		return empNo;
	}
	
	public void setEmpNo(int empNo) {
		this.empNo = empNo;
	}
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getMail() {
		return mail;
	}

	public void setMail(String mail) {
		this.mail = mail;
	}

	public String getHdate() {
		return hdate;
	}

	public void setHdate(String date) {
		this.hdate =  date;
	}

	public int getSal() {
		return sal;
	}

	public void setSal(int sal) {
		this.sal = sal;
	}

}
