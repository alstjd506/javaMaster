package co.yedam;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;
import java.util.*;

public class MemberDao {
	Connection conn;
	PreparedStatement psmt;
	ResultSet rs;
	
	private void getConn() {
		String url = "jdbc:oracle:thin:@localhost:1521:xe";
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
			conn = DriverManager.getConnection(url, "jsp", "jsp"); //2번쨰 3번째는 사용자 id , password
		} catch (Exception e) {
		
			e.printStackTrace();
			return;
		}
	}
	
	//화원 목록
	List<Member> memList(){ 
		getConn();
		List<Member> list = new ArrayList<Member>();
		String sql = "select * from member order by mem_no";
		
		try {
			psmt = conn.prepareStatement(sql);
			rs = psmt.executeQuery();
			
			while(rs.next()) {
				Member mem = new Member();
				mem.setMemNo(rs.getInt("mem_no"));
				mem.setName(rs.getString("mem_name"));
				mem.setPhone(rs.getString("mem_phone"));
				mem.setBdate(rs.getString("birdate"));
				mem.setGender(rs.getString("gender"));
				list.add(mem);
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	
	//회원 등록
	boolean getInput(Member mem) {
		getConn();
		String sql = "insert into member(mem_no, mem_name, mem_phone, birdate, gender) "
				+ "values(emp_seq.NEXTVAL, ?, ?, ?, ?)";
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, mem.getName());
			psmt.setString(2, mem.getPhone());
			psmt.setString(3, mem.getBdate());
			psmt.setString(4, mem.getGender());
			
			int r = psmt.executeUpdate();
			if(r > 0) {
				return true;
			}
	
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return false;
	}
	
	//수정
	boolean updateMem(Member mem) {
		getConn();
		String sql = "update member ";
		sql += "	  set mem_phone = ? ";
		sql += " 	  where mem_no = ?";
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setString(1, mem.getPhone());
			psmt.setInt(2, mem.getMemNo());
			
			int r = psmt.executeUpdate();
			if(r > 0) {
				return true;
			} 
			
		} catch (SQLException e) {

			e.printStackTrace();
			
		}
		
		return false;
	}

	boolean deleteMem(Member mem) {
		getConn();
		String sql = "delete member ";
		sql += " 	  where mem_no = ?";
		
		try {
			psmt = conn.prepareStatement(sql);
			psmt.setInt(1, mem.getMemNo());
			
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
