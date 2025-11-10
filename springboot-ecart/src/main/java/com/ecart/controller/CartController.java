package com.ecart.controller;
import com.ecart.model.CartItem;
import com.ecart.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController @RequestMapping("/api/cart") @CrossOrigin
public class CartController {
  @Autowired private CartService service;
  @PostMapping("/add") public ResponseEntity<?> add(@RequestBody CartItem i){ return ResponseEntity.ok(service.addItem(i)); }
  @GetMapping("/{username}") public ResponseEntity<List<CartItem>> get(@PathVariable String username){ return ResponseEntity.ok(service.getCartItems(username)); }
  @DeleteMapping("/remove/{id}") public ResponseEntity<?> remove(@PathVariable Long id){ service.removeItem(id); return ResponseEntity.ok("Removed"); }
}