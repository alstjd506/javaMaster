package co.yedam;

import java.text.ParseException;
import java.util.*;

public class MemberManager {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		

		boolean run = true;
		Scanner sc = new Scanner(System.in);
		MemberDao dao = new MemberDao();
		
		while(run) {
			System.out.println("1.회원목록 2.회원등록 3.정보수정 4.정보삭제 5.종료");
			System.out.print("선택 > ");
			int menu = sc.nextInt();
			sc.nextLine();
			
			switch(menu) {
			case 1:
				List<Member> mems = dao.memList();
				System.out.println("회원번호\t 회원명\t\t 연락처\t\t 생일\t 성별");
				System.out.println("------------------------------------------------------");
				for(Member mem : mems) {
					System.out.println(mem.toString());
				}
				break;
				
			case 2:
				System.out.print("회원명 >> ");
				String name = sc.nextLine();
				System.out.print("연락처 >> ");
				String phone = sc.nextLine();
				System.out.print("생일 >> ");
				String bdate = sc.nextLine();
				System.out.print("성별 >> ");
				String gender = sc.nextLine(); 
				
				Member mem = new Member();
				mem.setName(name);
				mem.setPhone(phone);
				mem.setBdate(bdate);
				mem.setGender(gender);
				
				if(dao.getInput(mem)) {
					System.out.println("정상 등록");
				} else{
				System.out.println("예외 발생");
				}
				break;
				
				
			case 3:
				System.out.print("수정할 회원번호 >> ");
				int memNo = sc.nextInt();
				sc.nextLine();
				System.out.print("전화번호 >> ");
				phone = sc.nextLine();
				
				mem = new Member();
				mem.setMemNo(memNo);
				mem.setPhone(phone);
			
				if(dao.updateMem(mem)) {
					System.out.println("수정 완료.");
				}else {
					System.out.println("처리 실패.");
				}
				break;
				
				
			case 4:				
				System.out.print("삭제할 회원번호 >> ");
				memNo = sc.nextInt();
				sc.nextLine();
				
				mem = new Member();
				mem.setMemNo(memNo);
				
				if(dao.deleteMem(mem)) {
					System.out.println("삭제 완료.");
				}else {
					System.out.println("처리 실패.");
				}
		
				break;
		
			case 5:
				
				break;

			case 6:
				run = false;
				System.out.println("종료");
				break;
			}
			
		}
		
	}

}
