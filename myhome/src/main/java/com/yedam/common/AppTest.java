package com.yedam.common;

import java.util.List;
import java.util.Map;

import com.yedam.dao.EmpDAO;
import com.yedam.vo.EmpVO;

public class AppTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
	
		EmpVO evo = new EmpVO();
		
		evo.setEmail("test@email.com");
		evo.setEmpName("testname");
		evo.setEmpPhone("0122223333");
		evo.setHireDate("2022-02-02");
		evo.setSalary(4000);
		evo.setEmpNo(81);
		
		EmpDAO edao = new EmpDAO();
		
		if(edao.insertEmp(evo)) {
			System.out.println("성공");
		}else {
			System.out.println("실패");
		}
		List<EmpVO> list = edao.selectList();
		for(EmpVO vo : list) {
			System.out.println(vo.toString());
		}
		
//		if(edao.updateEmp(evo.getEmpNo())) {
//			System.out.println("성공");
//		}else {
//			System.out.println("실패");
//		}
//		
//		if(edao.deleteEmp(evo.getEmpNo())) {
//			System.out.println("성공");
//		}else {
//			System.out.println("실패");
//		}
		
	}//

}//
