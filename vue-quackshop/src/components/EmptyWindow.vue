<script setup>
    import { ref } from 'vue';

    const props = defineProps({ modelValue: Object})
    const {config} = rebuildConfig()

    function rebuildConfig() {
        const tempConfig = {
            name: '',
            description: '',
            image_path: '',
            published: false,
            ...props.modelValue
        }
        return {
            config: ref(tempConfig)
        }
    }

    function submit() {
        console.log(config.value)
    }
</script>

<template>
   <div>
    such empty
   </div>
</template>