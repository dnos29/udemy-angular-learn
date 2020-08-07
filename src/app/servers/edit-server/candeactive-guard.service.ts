import { ActivatedRoute, ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactiveGuard {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactiveGuard>{
  canDeactivate(component: CanComponentDeactiveGuard,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot,
    ) : Observable<boolean> | Promise<boolean> | boolean {
      return component.canDeactivate();
    }
}
