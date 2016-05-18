package ch.adivo.resourceplanning.repositories;

import org.springframework.data.repository.CrudRepository;

import ch.adivo.resourceplanning.domain.Initiative;

public interface InitiativeRepository extends CrudRepository<Initiative, Long> {

}