<template>
    <div>
        <flicking :circular="true" :gap="40" :moveType="'freeScroll'" class="slider">
            <div class="panel" v-for="(slide, index) in slides" :key="index">
                <img :src="slide.image" alt="Slide image" class="slide-image" />
                <h2>{{ slide.header }}</h2>
                <p>{{ slide.paragraph }}</p>
            </div>
        </flicking>
    </div>
</template>
<script>
import Flicking from "@egjs/vue3-flicking";
import "@egjs/vue3-flicking/dist/flicking.css"; // Flicking styles
import "@egjs/vue3-flicking/dist/flicking-inline.css"; // Inline styles

export default {
    components: { Flicking },
    data() {
        return {
            slides: [{
                    image: "https://picsum.photos/seed/1/800/600",
                    header: "Slide 1 Header",
                    paragraph: "This is the first slide's paragraph."
                },
                {
                    image: "https://picsum.photos/seed/2/800/600",
                    header: "Slide 2 Header",
                    paragraph: "This is the second slide's paragraph."
                },
                {
                    image: "https://picsum.photos/seed/3/800/600",
                    header: "Slide 3 Header",
                    paragraph: "This is the third slide's paragraph."
                }
            ]
        };
    }
};
</script>
<style scoped>
.slider {
    width: 100%;
    max-width: 1200px;
    height: 32rem;
}

.panel {
    padding: 10px;
    overflow: hidden;
    border-radius: 5px;
}

.slide-image {
    width: 100%;
    max-width: 1000px;
    height: 30rem;
    margin: 0 auto 10px;
}

/*

.context {
    width: 100%;
    height: 5rem;
    background-color: hsla(0, 100%, 0%, 0.6);
    position: relative;
    top: -6rem;
    pointer-events: none;
}

h2 {
    font-size: 1.5rem;
    margin: 10px 0;
    position: relative;

    text-align: left;
    width: calc(100% - 1rem);
    padding-left: 1rem;
    color: black !important;
}

p {
    font-size: 1rem;
    color: #555;
    text-align: left;
    width: calc(100% - 1rem);
    padding-left: 1rem;
}*/
</style>