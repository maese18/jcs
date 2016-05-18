package ch.adivo.resourceplanning.domain;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Version;

import org.springframework.data.annotation.LastModifiedDate;

@Entity
public class WeekAllocation implements BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Version
	private Long version;

	@LastModifiedDate
	private LocalDate lastModifiedDate;

	private LocalDate dateStartOfWeek;

	private Short hours;

	@OneToOne
	private Initiative allocatedForInitiative;
	@OneToOne
	private Employee allocatedByEmployee;

	public WeekAllocation(final LocalDate dateStartOfWeek, final Short hours, final Initiative allocatedForInitiative,
			final Employee allocatedByEmployee) {
		super();
		this.dateStartOfWeek = dateStartOfWeek;
		this.hours = hours;
		this.allocatedForInitiative = allocatedForInitiative;
		this.allocatedByEmployee = allocatedByEmployee;
	}

	public Employee getAllocatedByEmployee() {
		return allocatedByEmployee;
	}

	public Initiative getAllocatedForInitiative() {
		return allocatedForInitiative;
	}

	public LocalDate getDateStartOfWeek() {
		return dateStartOfWeek;
	}

	public Short getHours() {
		return hours;
	}

	@Override
	public Long getId() {
		return id;
	}

	@Override
	public LocalDate getLastModifiedDate() {
		return lastModifiedDate;
	}

	@Override
	public Long getVersion() {
		return version;
	}

	public void setAllocatedByEmployee(final Employee allocatedByEmployee) {
		this.allocatedByEmployee = allocatedByEmployee;
	}

	public void setAllocatedForInitiative(final Initiative allocatedForInitiative) {
		this.allocatedForInitiative = allocatedForInitiative;
	}

	public void setDateStartOfWeek(final LocalDate dateStartOfWeek) {
		this.dateStartOfWeek = dateStartOfWeek;
	}

	public void setHours(final Short hours) {
		this.hours = hours;
	}

	@Override
	public void setLastModifiedDate(final LocalDate lastModifiedDate) {
		this.lastModifiedDate = lastModifiedDate;
	}

	@Override
	public void setVersion(final Long version) {
		this.version = version;
	}

}
