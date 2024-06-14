var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"home","loadChildren":"./pages/home/home.module#HomePageModule","canActivate":["AuthGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/home/home-routing.module.ts","module":"HomePageRoutingModule","children":[{"path":"","component":"HomePage"}],"kind":"module"}],"module":"HomePageModule"}]},{"path":"","redirectTo":"splash","pathMatch":"full"},{"path":"login","loadChildren":"./pages/login/login.module#LoginPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/login/login-routing.module.ts","module":"LoginPageRoutingModule","children":[{"path":"","component":"LoginPage"}],"kind":"module"}],"module":"LoginPageModule"}]},{"path":"register","loadChildren":"./pages/register/register.module#RegisterPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/register/register-routing.module.ts","module":"RegisterPageRoutingModule","children":[{"path":"","component":"RegisterPage"}],"kind":"module"}],"module":"RegisterPageModule"}]},{"path":"players","loadChildren":"./pages/players/players.module#PlayersPageModule","canActivate":["AuthGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/players/players-routing.module.ts","module":"PlayersPageRoutingModule","children":[{"path":"","component":"PlayersPage"}],"kind":"module"}],"module":"PlayersPageModule"}]},{"path":"teams","loadChildren":"./pages/teams/teams.module#TeamsPageModule","canActivate":["AuthGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/teams/teams-routing.module.ts","module":"TeamsPageRoutingModule","children":[{"path":"","component":"TeamsPage"}],"kind":"module"}],"module":"TeamsPageModule"}]},{"path":"about","loadChildren":"./pages/about/about.module#AboutPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/about/about-routing.module.ts","module":"AboutPageRoutingModule","children":[{"path":"","component":"AboutPage"}],"kind":"module"}],"module":"AboutPageModule"}]},{"path":"splash","loadChildren":"./pages/splash/splash.module#SplashPageModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/splash/splash-routing.module.ts","module":"SplashPageRoutingModule","children":[{"path":"","component":"SplashPage"}],"kind":"module"}],"module":"SplashPageModule"}]},{"path":"games","loadChildren":"./pages/games/games.module#GamesPageModule","canActivate":["AuthGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/games/games-routing.module.ts","module":"GamesPageRoutingModule","children":[{"path":"","component":"GamesPage"}],"kind":"module"}],"module":"GamesPageModule"}]},{"path":"users-admin","loadChildren":"./pages/users-admin/users-admin.module#UsersAdminPageModule","canActivate":["AuthGuard","OwnerGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/users-admin/users-admin-routing.module.ts","module":"UsersAdminPageRoutingModule","children":[{"path":"","component":"UsersAdminPage"}],"kind":"module"}],"module":"UsersAdminPageModule"}]},{"path":"settings","loadChildren":"./pages/settings/settings.module#SettingsPageModule","canActivate":["AuthGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/pages/settings/settings-routing.module.ts","module":"SettingsPageRoutingModule","children":[{"path":"","component":"SettingsPage"}],"kind":"module"}],"module":"SettingsPageModule"}]}],"kind":"module"}]}