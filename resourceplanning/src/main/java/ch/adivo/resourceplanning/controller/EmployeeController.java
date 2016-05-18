package ch.adivo.resourceplanning.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import ch.adivo.resourceplanning.domain.Employee;
import ch.adivo.resourceplanning.repositories.EmployeeRepository;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

	@Autowired
	private EmployeeRepository repository;

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<Page<Employee>> getEmployees(Pageable pageable) {
		return new ResponseEntity<Page<Employee>>(repository.findAll(pageable), HttpStatus.OK);
	}

	public ResponseEntity<Employee> getEmployee(@PathVariable Long id) {
//		Optional<Employee> employee = repository.findById(id);
//		return new ResponseEntity<Employee>(employee.orElseThrow(() -> new UserNotFoundException(id)), HttpStatus.OK);
		return null;
	}

	@ResponseStatus(HttpStatus.NOT_FOUND)
	class UserNotFoundException extends RuntimeException {

		public UserNotFoundException(Long userId) {
			super("could not find user '" + userId + "'.");
		}
	}
}
