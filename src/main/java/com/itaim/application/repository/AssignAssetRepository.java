package com.itaim.application.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.itaim.application.domain.AssignAsset;

@Repository
public interface AssignAssetRepository extends JpaRepository<AssignAsset, Integer>
{

	 
}
