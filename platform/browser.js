'use strict';"use strict";
var angular_entrypoint_1 = require('angular2/src/core/angular_entrypoint');
exports.AngularEntrypoint = angular_entrypoint_1.AngularEntrypoint;
var browser_common_1 = require('angular2/src/platform/browser_common');
exports.BROWSER_PROVIDERS = browser_common_1.BROWSER_PROVIDERS;
exports.CACHED_TEMPLATE_PROVIDER = browser_common_1.CACHED_TEMPLATE_PROVIDER;
exports.ELEMENT_PROBE_PROVIDERS = browser_common_1.ELEMENT_PROBE_PROVIDERS;
exports.ELEMENT_PROBE_PROVIDERS_PROD_MODE = browser_common_1.ELEMENT_PROBE_PROVIDERS_PROD_MODE;
exports.inspectNativeElement = browser_common_1.inspectNativeElement;
exports.BrowserDomAdapter = browser_common_1.BrowserDomAdapter;
exports.By = browser_common_1.By;
exports.Title = browser_common_1.Title;
exports.DOCUMENT = browser_common_1.DOCUMENT;
exports.enableDebugTools = browser_common_1.enableDebugTools;
exports.disableDebugTools = browser_common_1.disableDebugTools;
var lang_1 = require('angular2/src/facade/lang');
var browser_common_2 = require('angular2/src/platform/browser_common');
var compiler_1 = require('angular2/compiler');
var core_1 = require('angular2/core');
var reflection_capabilities_1 = require('angular2/src/core/reflection/reflection_capabilities');
var xhr_impl_1 = require("angular2/src/platform/browser/xhr_impl");
var compiler_2 = require('angular2/compiler');
var di_1 = require('angular2/src/core/di');
/**
 * An array of providers that should be passed into `application()` when bootstrapping a component.
 */
exports.BROWSER_APP_PROVIDERS = lang_1.CONST_EXPR([
    browser_common_2.BROWSER_APP_COMMON_PROVIDERS,
    compiler_1.COMPILER_PROVIDERS,
    new di_1.Provider(compiler_2.XHR, { useClass: xhr_impl_1.XHRImpl }),
]);
function browserPlatform() {
    if (lang_1.isBlank(core_1.getPlatform())) {
        core_1.createPlatform(core_1.ReflectiveInjector.resolveAndCreate(browser_common_2.BROWSER_PROVIDERS));
    }
    return core_1.assertPlatform(browser_common_2.BROWSER_PLATFORM_MARKER);
}
exports.browserPlatform = browserPlatform;
/**
 * Bootstrapping for Angular applications.
 *
 * You instantiate an Angular application by explicitly specifying a component to use
 * as the root component for your application via the `bootstrap()` method.
 *
 * ## Simple Example
 *
 * Assuming this `index.html`:
 *
 * ```html
 * <html>
 *   <!-- load Angular script tags here. -->
 *   <body>
 *     <my-app>loading...</my-app>
 *   </body>
 * </html>
 * ```
 *
 * An application is bootstrapped inside an existing browser DOM, typically `index.html`.
 * Unlike Angular 1, Angular 2 does not compile/process providers in `index.html`. This is
 * mainly for security reasons, as well as architectural changes in Angular 2. This means
 * that `index.html` can safely be processed using server-side technologies such as
 * providers. Bindings can thus use double-curly `{{ syntax }}` without collision from
 * Angular 2 component double-curly `{{ syntax }}`.
 *
 * We can use this script code:
 *
 * {@example core/ts/bootstrap/bootstrap.ts region='bootstrap'}
 *
 * When the app developer invokes `bootstrap()` with the root component `MyApp` as its
 * argument, Angular performs the following tasks:
 *
 *  1. It uses the component's `selector` property to locate the DOM element which needs
 *     to be upgraded into the angular component.
 *  2. It creates a new child injector (from the platform injector). Optionally, you can
 *     also override the injector configuration for an app by invoking `bootstrap` with the
 *     `componentInjectableBindings` argument.
 *  3. It creates a new `Zone` and connects it to the angular application's change detection
 *     domain instance.
 *  4. It creates an emulated or shadow DOM on the selected component's host element and loads the
 *     template into it.
 *  5. It instantiates the specified component.
 *  6. Finally, Angular performs change detection to apply the initial data providers for the
 *     application.
 *
 *
 * ## Bootstrapping Multiple Applications
 *
 * When working within a browser window, there are many singleton resources: cookies, title,
 * location, and others. Angular services that represent these resources must likewise be
 * shared across all Angular applications that occupy the same browser window. For this
 * reason, Angular creates exactly one global platform object which stores all shared
 * services, and each angular application injector has the platform injector as its parent.
 *
 * Each application has its own private injector as well. When there are multiple
 * applications on a page, Angular treats each application injector's services as private
 * to that application.
 *
 * ## API
 *
 * - `appComponentType`: The root component which should act as the application. This is
 *   a reference to a `Type` which is annotated with `@Component(...)`.
 * - `customProviders`: An additional set of providers that can be added to the
 *   app injector to override default injection behavior.
 *
 * Returns a `Promise` of {@link ComponentRef}.
 */
function bootstrap(appComponentType, customProviders) {
    core_1.reflector.reflectionCapabilities = new reflection_capabilities_1.ReflectionCapabilities();
    var appInjector = core_1.ReflectiveInjector.resolveAndCreate([exports.BROWSER_APP_PROVIDERS, lang_1.isPresent(customProviders) ? customProviders : []], browserPlatform().injector);
    return core_1.coreLoadAndBootstrap(appInjector, appComponentType);
}
exports.bootstrap = bootstrap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtVnJWYXY4UUwudG1wL2FuZ3VsYXIyL3BsYXRmb3JtL2Jyb3dzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1DQUFnQyxzQ0FBc0MsQ0FBQztBQUEvRCxtRUFBK0Q7QUFDdkUsK0JBWU8sc0NBQXNDLENBQUM7QUFYNUMsK0RBQWlCO0FBQ2pCLDZFQUF3QjtBQUN4QiwyRUFBdUI7QUFDdkIsK0ZBQWlDO0FBQ2pDLHFFQUFvQjtBQUNwQiwrREFBaUI7QUFDakIsaUNBQUU7QUFDRix1Q0FBSztBQUNMLDZDQUFRO0FBQ1IsNkRBQWdCO0FBQ2hCLCtEQUM0QztBQUU5QyxxQkFBbUQsMEJBQTBCLENBQUMsQ0FBQTtBQUM5RSwrQkFJTyxzQ0FBc0MsQ0FBQyxDQUFBO0FBQzlDLHlCQUFpQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQ3JELHFCQVVPLGVBQWUsQ0FBQyxDQUFBO0FBQ3ZCLHdDQUFxQyxzREFBc0QsQ0FBQyxDQUFBO0FBQzVGLHlCQUFzQix3Q0FBd0MsQ0FBQyxDQUFBO0FBQy9ELHlCQUFrQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ3RDLG1CQUF1QixzQkFBc0IsQ0FBQyxDQUFBO0FBRTlDOztHQUVHO0FBQ1UsNkJBQXFCLEdBQTJDLGlCQUFVLENBQUM7SUFDdEYsNkNBQTRCO0lBQzVCLDZCQUFrQjtJQUNsQixJQUFJLGFBQVEsQ0FBQyxjQUFHLEVBQUUsRUFBQyxRQUFRLEVBQUUsa0JBQU8sRUFBQyxDQUFDO0NBQ3ZDLENBQUMsQ0FBQztBQUVIO0lBQ0UsRUFBRSxDQUFDLENBQUMsY0FBTyxDQUFDLGtCQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQixxQkFBYyxDQUFDLHlCQUFrQixDQUFDLGdCQUFnQixDQUFDLGtDQUFpQixDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBQ0QsTUFBTSxDQUFDLHFCQUFjLENBQUMsd0NBQXVCLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBTGUsdUJBQWUsa0JBSzlCLENBQUE7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1FRztBQUNILG1CQUNJLGdCQUFzQixFQUN0QixlQUF3RDtJQUMxRCxnQkFBUyxDQUFDLHNCQUFzQixHQUFHLElBQUksZ0RBQXNCLEVBQUUsQ0FBQztJQUNoRSxJQUFJLFdBQVcsR0FBRyx5QkFBa0IsQ0FBQyxnQkFBZ0IsQ0FDakQsQ0FBQyw2QkFBcUIsRUFBRSxnQkFBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLGVBQWUsR0FBRyxFQUFFLENBQUMsRUFDMUUsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsTUFBTSxDQUFDLDJCQUFvQixDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzdELENBQUM7QUFSZSxpQkFBUyxZQVF4QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHtBbmd1bGFyRW50cnlwb2ludH0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvYW5ndWxhcl9lbnRyeXBvaW50JztcbmV4cG9ydCB7XG4gIEJST1dTRVJfUFJPVklERVJTLFxuICBDQUNIRURfVEVNUExBVEVfUFJPVklERVIsXG4gIEVMRU1FTlRfUFJPQkVfUFJPVklERVJTLFxuICBFTEVNRU5UX1BST0JFX1BST1ZJREVSU19QUk9EX01PREUsXG4gIGluc3BlY3ROYXRpdmVFbGVtZW50LFxuICBCcm93c2VyRG9tQWRhcHRlcixcbiAgQnksXG4gIFRpdGxlLFxuICBET0NVTUVOVCxcbiAgZW5hYmxlRGVidWdUb29scyxcbiAgZGlzYWJsZURlYnVnVG9vbHNcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2Jyb3dzZXJfY29tbW9uJztcblxuaW1wb3J0IHtUeXBlLCBpc1ByZXNlbnQsIGlzQmxhbmssIENPTlNUX0VYUFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge1xuICBCUk9XU0VSX1BST1ZJREVSUyxcbiAgQlJPV1NFUl9BUFBfQ09NTU9OX1BST1ZJREVSUyxcbiAgQlJPV1NFUl9QTEFURk9STV9NQVJLRVJcbn0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2Jyb3dzZXJfY29tbW9uJztcbmltcG9ydCB7Q09NUElMRVJfUFJPVklERVJTfSBmcm9tICdhbmd1bGFyMi9jb21waWxlcic7XG5pbXBvcnQge1xuICBDb21wb25lbnRSZWYsXG4gIGNvcmVMb2FkQW5kQm9vdHN0cmFwLFxuICByZWZsZWN0b3IsXG4gIFJlZmxlY3RpdmVJbmplY3RvcixcbiAgUGxhdGZvcm1SZWYsXG4gIE9wYXF1ZVRva2VuLFxuICBnZXRQbGF0Zm9ybSxcbiAgY3JlYXRlUGxhdGZvcm0sXG4gIGFzc2VydFBsYXRmb3JtXG59IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtSZWZsZWN0aW9uQ2FwYWJpbGl0aWVzfSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9yZWZsZWN0aW9uL3JlZmxlY3Rpb25fY2FwYWJpbGl0aWVzJztcbmltcG9ydCB7WEhSSW1wbH0gZnJvbSBcImFuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9icm93c2VyL3hocl9pbXBsXCI7XG5pbXBvcnQge1hIUn0gZnJvbSAnYW5ndWxhcjIvY29tcGlsZXInO1xuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvZGknO1xuXG4vKipcbiAqIEFuIGFycmF5IG9mIHByb3ZpZGVycyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgaW50byBgYXBwbGljYXRpb24oKWAgd2hlbiBib290c3RyYXBwaW5nIGEgY29tcG9uZW50LlxuICovXG5leHBvcnQgY29uc3QgQlJPV1NFUl9BUFBfUFJPVklERVJTOiBBcnJheTxhbnkgLypUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXSovPiA9IENPTlNUX0VYUFIoW1xuICBCUk9XU0VSX0FQUF9DT01NT05fUFJPVklERVJTLFxuICBDT01QSUxFUl9QUk9WSURFUlMsXG4gIG5ldyBQcm92aWRlcihYSFIsIHt1c2VDbGFzczogWEhSSW1wbH0pLFxuXSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBicm93c2VyUGxhdGZvcm0oKTogUGxhdGZvcm1SZWYge1xuICBpZiAoaXNCbGFuayhnZXRQbGF0Zm9ybSgpKSkge1xuICAgIGNyZWF0ZVBsYXRmb3JtKFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlQW5kQ3JlYXRlKEJST1dTRVJfUFJPVklERVJTKSk7XG4gIH1cbiAgcmV0dXJuIGFzc2VydFBsYXRmb3JtKEJST1dTRVJfUExBVEZPUk1fTUFSS0VSKTtcbn1cblxuLyoqXG4gKiBCb290c3RyYXBwaW5nIGZvciBBbmd1bGFyIGFwcGxpY2F0aW9ucy5cbiAqXG4gKiBZb3UgaW5zdGFudGlhdGUgYW4gQW5ndWxhciBhcHBsaWNhdGlvbiBieSBleHBsaWNpdGx5IHNwZWNpZnlpbmcgYSBjb21wb25lbnQgdG8gdXNlXG4gKiBhcyB0aGUgcm9vdCBjb21wb25lbnQgZm9yIHlvdXIgYXBwbGljYXRpb24gdmlhIHRoZSBgYm9vdHN0cmFwKClgIG1ldGhvZC5cbiAqXG4gKiAjIyBTaW1wbGUgRXhhbXBsZVxuICpcbiAqIEFzc3VtaW5nIHRoaXMgYGluZGV4Lmh0bWxgOlxuICpcbiAqIGBgYGh0bWxcbiAqIDxodG1sPlxuICogICA8IS0tIGxvYWQgQW5ndWxhciBzY3JpcHQgdGFncyBoZXJlLiAtLT5cbiAqICAgPGJvZHk+XG4gKiAgICAgPG15LWFwcD5sb2FkaW5nLi4uPC9teS1hcHA+XG4gKiAgIDwvYm9keT5cbiAqIDwvaHRtbD5cbiAqIGBgYFxuICpcbiAqIEFuIGFwcGxpY2F0aW9uIGlzIGJvb3RzdHJhcHBlZCBpbnNpZGUgYW4gZXhpc3RpbmcgYnJvd3NlciBET00sIHR5cGljYWxseSBgaW5kZXguaHRtbGAuXG4gKiBVbmxpa2UgQW5ndWxhciAxLCBBbmd1bGFyIDIgZG9lcyBub3QgY29tcGlsZS9wcm9jZXNzIHByb3ZpZGVycyBpbiBgaW5kZXguaHRtbGAuIFRoaXMgaXNcbiAqIG1haW5seSBmb3Igc2VjdXJpdHkgcmVhc29ucywgYXMgd2VsbCBhcyBhcmNoaXRlY3R1cmFsIGNoYW5nZXMgaW4gQW5ndWxhciAyLiBUaGlzIG1lYW5zXG4gKiB0aGF0IGBpbmRleC5odG1sYCBjYW4gc2FmZWx5IGJlIHByb2Nlc3NlZCB1c2luZyBzZXJ2ZXItc2lkZSB0ZWNobm9sb2dpZXMgc3VjaCBhc1xuICogcHJvdmlkZXJzLiBCaW5kaW5ncyBjYW4gdGh1cyB1c2UgZG91YmxlLWN1cmx5IGB7eyBzeW50YXggfX1gIHdpdGhvdXQgY29sbGlzaW9uIGZyb21cbiAqIEFuZ3VsYXIgMiBjb21wb25lbnQgZG91YmxlLWN1cmx5IGB7eyBzeW50YXggfX1gLlxuICpcbiAqIFdlIGNhbiB1c2UgdGhpcyBzY3JpcHQgY29kZTpcbiAqXG4gKiB7QGV4YW1wbGUgY29yZS90cy9ib290c3RyYXAvYm9vdHN0cmFwLnRzIHJlZ2lvbj0nYm9vdHN0cmFwJ31cbiAqXG4gKiBXaGVuIHRoZSBhcHAgZGV2ZWxvcGVyIGludm9rZXMgYGJvb3RzdHJhcCgpYCB3aXRoIHRoZSByb290IGNvbXBvbmVudCBgTXlBcHBgIGFzIGl0c1xuICogYXJndW1lbnQsIEFuZ3VsYXIgcGVyZm9ybXMgdGhlIGZvbGxvd2luZyB0YXNrczpcbiAqXG4gKiAgMS4gSXQgdXNlcyB0aGUgY29tcG9uZW50J3MgYHNlbGVjdG9yYCBwcm9wZXJ0eSB0byBsb2NhdGUgdGhlIERPTSBlbGVtZW50IHdoaWNoIG5lZWRzXG4gKiAgICAgdG8gYmUgdXBncmFkZWQgaW50byB0aGUgYW5ndWxhciBjb21wb25lbnQuXG4gKiAgMi4gSXQgY3JlYXRlcyBhIG5ldyBjaGlsZCBpbmplY3RvciAoZnJvbSB0aGUgcGxhdGZvcm0gaW5qZWN0b3IpLiBPcHRpb25hbGx5LCB5b3UgY2FuXG4gKiAgICAgYWxzbyBvdmVycmlkZSB0aGUgaW5qZWN0b3IgY29uZmlndXJhdGlvbiBmb3IgYW4gYXBwIGJ5IGludm9raW5nIGBib290c3RyYXBgIHdpdGggdGhlXG4gKiAgICAgYGNvbXBvbmVudEluamVjdGFibGVCaW5kaW5nc2AgYXJndW1lbnQuXG4gKiAgMy4gSXQgY3JlYXRlcyBhIG5ldyBgWm9uZWAgYW5kIGNvbm5lY3RzIGl0IHRvIHRoZSBhbmd1bGFyIGFwcGxpY2F0aW9uJ3MgY2hhbmdlIGRldGVjdGlvblxuICogICAgIGRvbWFpbiBpbnN0YW5jZS5cbiAqICA0LiBJdCBjcmVhdGVzIGFuIGVtdWxhdGVkIG9yIHNoYWRvdyBET00gb24gdGhlIHNlbGVjdGVkIGNvbXBvbmVudCdzIGhvc3QgZWxlbWVudCBhbmQgbG9hZHMgdGhlXG4gKiAgICAgdGVtcGxhdGUgaW50byBpdC5cbiAqICA1LiBJdCBpbnN0YW50aWF0ZXMgdGhlIHNwZWNpZmllZCBjb21wb25lbnQuXG4gKiAgNi4gRmluYWxseSwgQW5ndWxhciBwZXJmb3JtcyBjaGFuZ2UgZGV0ZWN0aW9uIHRvIGFwcGx5IHRoZSBpbml0aWFsIGRhdGEgcHJvdmlkZXJzIGZvciB0aGVcbiAqICAgICBhcHBsaWNhdGlvbi5cbiAqXG4gKlxuICogIyMgQm9vdHN0cmFwcGluZyBNdWx0aXBsZSBBcHBsaWNhdGlvbnNcbiAqXG4gKiBXaGVuIHdvcmtpbmcgd2l0aGluIGEgYnJvd3NlciB3aW5kb3csIHRoZXJlIGFyZSBtYW55IHNpbmdsZXRvbiByZXNvdXJjZXM6IGNvb2tpZXMsIHRpdGxlLFxuICogbG9jYXRpb24sIGFuZCBvdGhlcnMuIEFuZ3VsYXIgc2VydmljZXMgdGhhdCByZXByZXNlbnQgdGhlc2UgcmVzb3VyY2VzIG11c3QgbGlrZXdpc2UgYmVcbiAqIHNoYXJlZCBhY3Jvc3MgYWxsIEFuZ3VsYXIgYXBwbGljYXRpb25zIHRoYXQgb2NjdXB5IHRoZSBzYW1lIGJyb3dzZXIgd2luZG93LiBGb3IgdGhpc1xuICogcmVhc29uLCBBbmd1bGFyIGNyZWF0ZXMgZXhhY3RseSBvbmUgZ2xvYmFsIHBsYXRmb3JtIG9iamVjdCB3aGljaCBzdG9yZXMgYWxsIHNoYXJlZFxuICogc2VydmljZXMsIGFuZCBlYWNoIGFuZ3VsYXIgYXBwbGljYXRpb24gaW5qZWN0b3IgaGFzIHRoZSBwbGF0Zm9ybSBpbmplY3RvciBhcyBpdHMgcGFyZW50LlxuICpcbiAqIEVhY2ggYXBwbGljYXRpb24gaGFzIGl0cyBvd24gcHJpdmF0ZSBpbmplY3RvciBhcyB3ZWxsLiBXaGVuIHRoZXJlIGFyZSBtdWx0aXBsZVxuICogYXBwbGljYXRpb25zIG9uIGEgcGFnZSwgQW5ndWxhciB0cmVhdHMgZWFjaCBhcHBsaWNhdGlvbiBpbmplY3RvcidzIHNlcnZpY2VzIGFzIHByaXZhdGVcbiAqIHRvIHRoYXQgYXBwbGljYXRpb24uXG4gKlxuICogIyMgQVBJXG4gKlxuICogLSBgYXBwQ29tcG9uZW50VHlwZWA6IFRoZSByb290IGNvbXBvbmVudCB3aGljaCBzaG91bGQgYWN0IGFzIHRoZSBhcHBsaWNhdGlvbi4gVGhpcyBpc1xuICogICBhIHJlZmVyZW5jZSB0byBhIGBUeXBlYCB3aGljaCBpcyBhbm5vdGF0ZWQgd2l0aCBgQENvbXBvbmVudCguLi4pYC5cbiAqIC0gYGN1c3RvbVByb3ZpZGVyc2A6IEFuIGFkZGl0aW9uYWwgc2V0IG9mIHByb3ZpZGVycyB0aGF0IGNhbiBiZSBhZGRlZCB0byB0aGVcbiAqICAgYXBwIGluamVjdG9yIHRvIG92ZXJyaWRlIGRlZmF1bHQgaW5qZWN0aW9uIGJlaGF2aW9yLlxuICpcbiAqIFJldHVybnMgYSBgUHJvbWlzZWAgb2Yge0BsaW5rIENvbXBvbmVudFJlZn0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBib290c3RyYXAoXG4gICAgYXBwQ29tcG9uZW50VHlwZTogVHlwZSxcbiAgICBjdXN0b21Qcm92aWRlcnM/OiBBcnJheTxhbnkgLypUeXBlIHwgUHJvdmlkZXIgfCBhbnlbXSovPik6IFByb21pc2U8Q29tcG9uZW50UmVmPiB7XG4gIHJlZmxlY3Rvci5yZWZsZWN0aW9uQ2FwYWJpbGl0aWVzID0gbmV3IFJlZmxlY3Rpb25DYXBhYmlsaXRpZXMoKTtcbiAgdmFyIGFwcEluamVjdG9yID0gUmVmbGVjdGl2ZUluamVjdG9yLnJlc29sdmVBbmRDcmVhdGUoXG4gICAgICBbQlJPV1NFUl9BUFBfUFJPVklERVJTLCBpc1ByZXNlbnQoY3VzdG9tUHJvdmlkZXJzKSA/IGN1c3RvbVByb3ZpZGVycyA6IFtdXSxcbiAgICAgIGJyb3dzZXJQbGF0Zm9ybSgpLmluamVjdG9yKTtcbiAgcmV0dXJuIGNvcmVMb2FkQW5kQm9vdHN0cmFwKGFwcEluamVjdG9yLCBhcHBDb21wb25lbnRUeXBlKTtcbn1cbiJdfQ==