import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private loadingMessageSubject = new BehaviorSubject<string>('Loading...');
  private loadingProgressSubject = new BehaviorSubject<number>(0);

  get isLoading$(): Observable<boolean> {
    return this.loadingSubject.asObservable();
  }

  get loadingMessage$(): Observable<string> {
    return this.loadingMessageSubject.asObservable();
  }

  get loadingProgress$(): Observable<number> {
    return this.loadingProgressSubject.asObservable();
  }

  get isLoading(): boolean {
    return this.loadingSubject.value;
  }

  get loadingMessage(): string {
    return this.loadingMessageSubject.value;
  }

  get loadingProgress(): number {
    return this.loadingProgressSubject.value;
  }

  show(message: string = 'Loading...'): void {
    this.loadingMessageSubject.next(message);
    this.loadingSubject.next(true);
    this.loadingProgressSubject.next(0);
  }

  hide(): void {
    this.loadingSubject.next(false);
    this.loadingProgressSubject.next(100);
  }

  updateProgress(progress: number): void {
    this.loadingProgressSubject.next(Math.min(100, Math.max(0, progress)));
  }

  updateMessage(message: string): void {
    this.loadingMessageSubject.next(message);
  }

  simulateLoading(duration: number = 2000, message: string = 'Loading...'): Promise<void> {
    return new Promise((resolve) => {
      this.show(message);
      
      const startTime = Date.now();
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(100, (elapsed / duration) * 100);
        
        this.updateProgress(progress);
        
        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            this.hide();
            resolve();
          }, 200);
        }
      }, 50);
    });
  }
}
