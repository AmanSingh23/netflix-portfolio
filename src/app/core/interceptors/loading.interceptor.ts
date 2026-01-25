import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private activeRequests = 0;

  constructor(private loadingService: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.activeRequests++;
    console.log('activeRequests', this.activeRequests);
    if (this.activeRequests === 1) {
      this.loadingService.show('Loading content...');
    }

    return next.handle(req).pipe(
      finalize(() => {
        this.activeRequests--;
        
        if (this.activeRequests === 0) {
          this.loadingService.hide();
        }
      })
    );
  }
}
