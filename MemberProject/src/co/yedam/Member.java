package co.yedam;

public class Member {
	private int memNo;
	private String name;
	private String phone;
	private String bdate;
	private String gender;
	
	@Override
	public String toString() {
		return String.format("%-8d %-10s %-15s %10s %3s", memNo, name , phone, bdate, gender);
	}
	
	public String showDetail() {
		return String.format("%-8d %-10s %-15s %10s %3s", memNo, name , phone, bdate, gender);
	}
	
	public int getMemNo() {
		return memNo;
	}
	
	public void setMemNo(int memNo) {
		this.memNo = memNo;
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
	public String getBdate() {
		return bdate;
	}
	public void setBdate(String bdate) {
		this.bdate = bdate;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
}
