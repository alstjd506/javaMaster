package co.yedam;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

public class EmpManager {

	public static void main(String[] args) {
	
		//Scanner
		boolean run = true;
		Scanner sc = new Scanner(System.in);
		EmpDao dao = new EmpDao();
		
		while(run) {
			System.out.println("1.사원목록 2.사원등록 3.정보수정 4.사원삭제 5.종료");
			System.out.print("선택 > ");
			int menu = sc.nextInt();
			sc.nextLine();
			
			switch(menu) {
			case 1:
				List<Employee> emps = dao.empList();
				System.out.println("사번\t 이름\t\t 연락처\t\t 급여\t ");
				System.out.println("-----------------------------------------------");
				for(Employee emp : emps) {
					System.out.println(emp.showInfo());
				}
				
				break;
			case 2:
				System.out.print("사원명 >> ");
				String name = sc.nextLine();
				System.out.print("연락처 >> ");
				String phone = sc.nextLine();
				System.out.print("이메일 >> ");
				String mail = sc.nextLine();
				System.out.print("입사일자 >> ");
				String hdate = sc.nextLine(); 
				System.out.print("급여 >> ");
				int sal = sc.nextInt();
				sc.nextLine();
				
				Employee emp = new Employee();
				emp.setName(name);
				emp.setPhone(phone);
				emp.setMail(mail);
				emp.setHdate(hdate);
				emp.setSal(sal);
				
				if(dao.insertEmp(emp)) {
					System.out.println("정상 등록");
				} else{
					System.out.println("예외 발생");
				}
				break;
			case 3:
				System.out.print("사원번호 >> ");
				int eno = sc.nextInt();
				sc.nextLine();
				System.out.print("이메일 >> ");
				mail = sc.nextLine();
				System.out.print("급여 >> ");
				sal = sc.nextInt();
				sc.nextLine();
				
				emp = new Employee();
				emp.setEmpNo(eno);
				emp.setMail(mail);
				emp.setSal(sal);
				
				if(dao.updateEmp(emp)) {
					System.out.println("수정 완료.");
				}else {
					System.out.println("처리 실패.");
				}
				
				break;
			case 4:
				System.out.print("삭제할 사원번호 >> ");
				eno = sc.nextInt();
				sc.nextLine();
				
				emp = new Employee();
				emp.setEmpNo(eno);
				
				if(dao.deleteEmp(emp)) {
					System.out.println("삭제 완료.");
				}else {
					System.out.println("처리 실패.");
				}
		
				break;
			case 5:
				System.out.println("종료....");
				run = false;
				break;
			}
			
		}
		System.out.println("종료");
		
	}

}
