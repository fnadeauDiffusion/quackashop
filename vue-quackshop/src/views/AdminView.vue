<template>
    <div style="display: flex; flex-direction: row; width: 100%;">
        <div style="width: 15%;">
            Place to create <button @click="swapComponent(ProductWindow)">new product</button><br/>
            Place to modify products<br/>
            Place to delete products<br/><br/>
            
            Place to modify user roles<br/>
        </div>
        <div style="width: 85%; background-color: brown;">
            <div id="toReplace">
                <component :is="currentComponent"></component>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';

    import ProductWindow from '../components/ProductWindow.vue'
    import EmptyWindow from '../components/EmptyWindow.vue'
    const currentComponent = ref(EmptyWindow)

    function swapComponent(component) {
        // console.log(component);
        currentComponent.value = component;
    }
</script>