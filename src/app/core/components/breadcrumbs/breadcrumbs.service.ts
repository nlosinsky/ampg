import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, PRIMARY_OUTLET, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { Breadcrumb } from '../../entities';

@Injectable()
export class BreadcrumbsService {
  public onBreadcrumbChange: BehaviorSubject<Breadcrumb[]> = new BehaviorSubject([]);
  private breadcrumbs: Breadcrumb[];
  private url: string;

  constructor(
      private router: Router,
      private activatedRoute: ActivatedRoute
  ) {
    this.init();
  }

  private init(): void {
    this.router.events
				.filter(event => event instanceof NavigationEnd)
				.subscribe(() => this.runProcess());
  }

  private runProcess(): void {
    this.breadcrumbs = [];
    this.url = '';
    let currentRoute = this.activatedRoute;

    do {
      const childrenRoutes = currentRoute.children;

      currentRoute = null;

      childrenRoutes.forEach((route) => {
        this.makeBreadcrumbsArray(route);

        currentRoute = route;
      });
    } while (currentRoute);

    this.onBreadcrumbChange.next(this.breadcrumbs);
  }

  private makeBreadcrumbsArray(route: any): void {
    const { outlet, snapshot } = route;
    const breadcrumbData = snapshot.data.breadcrumb;

    if (outlet === PRIMARY_OUTLET && breadcrumbData) {

      route.params.subscribe((params) => {
        const pathParam = breadcrumbData.pathParam;
        let label = breadcrumbData.label;

        this.url += '/' + snapshot.url.map(segment => segment.path).join('/');

        if (pathParam) {
          label += ` ${params[pathParam]}`;
        }

        if (label) {
          this.breadcrumbs.push({ label, url: this.url });
        }
      });
    }
  }
}
