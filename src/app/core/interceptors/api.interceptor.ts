import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http'
import { ErrorMessage } from '@core/models'
import { catchError, throwError } from 'rxjs'

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
	return next(req).pipe(
		catchError((err: HttpErrorResponse) => {
			console.error('Logging Api Error:', err)
			const errorMessage = err.error as ErrorMessage
			const message =
				errorMessage?.message ||
				`An error occurred while communicating with the server. Please try again later.`
			return throwError(() => message)
		})
	)
}
