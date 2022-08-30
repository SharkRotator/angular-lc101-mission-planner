import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  
  equipment: string[] = ["Habitat dome","Drones","Food containers","Oxygen tanks"];
  
  equipBeingEdited: string = "";
  
  edit(equipment:string){
   this.equipBeingEdited = equipment
  }

  save(equipment:string){
    this.equipment[this.equipment.indexOf(this.equipBeingEdited)] = equipment;
  }
  constructor() { }

  ngOnInit() {
  }

}
