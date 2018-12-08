import { Component, OnInit } from '@angular/core';
import { ComponentBase, ErrorResponse } from '@angularlicious/foundation';
import { AngularliciousLoggingService, Severity } from '@angularlicious/logging';
import { Router } from '@angular/router';
import { HttpErrorService } from '../../modules/cross-cutting/http-error.service';
import { ApiResponse, ErrorApiResponse } from '@angularlicious/http-service';

@Component({
  selector: 'error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent extends ComponentBase implements OnInit {

  constructor(
    loggingService: AngularliciousLoggingService,
    router: Router,
    private httpErrorService: HttpErrorService
  ) {
    super('ErrorHandlingComponent', loggingService, router);
   }

  ngOnInit() {
  }

  createError() {
    this.loggingService.log(this.componentName, Severity.Information, ``, ['cross-cutting-concerns', 'general-error', 'component'])
    throw new Error(`A general error from just clicking a button.`)
  }

  createAppError() {
    this.loggingService.log(this.componentName, Severity.Information, ``, ['cross-cutting-concerns', 'application-error', 'component'])
    
    const errorResponse = this.createErrorResponse(`An application error was generated by the user.`)
    this.handleServiceErrors(errorResponse);
  }

  createHttpError() {
    this.loggingService.log(this.componentName, Severity.Information, ``, ['cross-cutting-concerns', 'http-error', 'component'])
    this.httpErrorService.createHttpError(this.componentName).subscribe(
      response => this.handleCreateHttpError(response),
      error => this.handleServiceErrors(error),
      () => this.finishRequest(`Finished request for creating an HTTP error.`)
    )
  }

  createHttpApiError() {
    this.loggingService.log(this.componentName, Severity.Information, ``, ['cross-cutting-concerns', 'http-error', 'component'])
    this.httpErrorService.createHttpApiError(this.componentName).subscribe(
      response => this.handleCreateHttpError(response),
      error => this.handleServiceErrors(error),
      () => this.finishRequest(`Finished request for creating an HTTP error.`)
    )
  }

  private handleCreateHttpError(response: ApiResponse<string>) {
    if(response) {
      if(!response.IsSuccess) {
        this.handleServiceErrors(null, this.httpErrorService.serviceContext)
      } 
    }
  }
}