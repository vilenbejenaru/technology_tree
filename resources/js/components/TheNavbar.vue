<template>
    <header class="header-global">
        <nav
            id="navbar-main"
            aria-label="Primary navigation"
            class="
                navbar navbar-main navbar-expand-lg navbar-theme-primary
                headroom
                navbar-light
            "
        >
            <div class="container position-relative">
                <a
                    class="
                        navbar-brand
                        shadow-soft
                        py-2
                        px-3
                        rounded
                        border border-light
                        mr-lg-4
                    "
                    href="../../index.html"
                >
                    <img
                        class="navbar-brand-dark"
                        src="../../assets/img/brand/dark.svg"
                        alt="Logo light"
                    />
                    <img
                        class="navbar-brand-light"
                        src="../../assets/img/brand/dark.svg"
                        alt="Logo dark"
                    />
                </a>
                <div class="navbar-collapse collapse" id="navbar_global">
                    <div class="navbar-collapse-header">
                        <div class="row">
                            <div class="col-6 collapse-brand">
                                <a
                                    href="../../index.html"
                                    class="
                                        navbar-brand
                                        shadow-soft
                                        py-2
                                        px-3
                                        rounded
                                        border border-light
                                    "
                                >
                                    <img
                                        src="../../assets/img/brand/dark.svg"
                                        alt="Themesberg logo"
                                    />
                                </a>
                            </div>
                            <div class="col-6 collapse-close">
                                <a
                                    href="#navbar_global"
                                    class="fas fa-times"
                                    data-toggle="collapse"
                                    data-target="#navbar_global"
                                    aria-controls="navbar_global"
                                    aria-expanded="false"
                                    title="close"
                                    aria-label="Toggle navigation"
                                ></a>
                            </div>
                        </div>
                    </div>
                    <ul
                        class="
                            navbar-nav navbar-nav-hover
                            align-items-lg-center
                        "
                    >
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link" data-toggle="dropdown">
                                <span class="nav-link-inner-text">Pages</span>
                                <span
                                    class="
                                        fas
                                        fa-angle-down
                                        nav-link-arrow
                                        ml-2
                                    "
                                ></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a
                                        class="dropdown-item"
                                        href="../../html/pages/about.html"
                                        >About</a
                                    >
                                </li>
                                <li>
                                    <a
                                        class="dropdown-item"
                                        href="../../html/pages/pricing.html"
                                        >Pricing</a
                                    >
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown mega-dropdown">
                            <a href="#" class="nav-link" data-toggle="dropdown">
                                <span class="nav-link-inner-text"
                                    >Components</span
                                >
                                <span
                                    class="
                                        fas
                                        fa-angle-down
                                        nav-link-arrow
                                        ml-2
                                    "
                                ></span>
                            </a>
                            <div class="dropdown-menu">
                                <div class="row">
                                    <div class="col pl-0">
                                        <ul class="list-style-none">
                                            <li>
                                                <a
                                                    class="dropdown-item"
                                                    href="../../html/components/accordions.html"
                                                    >Accordions</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    class="dropdown-item"
                                                    href="../../html/components/alerts.html"
                                                    >Alerts</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    class="dropdown-item"
                                                    href="../../html/components/badges.html"
                                                    >Badges</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    class="dropdown-item"
                                                    href="../../html/components/buttons.html"
                                                    >Buttons</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    class="dropdown-item"
                                                    href="../../html/components/cards.html"
                                                    >Cards</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col pl-0">
                                        <ul class="list-style-none">
                                            <li>
                                                <a
                                                    class="dropdown-item"
                                                    href="../../html/components/forms.html"
                                                    >Forms</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    class="dropdown-item"
                                                    href="../../html/components/popovers.html"
                                                    >Popovers</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    class="dropdown-item"
                                                    href="../../html/components/progress-bars.html"
                                                    >Progress Bars</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col pl-0">
                                        <ul class="list-style-none">
                                            <li>
                                                <a
                                                    class="dropdown-item"
                                                    href="../../html/components/tooltips.html"
                                                    >Tooltips</a
                                                >
                                            </li>
                                            <li>
                                                <a
                                                    class="dropdown-item"
                                                    href="../../html/components/typography.html"
                                                    >Typography</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a href="#" class="nav-link" data-toggle="dropdown">
                                <span class="nav-link-inner-text">Support</span>
                                <span
                                    class="
                                        fas
                                        fa-angle-down
                                        nav-link-arrow
                                        ml-2
                                    "
                                ></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <search-input />
        </nav>
    </header>
</template>

<script>
import SearchInput from "./SearchInput.vue";
export default {
    components: { SearchInput },
};
</script>

<style scoped></style>
