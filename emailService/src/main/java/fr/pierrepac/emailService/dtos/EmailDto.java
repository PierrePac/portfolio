package fr.pierrepac.emailService.dtos;


public class EmailDto {
  private String name;
  private String email;
  private String message;
  private String phone;
  private String company;

  public EmailDto(String name, String email, String message, String phone, String company) {
    this.name = name;
    this.email = email;
    this.message = message;
    this.phone = phone;
    this.company = company;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getCompany() {
    return company;
  }

  public void setCompany(String company) {
    this.company = company;
  }
}
