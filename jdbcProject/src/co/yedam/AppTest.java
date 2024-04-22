package co.yedam;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

// 1.ojdbc 라이브러리.
// 2.Connection 객체 접속.
// 3.PreparedStatemnt 객체 쿼리 실행
// 4.결과 => 화면출력, 기능수행.
public class AppTest {
	public static void main(String[] args) {
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
		} catch (ClassNotFoundException e) {
		
			e.printStackTrace();
			return;
		}
		
		String url = "jdbc:oracle:thin:@localhost:1521:xe";
		try {
			Connection conn = DriverManager.getConnection(url, "jsp", "jsp"); //2번쨰 3번째는 사용자 id , password
			
			String sql1 = "select * from emp";
			String sql2 = "insert into emp(emp_no, emp_name, emp_phone, email, salary)";
			sql2 += "values(emp_seq.NEXTVAL, ?, ?, ?, ?)";
			
			PreparedStatement psmt = conn.prepareStatement(sql2); // 쿼리를 넘겨주면 preparstatement에서 쿼리를 실행하고 결과를 받아옴
			psmt.setString(1, "홍길동");
			psmt.setString(2, "03-1111-1111");
			psmt.setString(3, "Hgd@email");
			psmt.setInt(4, 5000);
			
			int r = psmt.executeUpdate(); //insert, update, delete 일 경우. 실행
			System.out.println("등록된 건수 : " + r);
			
			psmt = conn.prepareStatement(sql1);
			ResultSet rs = psmt.executeQuery(); //excuteQuery는 조회
			while(rs.next()) { 
				System.out.print("사원번호 : " + rs.getInt("emp_no"));
				System.out.print(" 사원이름 : " + rs.getString("emp_name"));
				System.out.print(" 연락처 : " + rs.getString("emp_phone"));
				System.out.print(" 이메일 : " + rs.getString("email"));
				System.out.println(" 사원급여 : " + rs.getInt("salary"));
			}
		} catch (SQLException e) {
		
			e.printStackTrace();
		}
		System.out.println("end of prog.");
	}
}
