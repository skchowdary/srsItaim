package com.itaim.application.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.itaim.application.domain.AddAsset;

@Repository
public interface AddAssetRepository extends JpaRepository<AddAsset, Integer> {

}
