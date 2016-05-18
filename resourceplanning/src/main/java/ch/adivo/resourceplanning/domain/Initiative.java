package ch.adivo.resourceplanning.domain;

import java.time.LocalDate;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Version;

import org.springframework.data.annotation.LastModifiedDate;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "type")
public abstract class Initiative implements BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	@Version
	private Long version;

	@LastModifiedDate
	private LocalDate lastModifiedDate;

	private String title;
	private String description;

	Initiative() {
	}

	public Initiative(final String title) {
		super();
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	@Override
	public Long getId() {
		return id;
	}

	@Override
	public LocalDate getLastModifiedDate() {
		return lastModifiedDate;
	}

	public String getTitle() {
		return title;
	}

	@Override
	public Long getVersion() {
		return version;
	}

	public void setDescription(final String description) {
		this.description = description;
	}

	@Override
	public void setLastModifiedDate(final LocalDate lastModifiedDate) {
		this.lastModifiedDate = lastModifiedDate;
	}

	public void setTitle(final String title) {
		this.title = title;
	}

	@Override
	public void setVersion(final Long version) {
		this.version = version;
	}

}
