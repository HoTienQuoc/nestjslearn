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
                    <a href="index.html" data-type="index-link">nest-tutorial documentation</a>
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
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-eb8099a4e11079970fb2c91d806ba6a40549bd73fa71f07cafd7fea0886ef95fb5f4f81e70fec58e0eda36594de9e51a2ac99315da2c1db276e26a988da1815e"' : 'data-bs-target="#xs-controllers-links-module-AppModule-eb8099a4e11079970fb2c91d806ba6a40549bd73fa71f07cafd7fea0886ef95fb5f4f81e70fec58e0eda36594de9e51a2ac99315da2c1db276e26a988da1815e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-eb8099a4e11079970fb2c91d806ba6a40549bd73fa71f07cafd7fea0886ef95fb5f4f81e70fec58e0eda36594de9e51a2ac99315da2c1db276e26a988da1815e"' :
                                            'id="xs-controllers-links-module-AppModule-eb8099a4e11079970fb2c91d806ba6a40549bd73fa71f07cafd7fea0886ef95fb5f4f81e70fec58e0eda36594de9e51a2ac99315da2c1db276e26a988da1815e"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-eb8099a4e11079970fb2c91d806ba6a40549bd73fa71f07cafd7fea0886ef95fb5f4f81e70fec58e0eda36594de9e51a2ac99315da2c1db276e26a988da1815e"' : 'data-bs-target="#xs-injectables-links-module-AppModule-eb8099a4e11079970fb2c91d806ba6a40549bd73fa71f07cafd7fea0886ef95fb5f4f81e70fec58e0eda36594de9e51a2ac99315da2c1db276e26a988da1815e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-eb8099a4e11079970fb2c91d806ba6a40549bd73fa71f07cafd7fea0886ef95fb5f4f81e70fec58e0eda36594de9e51a2ac99315da2c1db276e26a988da1815e"' :
                                        'id="xs-injectables-links-module-AppModule-eb8099a4e11079970fb2c91d806ba6a40549bd73fa71f07cafd7fea0886ef95fb5f4f81e70fec58e0eda36594de9e51a2ac99315da2c1db276e26a988da1815e"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HealthModule-61e209a086d9e34d73889492fc1a58554fd8c1621f087715a7b4b668d946781acbc5879a07a2f78a0ad22e407115312286d75476015e2c88b486f3acce5ddc6e"' : 'data-bs-target="#xs-controllers-links-module-HealthModule-61e209a086d9e34d73889492fc1a58554fd8c1621f087715a7b4b668d946781acbc5879a07a2f78a0ad22e407115312286d75476015e2c88b486f3acce5ddc6e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-61e209a086d9e34d73889492fc1a58554fd8c1621f087715a7b4b668d946781acbc5879a07a2f78a0ad22e407115312286d75476015e2c88b486f3acce5ddc6e"' :
                                            'id="xs-controllers-links-module-HealthModule-61e209a086d9e34d73889492fc1a58554fd8c1621f087715a7b4b668d946781acbc5879a07a2f78a0ad22e407115312286d75476015e2c88b486f3acce5ddc6e"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostModule-33d1e6b10ec43ac1c923c7c5f93ed49ed4072b2b862e66e0dae432c86977ab367350744146ed85312e0dda4b097cc4b29785d970cf0d4b8b2370f51284c836ad"' : 'data-bs-target="#xs-controllers-links-module-PostModule-33d1e6b10ec43ac1c923c7c5f93ed49ed4072b2b862e66e0dae432c86977ab367350744146ed85312e0dda4b097cc4b29785d970cf0d4b8b2370f51284c836ad"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-33d1e6b10ec43ac1c923c7c5f93ed49ed4072b2b862e66e0dae432c86977ab367350744146ed85312e0dda4b097cc4b29785d970cf0d4b8b2370f51284c836ad"' :
                                            'id="xs-controllers-links-module-PostModule-33d1e6b10ec43ac1c923c7c5f93ed49ed4072b2b862e66e0dae432c86977ab367350744146ed85312e0dda4b097cc4b29785d970cf0d4b8b2370f51284c836ad"' }>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-33d1e6b10ec43ac1c923c7c5f93ed49ed4072b2b862e66e0dae432c86977ab367350744146ed85312e0dda4b097cc4b29785d970cf0d4b8b2370f51284c836ad"' : 'data-bs-target="#xs-injectables-links-module-PostModule-33d1e6b10ec43ac1c923c7c5f93ed49ed4072b2b862e66e0dae432c86977ab367350744146ed85312e0dda4b097cc4b29785d970cf0d4b8b2370f51284c836ad"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-33d1e6b10ec43ac1c923c7c5f93ed49ed4072b2b862e66e0dae432c86977ab367350744146ed85312e0dda4b097cc4b29785d970cf0d4b8b2370f51284c836ad"' :
                                        'id="xs-injectables-links-module-PostModule-33d1e6b10ec43ac1c923c7c5f93ed49ed4072b2b862e66e0dae432c86977ab367350744146ed85312e0dda4b097cc4b29785d970cf0d4b8b2370f51284c836ad"' }>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-d5d06b64466857248d0e811178891d599322cf459b22ca2b1c8a48c005fc6a9e473dd20a818bc11209c2a38ed05361b1e63ac7bc0fe4b46bbe677791e209d7b6"' : 'data-bs-target="#xs-controllers-links-module-UserModule-d5d06b64466857248d0e811178891d599322cf459b22ca2b1c8a48c005fc6a9e473dd20a818bc11209c2a38ed05361b1e63ac7bc0fe4b46bbe677791e209d7b6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-d5d06b64466857248d0e811178891d599322cf459b22ca2b1c8a48c005fc6a9e473dd20a818bc11209c2a38ed05361b1e63ac7bc0fe4b46bbe677791e209d7b6"' :
                                            'id="xs-controllers-links-module-UserModule-d5d06b64466857248d0e811178891d599322cf459b22ca2b1c8a48c005fc6a9e473dd20a818bc11209c2a38ed05361b1e63ac7bc0fe4b46bbe677791e209d7b6"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-d5d06b64466857248d0e811178891d599322cf459b22ca2b1c8a48c005fc6a9e473dd20a818bc11209c2a38ed05361b1e63ac7bc0fe4b46bbe677791e209d7b6"' : 'data-bs-target="#xs-injectables-links-module-UserModule-d5d06b64466857248d0e811178891d599322cf459b22ca2b1c8a48c005fc6a9e473dd20a818bc11209c2a38ed05361b1e63ac7bc0fe4b46bbe677791e209d7b6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-d5d06b64466857248d0e811178891d599322cf459b22ca2b1c8a48c005fc6a9e473dd20a818bc11209c2a38ed05361b1e63ac7bc0fe4b46bbe677791e209d7b6"' :
                                        'id="xs-injectables-links-module-UserModule-d5d06b64466857248d0e811178891d599322cf459b22ca2b1c8a48c005fc6a9e473dd20a818bc11209c2a38ed05361b1e63ac7bc0fe4b46bbe677791e209d7b6"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
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
                                <a href="classes/Post.html" data-type="entity-link" >Post</a>
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