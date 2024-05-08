package fr.pierrepac.emailService.services;

import fr.pierrepac.emailService.dtos.EmailDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service("emailService")
public class EmailService {

  @Autowired
  private JavaMailSender mailSender;

  public void sendSimpleMessage(EmailDto emailDto) {
    SimpleMailMessage message = new SimpleMailMessage();
    message.setFrom("pac.pierre@gmail.com");
    message.setTo("pac.pierre@gmail.com");
    message.setSubject(emailDto.getEmail());
    message.setText(emailDto.getMessage());
    mailSender.send(message);
  }
}
