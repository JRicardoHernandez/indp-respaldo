/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  apiUrl: 'http://localhost:3000/api/v1',
  api_external_token: 'http://52.142.23.169/realms/indep/protocol/openid-connect/token', 
  api_external_userInfo: 'http://52.142.23.169/realms/indep/protocol/openid-connect/userinfo',
  api_external_typeUser:  'http://168.61.50.112:3003/api/v1/user/userType/',
  testUser: {
    // tslint:disable
    token: {
      expires_in: 3600000,
      access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQFVzZXIiLCJyb2xlIjoidXNlciIsIm5iZiI6MTU2NDA2MTQ1NywiZXhwIjoxNTk1NjgzODU3LCJpc3MiOiJpc3N1ZXJfc2FtcGxlIiwiYXVkIjoiYXVkaWVuY2Vfc2FtcGxlIn0.xAAbQIOsw3ZXlIxDFnv5NynZy7OfzrvrJYWsy2NEBbA',
    },
    // tslint:enable
    email: 'user@user.user',
  },

};
