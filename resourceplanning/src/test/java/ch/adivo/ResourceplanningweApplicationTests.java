package ch.adivo;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import ch.adivo.resourceplanning.ResourceplanningApplication;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = ResourceplanningApplication.class)
@WebAppConfiguration
public class ResourceplanningweApplicationTests {

	@Test
	public void contextLoads() {
	}

}
