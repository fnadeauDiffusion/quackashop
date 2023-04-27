<template>
    <RouterLink :to="link">
        <div class="card primary-color-bg secondary-color">
            <h1>       
                <slot />
            </h1>
        </div>
    </RouterLink>
</template>

<script setup>
    const props = defineProps({link: String})
</script>