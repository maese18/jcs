package ch.adivo.resourceplanning.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class EmployeeService {
	public Optional<String> get() {
		return Optional.of("foo");
	}
}
