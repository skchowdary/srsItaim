package com.itaim.application.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.itaim.application.domain.AddAssests;

@Repository
public interface AddAssestsRepository extends JpaRepository<AddAssests,Integer>
{

}
