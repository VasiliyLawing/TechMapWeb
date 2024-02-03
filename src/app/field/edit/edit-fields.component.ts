// © 2024 Vasiliy Lawing
import {Component, OnInit} from '@angular/core';
import {Field} from "../field";
import {ConfirmationService, MessageService} from "primeng/api";
import {FieldService} from "../field.service";

@Component({
  selector: 'app-field-edit',
  templateUrl: './edit-fields.component.html',
  styleUrls: ['./edit-fields.component.scss']
})
export class EditFieldsComponent implements OnInit{
  dialog: boolean = false;

  fields!: Field[];
  field!: Field
  clonedProducts: { [s: string]: Field } = {};

  closeDialog() {
    this.dialog = false
  }

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService,
              private fieldService: FieldService) {}


  onRowEditInit(field: Field) {
     this.clonedProducts[field.id.toString() as string] = { ...field };
  }
  openNew() {
    this.dialog = true
  }


  onRowEditSave(field: Field) {
    this.fieldService.update(field).subscribe(() => {
      this.getFields()
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product is updated' });

    });

  }

  onRowEditCancel(field: Field, index: number) {
    this.fields[index] = this.clonedProducts[field.id.toString() as string];
    delete this.clonedProducts[field.id.toString() as string];
  }



  ngOnInit() {
    this.getFields()
  }

  getFields() {
    this.fieldService.findAll().subscribe(data => {
      this.fields = data;
    });
  }




  addNewField(addForm: any) {

    this.fieldService.add(addForm.value).subscribe(
        () => {

          this.getFields()

        }, error => {
          console.log(error);
        })
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
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
      }
    });
  }



}
