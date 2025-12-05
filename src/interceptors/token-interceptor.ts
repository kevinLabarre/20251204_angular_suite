import { HttpInterceptorFn } from '@angular/common/http';
import { delay } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  // req -> la requête interceptée
  // next -> fonction que l'on doit exécuter pour sortir de l'intercepteur

  console.log('interceptor !')

  // Pour rajouter du délai. Attention ! à n'utiliser que pour du test
  return next(req).pipe(
    delay(1500)
  );

  // return next(req)
};
