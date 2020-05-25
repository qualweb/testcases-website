import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-technique-info',
  templateUrl: './technique-info.component.html',
  styleUrls: ['./technique-info.component.css']
})
export class TechniqueInfoComponent implements OnInit {

  @Input('id') id: string;
  @Input('technique') technique: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.technique);
  }

}
