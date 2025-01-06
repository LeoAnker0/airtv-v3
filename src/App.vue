<template>
    <div id="app">
        <nav>
            <button id="menu-toggle" @click.stop="toggleMenu">
                ☰
            </button>
            <div :class="{'nav-links': true, 'show-menu': isMenuVisible}" @click.stop>
                <router-link class="navText" to="/">Home</router-link>
                <router-link class="navText" to="/about">About</router-link>
                <router-link class="navText" to="/features">Features</router-link>
                <router-link class="navText" to="/drama">Drama</router-link>
                <router-link class="navText" to="/atvas">The ATVAS</router-link>
                <router-link class="navText" to="/kit">Kit</router-link>
                <router-link class="navText" to="/welfare">Welfare</router-link>
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
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuVisible = !this.isMenuVisible;
        },
        closeMenu() {
            this.isMenuVisible = false;
        },
    },
    mounted() {
        // Add a click event listener to the document
        document.addEventListener("click", this.closeMenu);
    },
    beforeDestroy() {
        // Remove the event listener when the component is destroyed
        document.removeEventListener("click", this.closeMenu);
    },
};
</script>
<style>
/* Base styles for the navigation bar */
nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 1rem;
    background-color: hsl(200, 40%, 15%);
    height: 3rem;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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

.navText {
    color: hsl(0, 0%, 90%);
    text-decoration: none;
}

.navText:hover {
    color: hsl(0, 0%, 100%);
}

/* Responsive styles for smaller screens */
@media (max-width: 768px) {
    #menu-toggle {
        display: block;
    }

    .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 3rem;
        left: 0;
        width: 100%;
        background-color: hsl(200, 40%, 20%);
        padding: 1rem 0;
        gap: 0.5rem;
    }

    .nav-links.show-menu {
        display: flex;
    }

    .navText {
        padding: 0.5rem 1rem;
        text-align: center;
    }
}
</style>