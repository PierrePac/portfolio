package fr.pierrepac.emailService.controllers;


import fr.pierrepac.emailService.dtos.EmailDto;
import fr.pierrepac.emailService.services.EmailService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

  @PostMapping("/contact")
  public ResponseEntity<String> sendSimpleEmail(@RequestBody EmailDto emailDto) {
    emailService.sendSimpleMessage(emailDto);
    return ResponseEntity.ok("Données du backend");
  }

}
