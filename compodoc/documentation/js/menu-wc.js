'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">home-slam documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutPageModule.html" data-type="entity-link" >AboutPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AboutPageModule-f69187f897c3a25b70d4a6074077b62a68d8ec05ff5d026011a22a330a35d67c3db4ef77d01d3d24a233aa98aa04cd86b5b0209bb6f2c82e65d3721e93fab239"' : 'data-bs-target="#xs-components-links-module-AboutPageModule-f69187f897c3a25b70d4a6074077b62a68d8ec05ff5d026011a22a330a35d67c3db4ef77d01d3d24a233aa98aa04cd86b5b0209bb6f2c82e65d3721e93fab239"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutPageModule-f69187f897c3a25b70d4a6074077b62a68d8ec05ff5d026011a22a330a35d67c3db4ef77d01d3d24a233aa98aa04cd86b5b0209bb6f2c82e65d3721e93fab239"' :
                                            'id="xs-components-links-module-AboutPageModule-f69187f897c3a25b70d4a6074077b62a68d8ec05ff5d026011a22a330a35d67c3db4ef77d01d3d24a233aa98aa04cd86b5b0209bb6f2c82e65d3721e93fab239"' }>
                                            <li class="link">
                                                <a href="components/AboutPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AboutPageRoutingModule.html" data-type="entity-link" >AboutPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-8ffeeeb9e99feb110b4bf6b0015c8f7d3ef53d85d1174415e246f4ea5847dc68b7bc9a04869757ff4d1e0bbc57cfc61b9f1e8cf0ed70bc64351d1a02241a98fa"' : 'data-bs-target="#xs-components-links-module-AppModule-8ffeeeb9e99feb110b4bf6b0015c8f7d3ef53d85d1174415e246f4ea5847dc68b7bc9a04869757ff4d1e0bbc57cfc61b9f1e8cf0ed70bc64351d1a02241a98fa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8ffeeeb9e99feb110b4bf6b0015c8f7d3ef53d85d1174415e246f4ea5847dc68b7bc9a04869757ff4d1e0bbc57cfc61b9f1e8cf0ed70bc64351d1a02241a98fa"' :
                                            'id="xs-components-links-module-AppModule-8ffeeeb9e99feb110b4bf6b0015c8f7d3ef53d85d1174415e246f4ea5847dc68b7bc9a04869757ff4d1e0bbc57cfc61b9f1e8cf0ed70bc64351d1a02241a98fa"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GamesPageModule.html" data-type="entity-link" >GamesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-GamesPageModule-ef7ff1ea56e681dd986066bb01169b04f0cfb26143fc3f63ffa2bdfd5f519554a03295374c3c1a21c2b39ae2f512335b5237fc99a2818dc6f86401722967c7f0"' : 'data-bs-target="#xs-components-links-module-GamesPageModule-ef7ff1ea56e681dd986066bb01169b04f0cfb26143fc3f63ffa2bdfd5f519554a03295374c3c1a21c2b39ae2f512335b5237fc99a2818dc6f86401722967c7f0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GamesPageModule-ef7ff1ea56e681dd986066bb01169b04f0cfb26143fc3f63ffa2bdfd5f519554a03295374c3c1a21c2b39ae2f512335b5237fc99a2818dc6f86401722967c7f0"' :
                                            'id="xs-components-links-module-GamesPageModule-ef7ff1ea56e681dd986066bb01169b04f0cfb26143fc3f63ffa2bdfd5f519554a03295374c3c1a21c2b39ae2f512335b5237fc99a2818dc6f86401722967c7f0"' }>
                                            <li class="link">
                                                <a href="components/GamesPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GamesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GamesPageRoutingModule.html" data-type="entity-link" >GamesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link" >HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-HomePageModule-dffd6876b17a76117028295d602d509ace9bcb757ce031ab0025d6c626f2160be63fe47cdf8d7eb2d4d03c925d1c279eaf9198ee097bfe29161a29786490d76b"' : 'data-bs-target="#xs-components-links-module-HomePageModule-dffd6876b17a76117028295d602d509ace9bcb757ce031ab0025d6c626f2160be63fe47cdf8d7eb2d4d03c925d1c279eaf9198ee097bfe29161a29786490d76b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-dffd6876b17a76117028295d602d509ace9bcb757ce031ab0025d6c626f2160be63fe47cdf8d7eb2d4d03c925d1c279eaf9198ee097bfe29161a29786490d76b"' :
                                            'id="xs-components-links-module-HomePageModule-dffd6876b17a76117028295d602d509ace9bcb757ce031ab0025d6c626f2160be63fe47cdf8d7eb2d4d03c925d1c279eaf9198ee097bfe29161a29786490d76b"' }>
                                            <li class="link">
                                                <a href="components/HomePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageRoutingModule.html" data-type="entity-link" >HomePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link" >LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LoginPageModule-9148481bc345200f8733fd26303bbd7cbacd61842df59c1187855147133c5329c94f2b1fe040839e8bc11551e95341732d1a26939bb65e925acfb068dd112067"' : 'data-bs-target="#xs-components-links-module-LoginPageModule-9148481bc345200f8733fd26303bbd7cbacd61842df59c1187855147133c5329c94f2b1fe040839e8bc11551e95341732d1a26939bb65e925acfb068dd112067"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-9148481bc345200f8733fd26303bbd7cbacd61842df59c1187855147133c5329c94f2b1fe040839e8bc11551e95341732d1a26939bb65e925acfb068dd112067"' :
                                            'id="xs-components-links-module-LoginPageModule-9148481bc345200f8733fd26303bbd7cbacd61842df59c1187855147133c5329c94f2b1fe040839e8bc11551e95341732d1a26939bb65e925acfb068dd112067"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageRoutingModule.html" data-type="entity-link" >LoginPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PlayersPageModule.html" data-type="entity-link" >PlayersPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PlayersPageModule-87bc60702d21bd36ea07904db455056b7e28e1a620938c99507d8663d34fbaf6801080cd13e0193a3afff83bef21f3f47f314fa6118027f396418febdb3ded6f"' : 'data-bs-target="#xs-components-links-module-PlayersPageModule-87bc60702d21bd36ea07904db455056b7e28e1a620938c99507d8663d34fbaf6801080cd13e0193a3afff83bef21f3f47f314fa6118027f396418febdb3ded6f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PlayersPageModule-87bc60702d21bd36ea07904db455056b7e28e1a620938c99507d8663d34fbaf6801080cd13e0193a3afff83bef21f3f47f314fa6118027f396418febdb3ded6f"' :
                                            'id="xs-components-links-module-PlayersPageModule-87bc60702d21bd36ea07904db455056b7e28e1a620938c99507d8663d34fbaf6801080cd13e0193a3afff83bef21f3f47f314fa6118027f396418febdb3ded6f"' }>
                                            <li class="link">
                                                <a href="components/PlayersPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayersPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlayersPageRoutingModule.html" data-type="entity-link" >PlayersPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterPageModule.html" data-type="entity-link" >RegisterPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-RegisterPageModule-02f750602c641a01e070f44a90de1366f95f8b7c28a4626bf042b87f77e0a67ec5a228a761f2a7c3657a54c3298048877b20085bc2ef7f29369202031f5758c3"' : 'data-bs-target="#xs-components-links-module-RegisterPageModule-02f750602c641a01e070f44a90de1366f95f8b7c28a4626bf042b87f77e0a67ec5a228a761f2a7c3657a54c3298048877b20085bc2ef7f29369202031f5758c3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegisterPageModule-02f750602c641a01e070f44a90de1366f95f8b7c28a4626bf042b87f77e0a67ec5a228a761f2a7c3657a54c3298048877b20085bc2ef7f29369202031f5758c3"' :
                                            'id="xs-components-links-module-RegisterPageModule-02f750602c641a01e070f44a90de1366f95f8b7c28a4626bf042b87f77e0a67ec5a228a761f2a7c3657a54c3298048877b20085bc2ef7f29369202031f5758c3"' }>
                                            <li class="link">
                                                <a href="components/RegisterPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterPageRoutingModule.html" data-type="entity-link" >RegisterPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsPageModule.html" data-type="entity-link" >SettingsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SettingsPageModule-7a10bd64a1884704c2f8f5110a92e2399da364726a44163a630a601b58045711cd8a431748143267e397e3a3ed14db5a7692d35df5e830053ce33eeb9ef1b5e2"' : 'data-bs-target="#xs-components-links-module-SettingsPageModule-7a10bd64a1884704c2f8f5110a92e2399da364726a44163a630a601b58045711cd8a431748143267e397e3a3ed14db5a7692d35df5e830053ce33eeb9ef1b5e2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsPageModule-7a10bd64a1884704c2f8f5110a92e2399da364726a44163a630a601b58045711cd8a431748143267e397e3a3ed14db5a7692d35df5e830053ce33eeb9ef1b5e2"' :
                                            'id="xs-components-links-module-SettingsPageModule-7a10bd64a1884704c2f8f5110a92e2399da364726a44163a630a601b58045711cd8a431748143267e397e3a3ed14db5a7692d35df5e830053ce33eeb9ef1b5e2"' }>
                                            <li class="link">
                                                <a href="components/SettingsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsPageRoutingModule.html" data-type="entity-link" >SettingsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-18d94ba44d2f528bf522c5639358861b59d4aa4a4d2f175cab048ff0ca94087bae2b3499f19261cf62a6ff05ce55f30772b6894c93a4c462ab5068f606a69e97"' : 'data-bs-target="#xs-components-links-module-SharedModule-18d94ba44d2f528bf522c5639358861b59d4aa4a4d2f175cab048ff0ca94087bae2b3499f19261cf62a6ff05ce55f30772b6894c93a4c462ab5068f606a69e97"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-18d94ba44d2f528bf522c5639358861b59d4aa4a4d2f175cab048ff0ca94087bae2b3499f19261cf62a6ff05ce55f30772b6894c93a4c462ab5068f606a69e97"' :
                                            'id="xs-components-links-module-SharedModule-18d94ba44d2f528bf522c5639358861b59d4aa4a4d2f175cab048ff0ca94087bae2b3499f19261cf62a6ff05ce55f30772b6894c93a4c462ab5068f606a69e97"' }>
                                            <li class="link">
                                                <a href="components/AppToolbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppToolbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GameDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GameInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GameInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PictureSelectableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PictureSelectableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayerDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayerDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayerInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayerInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PositionSelectorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PositionSelectorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TeamDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeamDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TeamInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeamInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UserInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserInfoComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-SharedModule-18d94ba44d2f528bf522c5639358861b59d4aa4a4d2f175cab048ff0ca94087bae2b3499f19261cf62a6ff05ce55f30772b6894c93a4c462ab5068f606a69e97"' : 'data-bs-target="#xs-directives-links-module-SharedModule-18d94ba44d2f528bf522c5639358861b59d4aa4a4d2f175cab048ff0ca94087bae2b3499f19261cf62a6ff05ce55f30772b6894c93a4c462ab5068f606a69e97"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-18d94ba44d2f528bf522c5639358861b59d4aa4a4d2f175cab048ff0ca94087bae2b3499f19261cf62a6ff05ce55f30772b6894c93a4c462ab5068f606a69e97"' :
                                        'id="xs-directives-links-module-SharedModule-18d94ba44d2f528bf522c5639358861b59d4aa4a4d2f175cab048ff0ca94087bae2b3499f19261cf62a6ff05ce55f30772b6894c93a4c462ab5068f606a69e97"' }>
                                        <li class="link">
                                            <a href="directives/PositionImageDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PositionImageDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-SharedModule-18d94ba44d2f528bf522c5639358861b59d4aa4a4d2f175cab048ff0ca94087bae2b3499f19261cf62a6ff05ce55f30772b6894c93a4c462ab5068f606a69e97"' : 'data-bs-target="#xs-pipes-links-module-SharedModule-18d94ba44d2f528bf522c5639358861b59d4aa4a4d2f175cab048ff0ca94087bae2b3499f19261cf62a6ff05ce55f30772b6894c93a4c462ab5068f606a69e97"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-18d94ba44d2f528bf522c5639358861b59d4aa4a4d2f175cab048ff0ca94087bae2b3499f19261cf62a6ff05ce55f30772b6894c93a4c462ab5068f606a69e97"' :
                                            'id="xs-pipes-links-module-SharedModule-18d94ba44d2f528bf522c5639358861b59d4aa4a4d2f175cab048ff0ca94087bae2b3499f19261cf62a6ff05ce55f30772b6894c93a4c462ab5068f606a69e97"' }>
                                            <li class="link">
                                                <a href="pipes/NamePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NamePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SplashPageModule.html" data-type="entity-link" >SplashPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SplashPageModule-727947b01e4db276f0a5c4403e708630d8dfd079be0eee4e05cc96ea1e1eb5f9d5c2143d0c3880b7e12eb3c86d31333450eb3359a04f0cc31c9df176cedc0609"' : 'data-bs-target="#xs-components-links-module-SplashPageModule-727947b01e4db276f0a5c4403e708630d8dfd079be0eee4e05cc96ea1e1eb5f9d5c2143d0c3880b7e12eb3c86d31333450eb3359a04f0cc31c9df176cedc0609"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SplashPageModule-727947b01e4db276f0a5c4403e708630d8dfd079be0eee4e05cc96ea1e1eb5f9d5c2143d0c3880b7e12eb3c86d31333450eb3359a04f0cc31c9df176cedc0609"' :
                                            'id="xs-components-links-module-SplashPageModule-727947b01e4db276f0a5c4403e708630d8dfd079be0eee4e05cc96ea1e1eb5f9d5c2143d0c3880b7e12eb3c86d31333450eb3359a04f0cc31c9df176cedc0609"' }>
                                            <li class="link">
                                                <a href="components/SplashPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SplashPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SplashPageRoutingModule.html" data-type="entity-link" >SplashPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TeamsPageModule.html" data-type="entity-link" >TeamsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TeamsPageModule-e25764260187ec18b5400a4f6bcecce1279230dc09f8c14b7f03915bec4d9d248ad74f391c607d898b5bc91f5190d12052fe957ba09b740d5b11be4c99343db9"' : 'data-bs-target="#xs-components-links-module-TeamsPageModule-e25764260187ec18b5400a4f6bcecce1279230dc09f8c14b7f03915bec4d9d248ad74f391c607d898b5bc91f5190d12052fe957ba09b740d5b11be4c99343db9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TeamsPageModule-e25764260187ec18b5400a4f6bcecce1279230dc09f8c14b7f03915bec4d9d248ad74f391c607d898b5bc91f5190d12052fe957ba09b740d5b11be4c99343db9"' :
                                            'id="xs-components-links-module-TeamsPageModule-e25764260187ec18b5400a4f6bcecce1279230dc09f8c14b7f03915bec4d9d248ad74f391c607d898b5bc91f5190d12052fe957ba09b740d5b11be4c99343db9"' }>
                                            <li class="link">
                                                <a href="components/TeamsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TeamsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TeamsPageRoutingModule.html" data-type="entity-link" >TeamsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UsersAdminPageModule.html" data-type="entity-link" >UsersAdminPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UsersAdminPageModule-31fbd88a7814d435bba7d2ee1b6b754a05e99fcdb74dc834bda450c86642ec339f412434e7feb63ee6ca72fe6334c650579d579fade779afc02bff684b6eaae0"' : 'data-bs-target="#xs-components-links-module-UsersAdminPageModule-31fbd88a7814d435bba7d2ee1b6b754a05e99fcdb74dc834bda450c86642ec339f412434e7feb63ee6ca72fe6334c650579d579fade779afc02bff684b6eaae0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UsersAdminPageModule-31fbd88a7814d435bba7d2ee1b6b754a05e99fcdb74dc834bda450c86642ec339f412434e7feb63ee6ca72fe6334c650579d579fade779afc02bff684b6eaae0"' :
                                            'id="xs-components-links-module-UsersAdminPageModule-31fbd88a7814d435bba7d2ee1b6b754a05e99fcdb74dc834bda450c86642ec339f412434e7feb63ee6ca72fe6334c650579d579fade779afc02bff684b6eaae0"' }>
                                            <li class="link">
                                                <a href="components/UsersAdminPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersAdminPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersAdminPageRoutingModule.html" data-type="entity-link" >UsersAdminPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/FirebaseMediaService.html" data-type="entity-link" >FirebaseMediaService</a>
                            </li>
                            <li class="link">
                                <a href="classes/NumericValidator.html" data-type="entity-link" >NumericValidator</a>
                            </li>
                            <li class="link">
                                <a href="classes/PasswordValidation.html" data-type="entity-link" >PasswordValidation</a>
                            </li>
                            <li class="link">
                                <a href="classes/playerNotFoundException.html" data-type="entity-link" >playerNotFoundException</a>
                            </li>
                            <li class="link">
                                <a href="classes/StrapiDataService.html" data-type="entity-link" >StrapiDataService</a>
                            </li>
                            <li class="link">
                                <a href="classes/StrapiMappingService.html" data-type="entity-link" >StrapiMappingService</a>
                            </li>
                            <li class="link">
                                <a href="classes/StrapiMediaService.html" data-type="entity-link" >StrapiMediaService</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link" >ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthStrapiService.html" data-type="entity-link" >AuthStrapiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CsvService.html" data-type="entity-link" >CsvService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomTranslateService.html" data-type="entity-link" >CustomTranslateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DataService.html" data-type="entity-link" >DataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FirebaseAuthService.html" data-type="entity-link" >FirebaseAuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FirebaseMappingService.html" data-type="entity-link" >FirebaseMappingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FirebaseService.html" data-type="entity-link" >FirebaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GameService.html" data-type="entity-link" >GameService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpClientProvider.html" data-type="entity-link" >HttpClientProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpClientWebProvider.html" data-type="entity-link" >HttpClientWebProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtService.html" data-type="entity-link" >JwtService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MappingService.html" data-type="entity-link" >MappingService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MediaService.html" data-type="entity-link" >MediaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlayersService.html" data-type="entity-link" >PlayersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TeamService.html" data-type="entity-link" >TeamService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VoteService.html" data-type="entity-link" >VoteService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/OwnerGuard.html" data-type="entity-link" >OwnerGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/FirebaseDocument.html" data-type="entity-link" >FirebaseDocument</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FirebaseStorageFile.html" data-type="entity-link" >FirebaseStorageFile</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FirebaseUserCredential.html" data-type="entity-link" >FirebaseUserCredential</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Formats.html" data-type="entity-link" >Formats</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Game.html" data-type="entity-link" >Game</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Media.html" data-type="entity-link" >Media</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MediaFormat.html" data-type="entity-link" >MediaFormat</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PaginatedData.html" data-type="entity-link" >PaginatedData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pagination.html" data-type="entity-link" >Pagination</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Player.html" data-type="entity-link" >Player</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Position.html" data-type="entity-link" >Position</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProviderMetadata.html" data-type="entity-link" >ProviderMetadata</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrapiArrayResponse.html" data-type="entity-link" >StrapiArrayResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrapiData.html" data-type="entity-link" >StrapiData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrapiExtendedUser.html" data-type="entity-link" >StrapiExtendedUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrapiExtendedUser-1.html" data-type="entity-link" >StrapiExtendedUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrapiLoginPayload.html" data-type="entity-link" >StrapiLoginPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrapiLoginResponse.html" data-type="entity-link" >StrapiLoginResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrapiMedia.html" data-type="entity-link" >StrapiMedia</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrapiRegisterPayload.html" data-type="entity-link" >StrapiRegisterPayload</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrapiResponse.html" data-type="entity-link" >StrapiResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrapiUser.html" data-type="entity-link" >StrapiUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Team.html" data-type="entity-link" >Team</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Trainer.html" data-type="entity-link" >Trainer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserCredentials.html" data-type="entity-link" >UserCredentials</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserRegisterInfo.html" data-type="entity-link" >UserRegisterInfo</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});