import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../data.services';

@Injectable({
  providedIn: 'root'
})
export class DetailsGuard implements CanActivate {

  constructor(private router: Router, private dataService: DataService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const valid: boolean = this.dataService.isValidId(next.params.id);
      if(valid) return true;
      else{
        this.router.navigate(['404'], { skipLocationChange: true });
        return false;
      }
  }
}