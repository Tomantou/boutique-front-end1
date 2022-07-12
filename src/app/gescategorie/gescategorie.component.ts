import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { CreatecategorieComponent } from 'src/app/createcategorie/createcategorie.component';

@Component({
  selector: 'app-gescategorie',
  templateUrl: './gescategorie.component.html',
  styleUrls: ['./gescategorie.component.css']
})
export class GescategorieComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(CreatecategorieComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {





    
  } 

}

/* @Component({
  selector: 'app-createcategorie',
  templateUrl: 'createcategorie.component.html',
  styleUrls: ['createcategorie.component.css']
})
export class CreatecategorieComponent {} */
