import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http: HttpClient, private router: Router) {
  }

  // SERVICES WITHOUT SECURITY
  getREST(url) {
    return this.http.get(url);
  }

  postREST(url, data) {
    return this.http.post(url, data);
  }

  putREST(url, data) {
    return this.http.put(url, data);
  }

  deleteREST(url, id) {
    let idParam = '{' + id + '}';

    return this.http.delete(`${url}/${idParam}`);
  }

  deleteRESTData(url, option) {
    return this.http.delete(url,option);
  }

  getFileREST(url) {
    return this.http.get(url, { responseType: 'blob' });
  }

  postFileREST(url, data: File) {
    let formData: FormData = new FormData();
    formData.append('file', data);

    return this.http.post(url, formData, { responseType: 'text' });
  }
  // END SERVICES WITHOUT SECURITY
}
