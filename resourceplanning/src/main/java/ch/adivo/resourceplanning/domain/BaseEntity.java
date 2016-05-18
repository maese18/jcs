package ch.adivo.resourceplanning.domain;

import java.time.LocalDate;

public interface BaseEntity {
	public Long getId();

	public LocalDate getLastModifiedDate();

	public Long getVersion();

	public void setLastModifiedDate(LocalDate lastModifiedDate);

	public void setVersion(Long version);
}
