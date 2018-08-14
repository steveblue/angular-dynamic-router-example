import { Injectable, Injector } from '@angular/core';
import { Router, Routes, Route } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ViewComponent } from './view/view/view.component';
import { SalesComponent } from './view/sales/sales.component';

@Injectable()
export class AppConfig {


    constructor(private injector: Injector,
                private http: HttpClient) {}

    public load() {

        return new Promise((resolve, reject) => {

            this.http.get('/route.config.json').toPromise().then((res) => {

                let routerConfig = res;

                let routes: Routes = [
                    {

                      path: '',
                      component: ViewComponent,
                      children: []

                    }
                ];

                routerConfig['routes'].forEach((route: Route) => {
                    routes[0].children.push({
                                            path: route.path,
                                            component: ViewComponent,
                                            children: route.children.map((child)=> {
                                                return {
                                                    path: child.path,
                                                    component: SalesComponent
                                                }
                                            })
                                        });
                });


                this.injector.get(Router).resetConfig(routes);

                resolve(routes);

            })

        });

    }
}