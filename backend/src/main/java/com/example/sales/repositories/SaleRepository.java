package com.example.sales.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sales.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

}
