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
                    <a href="index.html" data-type="index-link">customify documentation</a>
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
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccountModule.html" data-type="entity-link">AccountModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccountModule-d1ac1ddc29d1f2abc6647f05b9f1e2b2"' : 'data-target="#xs-components-links-module-AccountModule-d1ac1ddc29d1f2abc6647f05b9f1e2b2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccountModule-d1ac1ddc29d1f2abc6647f05b9f1e2b2"' :
                                            'id="xs-components-links-module-AccountModule-d1ac1ddc29d1f2abc6647f05b9f1e2b2"' }>
                                            <li class="link">
                                                <a href="components/AccountInformationPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountInformationPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AccountInformationWrapperComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountInformationWrapperComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AccountPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AccountPageHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountPageHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AccountTypeEditPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AccountTypeEditPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditDataWrapperComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditDataWrapperComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmailEditPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmailEditPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HelpPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OrdersPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">OrdersPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PasswordEditPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PasswordEditPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PhoneNumberEditPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PhoneNumberEditPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReturnsAndRefundsPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ReturnsAndRefundsPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SecurityAndSettingsPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SecurityAndSettingsPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UsernameEditComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UsernameEditComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AccountRoutingModule.html" data-type="entity-link">AccountRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-64d9be4f3b7a8194e5bf4db681477e6a"' : 'data-target="#xs-controllers-links-module-AppModule-64d9be4f3b7a8194e5bf4db681477e6a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-64d9be4f3b7a8194e5bf4db681477e6a"' :
                                            'id="xs-controllers-links-module-AppModule-64d9be4f3b7a8194e5bf4db681477e6a"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-308cac1bbcd9d0ccb6fff8e4668ca291-1"' : 'data-target="#xs-components-links-module-AppModule-308cac1bbcd9d0ccb6fff8e4668ca291-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-308cac1bbcd9d0ccb6fff8e4668ca291-1"' :
                                            'id="xs-components-links-module-AppModule-308cac1bbcd9d0ccb6fff8e4668ca291-1"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-57254619410f103c4ae163c51be231c3-2"' : 'data-target="#xs-components-links-module-AppModule-57254619410f103c4ae163c51be231c3-2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-57254619410f103c4ae163c51be231c3-2"' :
                                            'id="xs-components-links-module-AppModule-57254619410f103c4ae163c51be231c3-2"' }>
                                            <li class="link">
                                                <a href="components/AppComponent-1.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-9afd7bf2e4659d546749bca4405e906a"' : 'data-target="#xs-injectables-links-module-AuthModule-9afd7bf2e4659d546749bca4405e906a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-9afd7bf2e4659d546749bca4405e906a"' :
                                        'id="xs-injectables-links-module-AuthModule-9afd7bf2e4659d546749bca4405e906a"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link">CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CategoryModule-5aad85df329237499ed0d888797ed149"' : 'data-target="#xs-components-links-module-CategoryModule-5aad85df329237499ed0d888797ed149"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CategoryModule-5aad85df329237499ed0d888797ed149"' :
                                            'id="xs-components-links-module-CategoryModule-5aad85df329237499ed0d888797ed149"' }>
                                            <li class="link">
                                                <a href="components/BannersListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BannersListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CategoryComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CategoryListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryListElementComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CategoryListElementComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link">CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CategoryModule-be8d2fe2399e6575a7d8e5ce8564e179-1"' : 'data-target="#xs-components-links-module-CategoryModule-be8d2fe2399e6575a7d8e5ce8564e179-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CategoryModule-be8d2fe2399e6575a7d8e5ce8564e179-1"' :
                                            'id="xs-components-links-module-CategoryModule-be8d2fe2399e6575a7d8e5ce8564e179-1"' }>
                                            <li class="link">
                                                <a href="components/CategoriesListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CategoriesListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryListElementComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CategoryListElementComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CategoryPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CategoryPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductsListComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductsListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-78d22e287fb5119f40f73edfd220fdff"' : 'data-target="#xs-components-links-module-DashboardModule-78d22e287fb5119f40f73edfd220fdff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-78d22e287fb5119f40f73edfd220fdff"' :
                                            'id="xs-components-links-module-DashboardModule-78d22e287fb5119f40f73edfd220fdff"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DataAccessModule.html" data-type="entity-link">DataAccessModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FavoritesModule.html" data-type="entity-link">FavoritesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FavoritesModule-9e8b6d4d0da5154d487fac1423a8ac36"' : 'data-target="#xs-components-links-module-FavoritesModule-9e8b6d4d0da5154d487fac1423a8ac36"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FavoritesModule-9e8b6d4d0da5154d487fac1423a8ac36"' :
                                            'id="xs-components-links-module-FavoritesModule-9e8b6d4d0da5154d487fac1423a8ac36"' }>
                                            <li class="link">
                                                <a href="components/FavoritesPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FavoritesPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-9adc75eb307ab2f6e1fed04ae79d0020"' : 'data-target="#xs-components-links-module-HomeModule-9adc75eb307ab2f6e1fed04ae79d0020"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-9adc75eb307ab2f6e1fed04ae79d0020"' :
                                            'id="xs-components-links-module-HomeModule-9adc75eb307ab2f6e1fed04ae79d0020"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-dedd5e1e046f271bfd2787dcc52b6d6d-1"' : 'data-target="#xs-components-links-module-HomeModule-dedd5e1e046f271bfd2787dcc52b6d6d-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-dedd5e1e046f271bfd2787dcc52b6d6d-1"' :
                                            'id="xs-components-links-module-HomeModule-dedd5e1e046f271bfd2787dcc52b6d6d-1"' }>
                                            <li class="link">
                                                <a href="components/ActionButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActionButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ActionButtonsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ActionButtonsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WidgetComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WidgetSpinnerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WidgetSpinnerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductHttpModule.html" data-type="entity-link">ProductHttpModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductHttpModule-bd58d00923ec1d9111f2be15733e7c47"' : 'data-target="#xs-controllers-links-module-ProductHttpModule-bd58d00923ec1d9111f2be15733e7c47"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductHttpModule-bd58d00923ec1d9111f2be15733e7c47"' :
                                            'id="xs-controllers-links-module-ProductHttpModule-bd58d00923ec1d9111f2be15733e7c47"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductHttpModule-bd58d00923ec1d9111f2be15733e7c47"' : 'data-target="#xs-injectables-links-module-ProductHttpModule-bd58d00923ec1d9111f2be15733e7c47"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductHttpModule-bd58d00923ec1d9111f2be15733e7c47"' :
                                        'id="xs-injectables-links-module-ProductHttpModule-bd58d00923ec1d9111f2be15733e7c47"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link">ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ProductModule-462382e3d64933e483d21ed763a3de08"' : 'data-target="#xs-controllers-links-module-ProductModule-462382e3d64933e483d21ed763a3de08"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ProductModule-462382e3d64933e483d21ed763a3de08"' :
                                            'id="xs-controllers-links-module-ProductModule-462382e3d64933e483d21ed763a3de08"' }>
                                            <li class="link">
                                                <a href="controllers/ProductController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ProductModule-462382e3d64933e483d21ed763a3de08"' : 'data-target="#xs-injectables-links-module-ProductModule-462382e3d64933e483d21ed763a3de08"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ProductModule-462382e3d64933e483d21ed763a3de08"' :
                                        'id="xs-injectables-links-module-ProductModule-462382e3d64933e483d21ed763a3de08"' }>
                                        <li class="link">
                                            <a href="injectables/ProductService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ProductService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductModule.html" data-type="entity-link">ProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductModule-53cfc80edaf026aff4f3f865b6ba27a7-1"' : 'data-target="#xs-components-links-module-ProductModule-53cfc80edaf026aff4f3f865b6ba27a7-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductModule-53cfc80edaf026aff4f3f865b6ba27a7-1"' :
                                            'id="xs-components-links-module-ProductModule-53cfc80edaf026aff4f3f865b6ba27a7-1"' }>
                                            <li class="link">
                                                <a href="components/ProductPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProductsModule.html" data-type="entity-link">ProductsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProductsModule-2392005c084de3f1e5654f58584400bd"' : 'data-target="#xs-components-links-module-ProductsModule-2392005c084de3f1e5654f58584400bd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProductsModule-2392005c084de3f1e5654f58584400bd"' :
                                            'id="xs-components-links-module-ProductsModule-2392005c084de3f1e5654f58584400bd"' }>
                                            <li class="link">
                                                <a href="components/ProductDetailsPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductDetailsPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductFilterBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductFilterBarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductsPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductsPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileModule.html" data-type="entity-link">ProfileModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfileModule-98be63adbd12fcc0ab63601d6d5f6d94"' : 'data-target="#xs-components-links-module-ProfileModule-98be63adbd12fcc0ab63601d6d5f6d94"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileModule-98be63adbd12fcc0ab63601d6d5f6d94"' :
                                            'id="xs-components-links-module-ProfileModule-98be63adbd12fcc0ab63601d6d5f6d94"' }>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-256df619c31fd3d08b06aa276a89673f-1"' : 'data-target="#xs-components-links-module-SharedModule-256df619c31fd3d08b06aa276a89673f-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-256df619c31fd3d08b06aa276a89673f-1"' :
                                            'id="xs-components-links-module-SharedModule-256df619c31fd3d08b06aa276a89673f-1"' }>
                                            <li class="link">
                                                <a href="components/PreviousPageButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PreviousPageButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SubPageTitleComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SubPageTitleComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ShoppingBagModule.html" data-type="entity-link">ShoppingBagModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ShoppingBagModule-c72545af77722dba01118293c9b437e9"' : 'data-target="#xs-components-links-module-ShoppingBagModule-c72545af77722dba01118293c9b437e9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ShoppingBagModule-c72545af77722dba01118293c9b437e9"' :
                                            'id="xs-components-links-module-ShoppingBagModule-c72545af77722dba01118293c9b437e9"' }>
                                            <li class="link">
                                                <a href="components/ShoppingBagPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ShoppingBagPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link">UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-f3aa69f8fff5c8bfb9c0e2bdba2cead6"' : 'data-target="#xs-components-links-module-UiModule-f3aa69f8fff5c8bfb9c0e2bdba2cead6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-f3aa69f8fff5c8bfb9c0e2bdba2cead6"' :
                                            'id="xs-components-links-module-UiModule-f3aa69f8fff5c8bfb9c0e2bdba2cead6"' }>
                                            <li class="link">
                                                <a href="components/BannerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BannerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LabelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LabelComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageIntroHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageIntroHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-UiModule-f3aa69f8fff5c8bfb9c0e2bdba2cead6"' : 'data-target="#xs-directives-links-module-UiModule-f3aa69f8fff5c8bfb9c0e2bdba2cead6"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-UiModule-f3aa69f8fff5c8bfb9c0e2bdba2cead6"' :
                                        'id="xs-directives-links-module-UiModule-f3aa69f8fff5c8bfb9c0e2bdba2cead6"' }>
                                        <li class="link">
                                            <a href="directives/InputDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">InputDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-UiModule-f3aa69f8fff5c8bfb9c0e2bdba2cead6"' : 'data-target="#xs-pipes-links-module-UiModule-f3aa69f8fff5c8bfb9c0e2bdba2cead6"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-UiModule-f3aa69f8fff5c8bfb9c0e2bdba2cead6"' :
                                            'id="xs-pipes-links-module-UiModule-f3aa69f8fff5c8bfb9c0e2bdba2cead6"' }>
                                            <li class="link">
                                                <a href="pipes/TruncatePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TruncatePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-37c686697218f4ebb4658f7237514d5a"' : 'data-target="#xs-controllers-links-module-UserModule-37c686697218f4ebb4658f7237514d5a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-37c686697218f4ebb4658f7237514d5a"' :
                                            'id="xs-controllers-links-module-UserModule-37c686697218f4ebb4658f7237514d5a"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-37c686697218f4ebb4658f7237514d5a"' : 'data-target="#xs-injectables-links-module-UserModule-37c686697218f4ebb4658f7237514d5a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-37c686697218f4ebb4658f7237514d5a"' :
                                        'id="xs-injectables-links-module-UserModule-37c686697218f4ebb4658f7237514d5a"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UtilModule.html" data-type="entity-link">UtilModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/CategoryListElementComponent-1.html" data-type="entity-link">CategoryListElementComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/ErrorResponse.html" data-type="entity-link">ErrorResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductEntity.html" data-type="entity-link">ProductEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/Response.html" data-type="entity-link">Response</a>
                            </li>
                            <li class="link">
                                <a href="classes/SuccessResponse.html" data-type="entity-link">SuccessResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserEntity.html" data-type="entity-link">UserEntity</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CurrentDisplayProductsListInCategoriesService.html" data-type="entity-link">CurrentDisplayProductsListInCategoriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ErrorService.html" data-type="entity-link">ErrorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link">JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link">LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductFormService.html" data-type="entity-link">ProductFormService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService-1.html" data-type="entity-link">ProductService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/HttpErrorInterceptor.html" data-type="entity-link">HttpErrorInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Chainable.html" data-type="entity-link">Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Chainable-1.html" data-type="entity-link">Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Chainable-2.html" data-type="entity-link">Chainable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAccessToken.html" data-type="entity-link">IAccessToken</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IActionButton.html" data-type="entity-link">IActionButton</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBanner.html" data-type="entity-link">IBanner</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICategory.html" data-type="entity-link">ICategory</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IControlSimpleData.html" data-type="entity-link">IControlSimpleData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHeaderData.html" data-type="entity-link">IHeaderData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/INavElement.html" data-type="entity-link">INavElement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPageIntroHeaderData.html" data-type="entity-link">IPageIntroHeaderData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProduct.html" data-type="entity-link">IProduct</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProductFormConfig.html" data-type="entity-link">IProductFormConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IResponse.html" data-type="entity-link">IResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IResponse-1.html" data-type="entity-link">IResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITableData.html" data-type="entity-link">ITableData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITableData-1.html" data-type="entity-link">ITableData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link">IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IWidget.html" data-type="entity-link">IWidget</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});