package com.ecart.model;
import jakarta.persistence.*;
@Entity @Table(name="cart_items")
public class CartItem {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String username;
  private Long productId;
  private String title;
  private Double price;
  private String image;
  private Integer quantity;
  public Long getId(){ return id; } public void setId(Long id){ this.id = id; }
  public String getUsername(){ return username; } public void setUsername(String u){ this.username = u; }
  public Long getProductId(){ return productId; } public void setProductId(Long p){ this.productId = p; }
  public String getTitle(){ return title; } public void setTitle(String t){ this.title = t; }
  public Double getPrice(){ return price; } public void setPrice(Double p){ this.price = p; }
  public String getImage(){ return image; } public void setImage(String i){ this.image = i; }
  public Integer getQuantity(){ return quantity; } public void setQuantity(Integer q){ this.quantity = q; }
}