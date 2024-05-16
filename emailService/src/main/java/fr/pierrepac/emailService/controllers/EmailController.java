package fr.pierrepac.emailService.controllers;


import fr.pierrepac.emailService.dtos.EmailDto;
import fr.pierrepac.emailService.services.EmailService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class EmailController {

  private final EmailService emailService;

  public EmailController(EmailService emailService) {
    this.emailService = emailService;
  }

  @GetMapping("/data")
  public ResponseEntity<String> getData() {
    return ResponseEntity.ok("Données du backend");
  }

  @PostMapping("/send-email")
  public ResponseEntity<Map<String, String>> sendSimpleEmail(@RequestBody EmailDto emailDto) {
    emailService.sendSimpleMessage(emailDto);
    Map<String, String> response = new HashMap<>();
    response.put("message", "Email envoyé avec succès");
    return new ResponseEntity<>(response, HttpStatus.OK);
  }

}
