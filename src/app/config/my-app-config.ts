import { environment } from "src/environments/environment"

export default {

    oidc: {
        clientId: '0oa6gv5d36Uiy5O1t5d7',
        issuer: 'https://dev-85756127.okta.com/oauth2/default',
        redirectUri: `${environment.oidc.redirectUri}`,
        scopes: ['openid', 'profile', 'email']
    }

}
