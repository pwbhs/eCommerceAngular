import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuth } from '@okta/okta-auth-js';
import { OKTA_AUTH } from '@okta/okta-angular';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-callback',
  template: `<p>Logging in...</p>`
})
export class OktaCallbackComponent implements OnInit {

  constructor(
    @Inject(OKTA_AUTH) private oktaAuth: OktaAuth,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      // 处理认证重定向
      await this.oktaAuth.token.parseFromUrl();

      // 验证是否已认证
      const isAuthenticated = await this.oktaAuth.isAuthenticated();
      console.log('Is Authenticated:', isAuthenticated);

      // 如果已认证，重定向到主页
      if (isAuthenticated) {
        this.router.navigate(['/']);
      }
    } catch (error) {
      console.error('Error during login callback:', error);
      this.router.navigate(['/login']);
    }
  }
}
