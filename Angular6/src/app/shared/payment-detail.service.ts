import { PaymentDetail } from './payment-detail.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData: PaymentDetail;
  //readonly rootURL = 'http://localhost:59035/api';
  list : PaymentDetail[];

  constructor(private http: HttpClient) { }

  postPaymentDetail() {
    return this.http.post(environment.apiBaseUrl + '/PaymentDetail', this.formData);
  }
  putPaymentDetail() {
    return this.http.put(environment.apiBaseUrl+ '/PaymentDetail/'+ this.formData.PMId, this.formData);
  }
  deletePaymentDetail(id) {
    return this.http.delete(environment.apiBaseUrl+ '/PaymentDetail/'+ id);
  }

  refreshList(){
    this.http.get(environment.apiBaseUrl+ '/getPaymentDetail')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }
}
