import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  numVisible = 3;
  projects = [
    {
      title: 'Blue T-Shirt',
      technologies: '$29',
      Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate nequequas!",
      imageSrc: 'assets/images/projects/project_1.jpg'
    },{
      title: 'Green T-Shirt',
      technologies: '$29',
      Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate nequequas!",
      imageSrc: 'assets/images/projects/project_2.jpg'
    },{
      title: 'Yellow T-Shirt',
      technologies: '$29',
      Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate nequequas!",
      imageSrc: 'assets/images/projects/project_3.jpg'
    },{
      title: 'Black T-Shirt',
      technologies: '$29',
      Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate nequequas!",
      imageSrc: 'assets/images/projects/project_4.jpg'
    },{
      title: 'White T-Shirt',
      technologies: '$29',
      Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate nequequas!",
      imageSrc: 'assets/images/projects/project_5.jpg'
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
    } else if (width >= 700 && width < 1024) {
      this.numVisible = 2;
    } else if (width >=1024) {
      this.numVisible = 3;
    }
  }

}
