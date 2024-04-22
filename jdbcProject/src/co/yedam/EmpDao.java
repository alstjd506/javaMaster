package co.yedam;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class EmpDao {
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;
		
	//db에 접속 후 connection.
	private void getConn() {
		String url = "jdbc:oracle:thin:@localhost:1521:xe";
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			conn = DriverManager.getConnection(url, "jsp", "jsp"); //2번쨰 3번째는 사용자 id , password
		} catch (Exception e) {
		
			e.printStackTrace();
			return;
		}
			
	} // end of getConn().
	
	// 사원의 목록을 반환해주는 기능
	List<Employee> empList() {
		getConn();
		List<Employee> list = new ArrayList<Employee>();
		String sql = "select * from emp order by emp_no";
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			
			while(rs.next()) {
//				System.out.printf("%3d,%-10s,%13s,%d" +rs.getInt("emp_no"),rs.getString("emp_name"),rs.getString("emp_phone"),rs.getInt("salary"));
				Employee emp = new Employee();
				emp.setEmpNo(rs.getInt("emp_no"));
				emp.setName(rs.getString("emp_name"));
				emp.setPhone(rs.getString("emp_phone"));
				emp.setMail(rs.getString("email"));
				emp.setHdate(rs.getString("hire_date"));
				emp.setSal(rs.getInt("salary"));
				list.add(emp);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	
	// 사원등록 기능.
	boolean insertEmp(Employee emp) {
		getConn();
		String sql = "insert into emp(emp_no, emp_name, emp_phone, email, hire_date, salary) "
				+ "values(emp_seq.NEXTVAL, ?,?,?,?,?)";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, emp.getName());
			psmt.setString(2, emp.getPhone());
			psmt.setString(3, emp.getMail());
			psmt.setString(4, emp.getHdate());
			psmt.setInt(5, emp.getSal());
			
			int r = psmt.executeUpdate(); //처리된 건수를 반환.
			if(r > 0) {
				return true;
			}
	
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false; //예외 발생하거나 처리된 건수가 0일 경우.
		
	}
	
	
	// 정보수정 기능
	boolean updateEmp(Employee emp) {
		getConn();
		String sql = "update emp ";
		sql += "	  set salary = ? ";
		sql += " 		  ,email = ?";
		sql += " 	  where emp_no = ?";
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, emp.getSal());
			psmt.setString(2, emp.getMail());

			psmt.setInt(3, emp.getEmpNo());
			
			int r = psmt.executeUpdate();
			if(r > 0) {
				return true;
			} 
			
		} catch (SQLException e) {

			e.printStackTrace();
		}
		
		
		return false;
	}
	
	// 사원삭제 기능
	boolean deleteEmp(Employee emp) {
		getConn();
		String sql = "delete emp ";
		sql += " 	  where emp_no = ?";
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, emp.getEmpNo());
			
			int r = psmt.executeUpdate();
			if(r > 0) {
				return true;
			} 
		} catch (SQLException e) {
		
			e.printStackTrace();
		}
		
		return false;
	}
	
	
	
}
