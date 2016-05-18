package ch.adivo.resourceplanning.domain;

import javax.persistence.Entity;

@Entity
public class Employee extends AbstractEntity {

	private String userName;
	private String firstName;
	private String lastName;

	public Employee() {
	}

	public Employee(final String userName, final String firstName, final String lastName) {
		super();
		this.userName = userName;
		this.firstName = firstName;
		this.lastName = lastName;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getUserName() {
		return userName;
	}

	public void setFirstName(final String firstName) {
		this.firstName = firstName;
	}

	public void setLastName(final String lastName) {
		this.lastName = lastName;
	}

	public void setUserName(final String userName) {
		this.userName = userName;
	}

}
