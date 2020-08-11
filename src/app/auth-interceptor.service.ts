import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class AuthIntercepterService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Intercepter is coming with request+!');
        const modifiredReq = req.clone({
            headers: req.headers.append('Auth', 'xyz')
        })
        return next.handle(modifiredReq).pipe(
            tap(event => {
                console.log("event: ", event);
                
            })
        );
        
    }

}