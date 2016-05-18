package ch.adivo.resourceplanning.domain;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
@DiscriminatorValue(value = "Maintenance")
public class Maintenance extends Initiative {
	@OneToOne
	private Employee maintenanceManager;

	Maintenance() {
	}

	public Maintenance(final String title) {
		super(title);
	}

	public Employee getMaintenanceManager() {
		return maintenanceManager;
	}

	public void setMaintenanceManager(final Employee maintenanceManager) {
		this.maintenanceManager = maintenanceManager;
	}

}
