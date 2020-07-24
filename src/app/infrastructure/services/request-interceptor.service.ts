import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoadingService } from './loading.service';

@Injectable({
    providedIn: 'root'
})
export class RequestInterceptor implements HttpInterceptor {
    
    constructor(private loadingService: LoadingService){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        this.loadingService.setLoading(true);

        // TODO: get token and pass it to the cloned request - authorization policy is not implemented for now
        const authReq = req.clone();

        return next.handle(authReq).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                this.loadingService.setLoading(false);
            }
        }, (err: any) => {
            this.loadingService.setLoading(false);

            if (err instanceof HttpErrorResponse) {

                // TODO: if err status is 401 then redirect to login page - authorization policy is not implemented for now
                // TODO: else throw error 

                return throwError(err);
            }
        }));
    }
}