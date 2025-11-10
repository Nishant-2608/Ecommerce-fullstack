package com.ecart.controller;
import com.ecart.model.User;
import com.ecart.model.LoginRequest;
import com.ecart.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController @RequestMapping("/api/auth") @CrossOrigin
public class AuthController {
  @Autowired private AuthService authService;
  @PostMapping("/register") public ResponseEntity<?> register(@RequestBody User u){ return authService.register(u); }
  @PostMapping("/login") public ResponseEntity<?> login(@RequestBody LoginRequest r){ return authService.login(r); }
}