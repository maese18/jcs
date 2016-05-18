package ch.adivo.resourceplanning.repositories;

import org.springframework.data.repository.CrudRepository;

import ch.adivo.resourceplanning.domain.WeekAllocation;

public interface WeekAllocationRepository extends CrudRepository<WeekAllocation, Long> {

}
