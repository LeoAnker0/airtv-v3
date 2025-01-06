<template>
    <div id="app">
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </nav>
        <router-view />
    </div>
</template>
<style>
nav {
    display: grid;
    gap: 1rem;
    margin-bottom: 1rem;
}
</style>