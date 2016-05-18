package ch.adivo.resourceplanning;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import ch.adivo.resourceplanning.domain.Employee;
import ch.adivo.resourceplanning.domain.Initiative;
import ch.adivo.resourceplanning.domain.Maintenance;
import ch.adivo.resourceplanning.domain.Project;
import ch.adivo.resourceplanning.domain.WeekAllocation;
import ch.adivo.resourceplanning.repositories.EmployeeRepository;
import ch.adivo.resourceplanning.repositories.InitiativeRepository;
import ch.adivo.resourceplanning.repositories.WeekAllocationRepository;

@Component
public class ApplicationLoader {
	private static final Logger LOGGER = LoggerFactory.getLogger(ApplicationLoader.class);

	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private InitiativeRepository initiativeRepository;
	@Autowired
	private WeekAllocationRepository weekAllocationRepository;

	private void createEmployeeAllocations() {
		final Initiative project1 = initiativeRepository.findOne(1L);
		initiativeRepository.save(project1);

		final Maintenance maint1 = new Maintenance("Application A");
		initiativeRepository.save(maint1);
		final Employee employee = employeeRepository.findOne(10L);
		final DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd.MM.yyyy");
		final LocalDate week = LocalDate.parse("11.04.2016", dtf);
		WeekAllocation alloc = new WeekAllocation(LocalDate.parse("11.04.2016", dtf), (short) 20, project1, employee);
		weekAllocationRepository.save(alloc);

		alloc = new WeekAllocation(LocalDate.parse("18.04.2016", dtf), (short) 10, project1, employee);
		weekAllocationRepository.save(alloc);
		alloc = new WeekAllocation(LocalDate.parse("25.04.2016", dtf), (short) 30, project1, employee);
		weekAllocationRepository.save(alloc);

		LOGGER.info("Stored some initial allocations");
	}

	private void createEmployees() {
		for (int i = 0; i < 100; i++) {
			employeeRepository.save(new Employee("user" + i, "Firstname " + i, "Lastname " + i));
		}
		LOGGER.info("Stored 100 employees");
	}

	private void createInitiatives() {
		final Project project1 = new Project("Project A");
		initiativeRepository.save(project1);
		final Maintenance maint1 = new Maintenance("Application A");
		initiativeRepository.save(maint1);

		LOGGER.info("Stored Initiatives ");
	}

	public void run() throws Exception {
		createEmployees();
		createInitiatives();
		createEmployeeAllocations();
	}

}
