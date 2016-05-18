package ch.adivo.resourceplanning.repositories;

import java.util.Optional;

import org.springframework.data.repository.PagingAndSortingRepository;

import ch.adivo.resourceplanning.domain.Employee;

public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long>{
	Optional<Employee> findByUserName(String userName);
//	Optional<Employee> findById(Long id);
}
