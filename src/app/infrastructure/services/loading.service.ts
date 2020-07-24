import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    private isLoadingSubject = new Subject<boolean>();
    isLoading$ = this.isLoadingSubject.asObservable();

    setLoading(loading: boolean){
        this.isLoadingSubject.next(loading);
    }
}