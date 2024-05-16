package fr.pierrepac.emailService.services;

import fr.pierrepac.emailService.dtos.EmailDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service("emailService")
@Configuration
public class EmailService {

  @Autowired
  private JavaMailSender mailSender;

  public void sendSimpleMessage(EmailDto emailDto) {
    SimpleMailMessage message = new SimpleMailMessage();
    message.setFrom("pac.pierre@gmail.com");
    message.setTo("pac.pierre@gmail.com");
    message.setSubject("Nouveau message de : " + emailDto.getEmail());
    String emailBody = "Nom: " + emailDto.getName() + "\n" +
      "Email: " + emailDto.getEmail() + "\n" +
      "Société: " + emailDto.getCompany() + "\n" +
      "Téléphone: " + emailDto.getPhone() + "\n" +
      "Message: " + emailDto.getMessage();

    message.setText(emailBody);
    mailSender.send(message);
  }
}
