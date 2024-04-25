import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  

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
  ngOnInit(): void {
    
  }  

}
