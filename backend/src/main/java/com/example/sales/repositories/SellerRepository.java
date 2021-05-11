package com.example.sales.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sales.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
