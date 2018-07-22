import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

import { ServiceBase, ServiceResponse } from '@angularlicious/foundation';
import {
  LoggingServiceConfig,
  AngularliciousLoggingService
} from '@angularlicious/logging';
// import { RegisterSubscriberAction } from './actions/register-subscriber.action';
// import { Subscriber } from './../models/subscriber.model';
import { SecurityApiService } from './security-api.service';

@Injectable()
export class <%= name %>BusinessProviderService extends ServiceBase {
  constructor(
    loggingService: AngularliciousLoggingService,
    public <%= name%>yApiService: <%= name %>ApiService
  ) {
    super(loggingService);
  }

  // registerSubscriber(subscriber: Subscriber): Observable<ServiceResponse> {
  //   const action = new RegisterSubscriberAction(subscriber);
  //   action.Do(this);
  //   return action.response;
  // }
}
