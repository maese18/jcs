# Intro
## Application features
### Configuration
yml or application.properties file in src/main/resources is picked up automatically

If h2 in memory db is configured like that:
spring.datasource.url=jdbc:h2:mem:AZ;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE
spring.datasource.driverClassName=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.jpa.database-platform=org.hibernate.dialect.H2Dialect

spring makes h2-console available at http://localhost:8080/h2-console
use **jdbc:h2:mem:AZ** as JDBC URL


Configuration for test see
http://stackoverflow.com/questions/28007686/how-can-i-provide-different-database-configurations-with-spring-boot