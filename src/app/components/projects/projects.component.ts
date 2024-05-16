import { Component, HostListener, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  numVisible = 3;
  bandeau2 = environment.bandeau_2;
  project1 = environment.project_1;
  project2 = environment.project_2;
  project3 = environment.project_3;
  project4 = environment.project_4;
  project5 = environment.project_5;
  projects = [
    {
      title: 'Portfolio',
      technologies: 'Java / Angular',
      date: '2024',
      gitLink: 'https://github.com/PierrePac/portfolio',
      Description: "Développé avec Spring Boot (Java) et Angular (TypeScript). Il intègre les librairies Bootstrap et PrimeNG, assurant un design responsive qui s'adapte à tous les écrans, pour une navigation optimale.",
      imageSrc: this.project1
    },{
      title: 'MiPhi',
      technologies: 'Java / Angular',
      date: '2023',
      gitLink: 'https://github.com/PierrePac/miphi',
      Description: "Développement d'un site web utilisant Bootstrap (Java) et Angular (TypeScript) dédié à la gestion de campagnes de recrutement et au suivi des candidats. Ce projet inclut la création et la gestion de questionnaires à choix multiples (QCM) destinés à évaluer les compétences des candidats.",
      imageSrc: this.project2
    },{
      title: 'E-commerce website',
      technologies: 'Symfony',
      date: '2023',
      gitLink: 'https://github.com/PierrePac/amorce.org',
      Description: "Réalisation d\'un site e-commerce durant ma formation de concepteur développeur d\'applications, utilisant PHP et le framework Symfony. Ce projet met en œuvre des solutions techniques avancées pour une gestion efficace des transactions en ligne et une expérience utilisateur fluide.",
      imageSrc: this.project3
    },{
      title: 'Application mobile',
      technologies: 'android studio',
      date: '2023',
      gitLink: 'https://github.com/PierrePac/AndroidStudio',
      Description: "Création d'une application mobile dans le cadre de ma formation de concepteur développeur d'application, en utilisant Android Studio. Ce projet met en avant mes compétences en développement mobile, offrant une interface intuitive et des fonctionnalités performantes adaptées aux besoins des utilisateurs modernes.",
      imageSrc: this.project4
    },{
      title: 'Etoile secours',
      technologies: 'PHP',
      date: '2022',
      gitLink: 'https://github.com/JM-LA/SitesAmbulances',
      Description: "Développement d'une API en PHP procédural, conçue pour la gestion de sites d'ambulances et la prise de rendez-vous. Cette solution optimise la gestion des comptes clients et améliore la coordination des services d'urgence, en assurant une gestion efficace et réactive des demandes critiques.",
      imageSrc: this.project5
    }
  ];

  constructor() {
    this.updateNumVisible(window.innerWidth)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number; }; }) {
    this.updateNumVisible(event.target.innerWidth);
  }
  ngOnInit(): void {
    
  }
  
  updateNumVisible(width: number) {
    if (width < 700) {
      this.numVisible = 1;
    } else if (width >= 700 && width < 1440) {
      this.numVisible = 2;
    } else if (width >=1440) {
      this.numVisible = 3;
    }
  }

}
