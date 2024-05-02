package com.yedam.vo;

import lombok.Data;
// lombok : 이클립스에 설치, 라이브러리 필요(Maven Repository -> lombok -> project lombok -> 메차쿠차

@Data
public class EmpVO {
	private int empNo; // 오라클 (emp_no) : 자바(empNo)
	private String empName;
	private String empPhone;
	private String email;
	private String hireDate;
	private int salary;
	
}
