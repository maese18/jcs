package ch.adivo.resourceplanning.domain;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
@DiscriminatorValue(value = "Project")
public class Project extends Initiative {
	@OneToOne
	private Employee projectLead;

	Project() {

	}

	public Project(final String title) {
		super(title);
	}

	public Employee getProjectLead() {
		return projectLead;
	}

	public void setProjectLead(final Employee projectLead) {
		this.projectLead = projectLead;
	}

}
