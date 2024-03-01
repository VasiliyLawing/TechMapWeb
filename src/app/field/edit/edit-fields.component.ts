// © 2024 Vasiliy Lawing
import {Component, OnInit} from '@angular/core';
import {Field} from "../field";
import {ConfirmationService, MessageService} from "primeng/api";
import {FieldService} from "../field.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-field-edit',
  templateUrl: './edit-fields.component.html',
  styleUrls: ['./edit-fields.component.scss']
})
export class EditFieldsComponent implements OnInit{
  dialog: boolean = false;

  fields!: Field[];
  field!: Field
  clonedFields: { [s: string]: Field } = {};
  cols = [
    { field: "name", header: "name" }]
  closeDialog() {
    this.dialog = false
  }

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private fieldService: FieldService) {}


  onRowEditInit(field: Field) {
     this.clonedFields[field.id.toString() as string] = { ...field };
  }
  openNew() {
    this.dialog = true
  }


  onRowEditSave(field: Field) {
    this.fieldService.update(field).subscribe(() => {
      this.getFields()
      this.messageService.add({ severity: 'success', summary: 'Updated Field', detail: `${field.name}` });

    });
    this.dialog = false


  }

  onRowEditCancel(field: Field, index: number) {
    this.fields[index] = this.clonedFields[field.id.toString() as string];
    delete this.clonedFields[field.id.toString() as string];
    this.messageService.add({ severity: 'error', summary: 'Canceled Update', detail: `${field.name}` });

    this.dialog = false
  }



  ngOnInit() {
    this.getFields()
  }

  getFields() {
    this.fieldService.findAll().subscribe(data => {
      this.fields = data;
    });
  }




  addNewField(addForm: NgForm) {

    this.fieldService.add(addForm.value).subscribe(
        () => {

          this.getFields()

        }, error => {
          console.log(error);
        })
    this.dialog = false
    this.messageService.add({ severity: 'success', summary: 'Field Added', detail: `${addForm.value.name}`});

  }




  deleteField(field: Field) {
    console.log("Clicked")
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + field.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.fieldService.remove(field.id).subscribe(
            () => {
              this.getFields()
            }
        )
        this.messageService.add({ severity: 'success', summary: 'Field Deleted', detail: `${field.name}`});
      }
    });
  }



}
