import {Component, OnInit} from '@angular/core';
import {School} from "../school";
import {Field} from "../../field/field";
import {NgForm} from "@angular/forms";
import {SchoolService} from "../school.service";
import {ConfirmationService, MessageService} from "primeng/api";

@Component({
  selector: 'app-edit-students',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditSchoolsComponent implements OnInit{

  dialog: boolean = false;
  schools!: School[];

  school!: School;
  clonedSchools: { [s: string]: School } = {};

  selectAll = false


  constructor(private schoolService: SchoolService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {}

  ngOnInit() {
    this.getSchools()
  }

  closeDialog() {
    this.dialog = false
  }

  addNewSchool(addForm: NgForm) {

    this.schoolService.add(addForm.value).subscribe(
        () => {

          this.getSchools()

        }, error => {
          console.log(error);
        })
    this.dialog = false

  }

  openNew() {
    this.dialog = true
  }



  onRowEditInit(school: School) {
    this.clonedSchools[school.id.toString() as string] = { ...school };
  }

  onRowEditSave(school: School) {
    this.schoolService.update(school).subscribe(() => {
      this.getSchools()
    }, error => {
      console.log(error);
    })
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Company is updated' });

  }

  onRowEditCancel(school: School, index: number) {
    this.schools[index] = this.clonedSchools[school.id.toString() as string];
    delete this.clonedSchools[school.id.toString() as string];
  }

  getSchools() {
    this.schoolService.findAll().subscribe(data => {
      this.schools = data;
    });
  }






  deleteSchool(school: School) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + school.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.schoolService.delete(school.id).subscribe(
            () => {
              this.getSchools()
            }
        )

        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Company Deleted', life: 3000 });
      }
    });
  }



}

