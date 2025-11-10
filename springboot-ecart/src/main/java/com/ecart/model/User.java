package com.ecart.model;
import jakarta.persistence.*;
@Entity @Table(name = "users")
public class User {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String firstName;
  private String lastName;
  private String email;
  @Column(unique = true) private String username;
  private String password;
  public Long getId(){ return id; } public void setId(Long id){ this.id = id; }
  public String getFirstName(){ return firstName; } public void setFirstName(String f){ this.firstName = f; }
  public String getLastName(){ return lastName; } public void setLastName(String l){ this.lastName = l; }
  public String getEmail(){ return email; } public void setEmail(String e){ this.email = e; }
  public String getUsername(){ return username; } public void setUsername(String u){ this.username = u; }
  public String getPassword(){ return password; } public void setPassword(String p){ this.password = p; }
}