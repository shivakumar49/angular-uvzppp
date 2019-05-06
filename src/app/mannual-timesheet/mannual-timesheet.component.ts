import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-mannual-timesheet',
  templateUrl: './mannual-timesheet.component.html',
  styleUrls: ['./mannual-timesheet.component.css']
})
export class MannualTimesheetComponent {


  headers = [{
    name: 'Regular',
    isDisable: false
  }, {
    name: 'Overtime',
    isDisable: false
  }, {
    name: 'Vacation',
    isDisable: false
  }, {
    name: 'Sick',
    isDisable: false
  }, {
    name: 'Holiday',
    isDisable: false
  }, {
    name: 'Bonus',
    isDisable: false
  }];

  preparedHeaders: any = [];


  delete(index: any) {
    this.headers.splice(index, 1);
  }

  addNew() {
    this.headers.push({
      name: 'new item',
      isDisable: false
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.headers, event.previousIndex, event.currentIndex);
    this.prepareSelectedHeaders();
  }

  prepareSelectedHeaders() {

    this.preparedHeaders = [];
    this.headers.forEach((header) => {
      if (header.isDisable) {
        this.preparedHeaders.push(header);
      }
    });
    console.log('preparedHeaders -- ' + JSON.stringify(this.preparedHeaders));
  }

}
