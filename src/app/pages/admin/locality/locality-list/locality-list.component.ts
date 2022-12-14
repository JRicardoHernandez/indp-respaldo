import { Component, OnInit } from '@angular/core';
import { NbToastrService, NbWindowControlButtonsConfig, NbWindowService} from '@nebular/theme';
import { BasePage } from '../../../../@core/shared/base-page';
import { LocalityService } from '../../../../@core/backend/common/services/locality.service';
import { LocalityDetailComponent } from '../locality-detail/locality-detail.component';
import {MatPaginatorIntl, PageEvent} from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { LocalityModel } from '../../../../@core/interfaces/auction/locality.model';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'ngx-locality-list',
  templateUrl: './locality-list.component.html',
  styleUrls: ['./locality-list.component.scss']
})
export class LocalityListComponent extends BasePage {

  constructor(private service: LocalityService, public toastrService: NbToastrService,
    private windowService: NbWindowService, private paginator: MatPaginatorIntl) {
    super(toastrService);
    this.paginator.itemsPerPageLabel = "Registros por página";
    this.searchForm = new FormGroup({
      text: new FormControl()
    });
    this.searchForm.controls['text'].valueChanges.subscribe((value:string)=>{
      if(value.length > 0){
        this.service.search(value).subscribe((rows:LocalityModel[])=>{
          this.length = rows.length;
          this.localitys = rows;
        })
      }else{
        this.readLocality()
      }
    })
  }

  searchForm:FormGroup;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [1, 5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent = {
    pageIndex:0,
    pageSize:10,
    length:100
  };

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  localitys: any;
  settings = {
    actions: {
      columnTitle: 'Acciones',
      add: true,
      edit: true,
      delete: false,
    },
    pager : {
      display : false,
    },      
    hideSubHeader: true,//oculta subheaader de filtro
    mode: 'external', // ventana externa
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      key: {
        title: 'Clave',
        type: 'number',
        //editable: false,
        // width: '25px'
      },
      entityKey: {
        title: 'Entidad',
        type: 'string',
        editable: true,
      },
      municipalityKey: {
        title: 'Municipio',
        type: 'string',
        editable: true,
      },
      localityName: {
        title: 'Nombre',
        type: 'string',
        editable: true,
      },
      userCreation: {
        title: 'Creado por',
        type: 'string',
      },
      userModification: {
        title: 'Modificado por',
        type: 'string',
      },
      version: {
        title: 'Version',
        type: 'number',
      }
    },
    noDataMessage: "No se encontrarón registros"
  };

  ngOnInit(): void {
    this.readLocality();
  }

  readLocality = (() => {
    this.localitys = null;
    this.service.list(this.pageEvent.pageIndex, this.pageEvent.pageSize).subscribe((localitys:any) =>  {
      this.localitys = localitys.data;
      this.length = localitys.count;
    }, 
    error => this.onLoadFailed('danger','Error conexión',error.message)
    );

  });

  changesPage (event){
    this.pageEvent = event;
    this.readLocality()
  }

  onDeleteConfirm(event): void {
    Swal.fire({
      title: 'Esta seguro de eliminar el registro?',
      text: "Esta acción no es revertible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText:'Cancelar',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete(event.data.name).subscribe(data =>{
          this.readLocality();
        },err =>{
          console.log(err);
        })
       
      }
    })
    
  }

  editRow(event) {
    const buttonsConfig: NbWindowControlButtonsConfig = {
      minimize: false,
      maximize: false,
      fullScreen: false,
    };
    const modalRef = this.windowService.open(LocalityDetailComponent, { title: `Editar localidad`, context: { locality: event.data }, buttons: buttonsConfig  }).onClose.subscribe(() => {
      this.readLocality();
    });
  
  }

  openWindowLocality() {
    const modalRef = this.windowService.open(LocalityDetailComponent, { title: `Nueva localidad` }).onClose.subscribe(() => {
      this.readLocality();
    });
    
  }

}