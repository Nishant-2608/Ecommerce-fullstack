package com.ecart.service;
import com.ecart.model.User;
import com.ecart.model.LoginRequest;
import com.ecart.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.UUID;

@Service
public class AuthService {
  @Autowired private UserRepository userRepo;

  public ResponseEntity<?> register(User user) {
    if(userRepo.existsByUsername(user.getUsername()))
      return ResponseEntity.badRequest().body("Username already taken");
    userRepo.save(user);
    return ResponseEntity.ok("User registered");
  }

  public ResponseEntity<?> login(LoginRequest req) {
    User user = userRepo.findByUsernameAndPassword(req.getUsername(), req.getPassword());
    if(user == null) return ResponseEntity.status(401).body("Invalid credentials");
    String token = UUID.randomUUID().toString();
    return ResponseEntity.ok(java.util.Map.of("token", token));
  }
}