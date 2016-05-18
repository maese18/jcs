package ch.adivo.resourceplanning.repositories;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;

import com.github.springtestdbunit.DbUnitTestExecutionListener;
import com.github.springtestdbunit.annotation.DatabaseSetup;

import ch.adivo.resourceplanning.ResourceplanningApplication;

@RunWith(SpringJUnit4ClassRunner.class)
// @ContextConfiguration(classes = { PersistenceContext.class })
@SpringApplicationConfiguration(classes = ResourceplanningApplication.class)
@TestExecutionListeners({ DependencyInjectionTestExecutionListener.class, TransactionalTestExecutionListener.class,
		DbUnitTestExecutionListener.class })
//@DatabaseSetup("EmployeeRepositoryTest.xml")
@ActiveProfiles("test")
public class EmployeeRepositoryTest {
	@Autowired
	private EmployeeRepository repository;

	@Test
	public void testFindAllSort() {
		// fail("Not yet implemented");
	}

	@Test
	public void testFindAllPageable() {
		// fail("Not yet implemented");
	}

	@Test
	public void testFindAll() {
		// fail("Not yet implemented");
	}

}
