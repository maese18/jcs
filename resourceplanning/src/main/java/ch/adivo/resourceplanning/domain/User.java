package ch.adivo.resourceplanning.domain;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
public class User extends AbstractEntity {
	@OneToOne
	private Employee employee;
	private String userName;

	public User(Employee employee, String userName) {
		super();
		this.employee = employee;
		this.userName = userName;
	}

	public Employee getEmployee() {
		return employee;
	}

	public String getUserName() {
		return userName;
	}

}
