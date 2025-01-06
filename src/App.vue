<template>
    <div id="app">
        <nav>
            <button id="menu-toggle" @click.stop="toggleMenu">☰</button>
            <div :class="{'nav-links': true, 'show-menu': isMenuVisible}" @click.stop>
                <div class="nav-item">
                    <router-link class="navText" to="/">Home</router-link>
                </div>
                <div class="nav-item" @mouseenter="openSubmenu('about')" @mouseleave="startCloseSubmenuTimer">
                    <span class="navText" tabindex=0 @click="toggleSubmenu('about')">About</span>
                    <div :class="{'submenu': true, 'show-submenu': activeSubmenu === 'about'}" @mouseenter="cancelCloseSubmenuTimer" @mouseleave="startCloseSubmenuTimer">
                        <router-link class="submenuText" to="/about">About Us</router-link>
                        <router-link class="submenuText" to="/about/committee">Committee</router-link>
                        <router-link class="submenuText" to="/about/history">History</router-link>
                    </div>
                </div>
                <div class="nav-item">
                    <router-link class="navText" to="/features">Features</router-link>
                </div>
                <div class="nav-item" @mouseenter="openSubmenu('drama')" @mouseleave="startCloseSubmenuTimer">
                    <span class="navText" tabindex=0 @click="toggleSubmenu('drama')">Drama</span>
                    <div :class="{'submenu': true, 'show-submenu': activeSubmenu === 'drama'}" @mouseenter="cancelCloseSubmenuTimer" @mouseleave="startCloseSubmenuTimer">
                        <router-link class="submenuText" to="/drama">Dramatics</router-link>
                        <router-link class="submenuText" to="/drama/script-submissions">Script Submissions</router-link>
                        <router-link class="submenuText" to="/drama/script-bank">Script Bank</router-link>
                    </div>
                </div>
                <div class="nav-item">
                    <router-link class="navText" to="/atvas">The ATVA's</router-link>
                </div>
                <div class="floatRight">
                    <div class="nav-item">
                        <router-link class="navText" to="/kit">Kit</router-link>
                    </div>
                    <div class="nav-item">
                        <router-link class="navText" to="/welfare">Welfare</router-link>
                    </div>
                </div>
                <div class="nav-item mobile-item">
                    <router-link class="navText" to="/kit">Kit</router-link>
                </div>
                <div class="nav-item mobile-item">
                    <router-link class="navText" to="/welfare">Welfare</router-link>
                </div>
            </div>
        </nav>
        <div id="content">
            <router-view />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isMenuVisible: false,
            activeSubmenu: null, // Tracks the currently active submenu
            closeTimer: null, // Timer for delayed submenu closing
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuVisible = !this.isMenuVisible;
        },
        closeMenu() {
            this.isMenuVisible = false;
            this.activeSubmenu = null;
        },
        toggleSubmenu(menuName) {
            // Toggle submenu visibility
            this.activeSubmenu = this.activeSubmenu === menuName ? null : menuName;
        },
        openSubmenu(menuName) {
            this.activeSubmenu = menuName;
        },
        startCloseSubmenuTimer() {
            this.closeTimer = setTimeout(() => {
                this.activeSubmenu = null;
            }, 750); // Delay of 750ms
        },
        cancelCloseSubmenuTimer() {
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        },
    },
    mounted() {
        document.addEventListener("click", this.closeMenu);
    },
    beforeDestroy() {
        document.removeEventListener("click", this.closeMenu);
        clearTimeout(this.closeTimer);
    },
};
</script>
<style>
/* Base styles for the navigation bar */
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* Ensures space between groups of items */
    padding: 0 1rem;
    background-color: hsl(200, 40%, 15%);
    height: 3rem;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.floatRight {
    margin-left: auto;
    /* Pushes the element to the far right */
    display: flex;
    /* Ensures children align properly */
    gap: 1.5rem;
    /* Adds spacing between items */

    .nav-item {
        background-color: aqua;
        outline: 0.5rem solid aqua;
        outline-offset: -2px;
        border-radius: 0.5rem;
    }
}

.mobile-item {
    display: none;
}


#menu-toggle {
    display: none;
    background: none;
    border: none;
    color: hsl(0, 0%, 90%);
    font-size: 1.5rem;
    cursor: pointer;
    margin-right: 1rem;
}

.nav-links {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex-grow: 1;
}

.nav-item {
    position: relative;
}

.navText,
.submenuText {
    color: hsl(0, 0%, 90%);
    text-decoration: none;
    cursor: pointer;
    padding: 0.5rem;
}

.navText:hover,
.submenuText:hover {
    color: hsl(0, 0%, 100%);
}

/* Submenu styles */
.submenu {
    display: none;
    position: absolute;
    top: 3rem;
    left: 0;
    background-color: hsl(200, 40%, 20%);
    padding: 0.5rem;
    border-radius: 0.25rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    gap: 0.5rem;
    z-index: 1000;
}

.show-submenu {
    display: flex;
}

/* Responsive styles for smaller screens */
@media (max-width: 768px) {
    #menu-toggle {
        display: block;
    }

    nav {}

    .nav-links {
        overflow: hidden;
        display: none;
        flex-direction: column;
        text-align: left;

        position: absolute;
        top: 3rem;
        left: 0;
        width: calc(100% - 2rem);
        background-color: hsl(200, 40%, 20%);
        padding: 1rem 0;
        padding-left: 2rem;
        gap: 0.5rem;
    }

    .nav-links.show-menu {
        display: flex;
    }

    .submenu {
        position: static;
        background-color: hsl(200, 40%, 25%);
        padding-left: 1rem;
        z-index: 40;
    }

    .mobile-item {
        display: flex;
    }

    .nav-item a {
        display: flex;
        width: 100%;
        position: relative;
    }

    .nav-item .navText {
        display: flex;
        width: 100%;
    }

    .floatRight {
        display: none;
    }
}
</style>