package com.ecart.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.net.URI;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@RestController
@RequestMapping("/api/products")
@CrossOrigin
public class ProductController {

    private final RestTemplate rest = new RestTemplate();
    private final ObjectMapper mapper = new ObjectMapper();

    @GetMapping
    public ResponseEntity<?> getProducts(@RequestParam(required = false) String category) {
        try {
            String baseUrl = "https://fakestoreapi.com/products";
            String url;

            if (category == null || category.isEmpty() || category.equalsIgnoreCase("all")) {
                url = baseUrl;
            } else {
                // Encode spaces as %20 for a valid path
                String encodedCategory = URLEncoder.encode(category, StandardCharsets.UTF_8)
                        .replace("+", "%20");
                url = baseUrl + "/category/" + encodedCategory;
            }

            System.out.println("🔍 Fetching from: " + url);

            // Build the request with explicit headers
            HttpHeaders headers = new HttpHeaders();
            headers.set(HttpHeaders.ACCEPT, MediaType.APPLICATION_JSON_VALUE);
            HttpEntity<Void> entity = new HttpEntity<>(headers);

            // ✅ Force a GET returning plain JSON text
            ResponseEntity<String> response = rest.exchange(
                    URI.create(url),
                    HttpMethod.GET,
                    entity,
                    String.class
            );

            if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
                // ✅ Convert JSON text into Object (so Spring returns proper JSON)
                Object json = mapper.readValue(response.getBody(), Object.class);
                return ResponseEntity.ok(json);
            } else {
                System.out.println("⚠️ Bad status: " + response.getStatusCode());
                return ResponseEntity.status(response.getStatusCode()).body("[]");
            }

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error fetching products: " + e.getMessage());
        }
    }
}
