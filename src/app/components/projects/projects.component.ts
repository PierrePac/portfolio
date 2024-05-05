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
      title: 'Blue T-Shirt',
      technologies: '$29',
      Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate nequequas!",
      imageSrc: this.project1
    },{
      title: 'Green T-Shirt',
      technologies: '$29',
      Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate nequequas!",
      imageSrc: this.project2
    },{
      title: 'Yellow T-Shirt',
      technologies: '$29',
      Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate nequequas!",
      imageSrc: this.project3
    },{
      title: 'Black T-Shirt',
      technologies: '$29',
      Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate nequequas!",
      imageSrc: this.project4
    },{
      title: 'White T-Shirt',
      technologies: '$29',
      Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate nequequas!",
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
