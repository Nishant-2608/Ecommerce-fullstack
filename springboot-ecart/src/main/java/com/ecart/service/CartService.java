package com.ecart.service;
import com.ecart.model.CartItem;
import com.ecart.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CartService {
  @Autowired private CartRepository repo;
  public CartItem addItem(CartItem item){ return repo.save(item); }
  public List<CartItem> getCartItems(String username){ return repo.findByUsername(username); }
  public void removeItem(Long id){ repo.deleteById(id); }
}