import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { DataSource } from 'ng2-smart-table/lib/lib/data-source/data-source';
import { CatalogApi } from '../api/catalog-api'; 

import { RegionalDelegationInterface } from '../../../interfaces/auction/regional-delegation.model';

@Injectable()
export class RegionalDelegationService {
  
  constructor( private api: CatalogApi ) { }

  url = "regional-delegation";
  
  get gridDataSource(): DataSource {
    return this.api.dataSource;
  }
    
  list(pageNumber: number = 1, pageSize: number = 10) {
    const data = this.api.list( pageNumber, pageSize, this.url );
    return data;
  }

  register( data: RegionalDelegationInterface ): Observable<RegionalDelegationInterface>{
    return this.api.register( data, this.url );
  }

  update(id:number, data: RegionalDelegationInterface): Observable<RegionalDelegationInterface>{
    return this.api.update( id, data, this.url );
  }

  delete(id:number){
    return this.api.delete( id, this.url );
  }
}