/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ServiceBase } from '@angularlicious/foundation';
import { AngularliciousLoggingService, Severity } from '@angularlicious/logging';
import { SecurityBusinessProviderService } from './business/security-business-provider.service';
export class AngularliciousSecurityService extends ServiceBase {
    /**
     * @param {?} loggingService
     * @param {?} businessProvider
     */
    constructor(loggingService, businessProvider) {
        super(loggingService);
        this.businessProvider = businessProvider;
        this.serviceName = 'AngularliciousSecurityService';
        this.businessProvider.serviceContext = this.serviceContext;
        this.businessProvider.loggingService = this.loggingService;
    }
    /**
     * Use to register a new subscriber to the application.
     * @param {?} subscriber contains the user name and email address for the subscriber.
     * @return {?}
     */
    registerSubscriber(subscriber) {
        const /** @type {?} */ message = `Preparing to register subscriber: ${JSON.stringify(subscriber)}`;
        this.loggingService.log(this.serviceName, Severity.Information, message);
        return this.businessProvider.registerSubscriber(subscriber);
    }
    /**
     * @return {?}
     */
    verifyService() {
        if (this.loggingService &&
            this.businessProvider &&
            this.businessProvider.securityApiService)
            return true;
    }
}
AngularliciousSecurityService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
AngularliciousSecurityService.ctorParameters = () => [
    { type: AngularliciousLoggingService },
    { type: SecurityBusinessProviderService }
];
function AngularliciousSecurityService_tsickle_Closure_declarations() {
    /** @type {?} */
    AngularliciousSecurityService.prototype.businessProvider;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bhbmd1bGFybGljaW91cy9zZWN1cml0eS8iLCJzb3VyY2VzIjpbInNyYy9zZWN1cml0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxXQUFXLEVBQW1CLE1BQU0sNEJBQTRCLENBQUM7QUFDMUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2pGLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBUWhHLE1BQU0sb0NBQXFDLFNBQVEsV0FBVzs7Ozs7SUFDNUQsWUFDRSxjQUE0QyxFQUNwQztRQUVSLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUZkLHFCQUFnQixHQUFoQixnQkFBZ0I7UUFHeEIsSUFBSSxDQUFDLFdBQVcsR0FBRywrQkFBK0IsQ0FBQztRQUNuRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDM0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0tBQzVEOzs7Ozs7SUFNRCxrQkFBa0IsQ0FBQyxVQUFzQjtRQUN2Qyx1QkFBTSxPQUFPLEdBQUcscUNBQXFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUNsRixJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDekUsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUM3RDs7OztJQVdELGFBQWE7UUFDWCxFQUFFLENBQUMsQ0FDRCxJQUFJLENBQUMsY0FBYztZQUNuQixJQUFJLENBQUMsZ0JBQWdCO1lBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFDeEIsQ0FBQztZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7S0FDZjs7O1lBdENGLFVBQVU7Ozs7WUFSRiw0QkFBNEI7WUFDNUIsK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFNlcnZpY2VCYXNlLCBTZXJ2aWNlUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhcmxpY2lvdXMvZm91bmRhdGlvbic7XHJcbmltcG9ydCB7IEFuZ3VsYXJsaWNpb3VzTG9nZ2luZ1NlcnZpY2UsIFNldmVyaXR5IH0gZnJvbSAnQGFuZ3VsYXJsaWNpb3VzL2xvZ2dpbmcnO1xyXG5pbXBvcnQgeyBTZWN1cml0eUJ1c2luZXNzUHJvdmlkZXJTZXJ2aWNlIH0gZnJvbSAnLi9idXNpbmVzcy9zZWN1cml0eS1idXNpbmVzcy1wcm92aWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4vbW9kZWxzL3N1YnNjcmliZXIubW9kZWwnO1xyXG5cclxuLy8gaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJy4vbW9kZWxzL3N1YnNjcmliZXIubW9kZWwnO1xyXG4vLyBpbXBvcnQgeyBTdWJzY3JpYmVyQnVzaW5lc3NQcm92aWRlclNlcnZpY2UgfSBmcm9tICcuL2J1c2luZXNzL3N1YnNjcmliZXItYnVzaW5lc3MtcHJvdmlkZXIuc2VydmljZSc7XHJcbi8vIGltcG9ydCB7IENvbmZpcm1hdGlvblRva2VuIH0gZnJvbSAnLi9tb2RlbHMvY29uZmlybWF0aW9uLXRva2VuLm1vZGVsJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJsaWNpb3VzU2VjdXJpdHlTZXJ2aWNlIGV4dGVuZHMgU2VydmljZUJhc2Uge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgbG9nZ2luZ1NlcnZpY2U6IEFuZ3VsYXJsaWNpb3VzTG9nZ2luZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGJ1c2luZXNzUHJvdmlkZXI6IFNlY3VyaXR5QnVzaW5lc3NQcm92aWRlclNlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKGxvZ2dpbmdTZXJ2aWNlKTtcclxuICAgIHRoaXMuc2VydmljZU5hbWUgPSAnQW5ndWxhcmxpY2lvdXNTZWN1cml0eVNlcnZpY2UnO1xyXG4gICAgdGhpcy5idXNpbmVzc1Byb3ZpZGVyLnNlcnZpY2VDb250ZXh0ID0gdGhpcy5zZXJ2aWNlQ29udGV4dDtcclxuICAgIHRoaXMuYnVzaW5lc3NQcm92aWRlci5sb2dnaW5nU2VydmljZSA9IHRoaXMubG9nZ2luZ1NlcnZpY2U7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2UgdG8gcmVnaXN0ZXIgYSBuZXcgc3Vic2NyaWJlciB0byB0aGUgYXBwbGljYXRpb24uXHJcbiAgICogQHBhcmFtIHN1YnNjcmliZXIgY29udGFpbnMgdGhlIHVzZXIgbmFtZSBhbmQgZW1haWwgYWRkcmVzcyBmb3IgdGhlIHN1YnNjcmliZXIuXHJcbiAgICovXHJcbiAgcmVnaXN0ZXJTdWJzY3JpYmVyKHN1YnNjcmliZXI6IFN1YnNjcmliZXIpOiBPYnNlcnZhYmxlPFNlcnZpY2VSZXNwb25zZT4ge1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGBQcmVwYXJpbmcgdG8gcmVnaXN0ZXIgc3Vic2NyaWJlcjogJHtKU09OLnN0cmluZ2lmeShzdWJzY3JpYmVyKX1gO1xyXG4gICAgdGhpcy5sb2dnaW5nU2VydmljZS5sb2codGhpcy5zZXJ2aWNlTmFtZSwgU2V2ZXJpdHkuSW5mb3JtYXRpb24sIG1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIHRoaXMuYnVzaW5lc3NQcm92aWRlci5yZWdpc3RlclN1YnNjcmliZXIoc3Vic2NyaWJlcik7XHJcbiAgfVxyXG5cclxuICAvLyAvKipcclxuICAvLyAgKiBVc2UgdG8gY29uZmlybSBhIG5ldyBzdWJzY3JpYmVyLlxyXG4gIC8vICAqIEBwYXJhbSBjb25maXJtYXRpb25Ub2tlbiBjb250YWlucyB0aGUgdXNlciBuYW1lIGFuZCBhIFtIYXNoXSB2YWx1ZSB0aGF0IGlzIHVzZWQgdG8gY29uZmlybSB0aGUgdXNlci5cclxuICAvLyAgKi9cclxuICAvLyBjb25maXJtU3Vic2NyaWJlcihjb25maXJtYXRpb25Ub2tlbjogQ29uZmlybWF0aW9uVG9rZW4pIHtcclxuICAvLyAgIHRoaXMubG9nZ2luZ1NlcnZpY2UubG9nKHRoaXMuc2VydmljZU5hbWUsIFNldmVyaXR5LkluZm9ybWF0aW9uLCBgUHJlcGFyaW5nIHRvIGNvbmZpcm0gc3Vic2NyaWJlci5gKTtcclxuICAvLyAgIHJldHVybiB0aGlzLmJ1c2luZXNzUHJvdmlkZXIuY29uZmlybVN1YnNjcmliZXIoY29uZmlybWF0aW9uVG9rZW4pXHJcbiAgLy8gfVxyXG5cclxuICB2ZXJpZnlTZXJ2aWNlKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmxvZ2dpbmdTZXJ2aWNlICYmXHJcbiAgICAgIHRoaXMuYnVzaW5lc3NQcm92aWRlciAmJlxyXG4gICAgICB0aGlzLmJ1c2luZXNzUHJvdmlkZXIuc2VjdXJpdHlBcGlTZXJ2aWNlXHJcbiAgICApXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxufVxyXG4iXX0=