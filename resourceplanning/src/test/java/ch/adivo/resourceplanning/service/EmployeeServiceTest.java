package ch.adivo.resourceplanning.service;

import java.util.Optional;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import junit.framework.Assert;

public class EmployeeServiceTest {
	@Autowired
	private EmployeeService service;

	@Test
	public void test() {
		final Optional<String> value = service.get();
		Assert.assertEquals("foo", value.orElse("default value"));
	}

}
