package ch.adivo.resourceplanning;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.orm.jpa.EntityScan;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;
import org.springframework.stereotype.Component;

@SpringBootApplication
@EntityScan(basePackageClasses = { ResourceplanningApplication.class, Jsr310JpaConverters.class })
public class ResourceplanningApplication {
	/**
	 * Called after application startup. Needs to be static if used as inner
	 * class and annotated with @Component
	 *
	 */
	@Component
	static class CommandLineRunnerImpl implements CommandLineRunner {
		@Autowired
		private ApplicationLoader applicationLoader;

		@Override
		public void run(final String... arg0) throws Exception {
			LOGGER.info("Application started, commandLineRunner initialized");
			applicationLoader.run();
		}
	}

	private static final Logger LOGGER = LoggerFactory.getLogger(ResourceplanningApplication.class);

	public static void main(final String[] args) {
		SpringApplication.run(ResourceplanningApplication.class, args);
	}
}
