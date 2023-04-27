<script setup>
    import { ref } from 'vue';
    import axios from "axios";

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
        let url = '/product'
        const response = axios.post(url,{
            config: JSON.stringify(config.value),
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        configDetails.value = response.data
        // call api taponn/ par le express
        // axios en post, 
    }
</script>

<template>
   <div>
    <form>
        <input v-model="config.name"
            class="bg-gray-50 border text-black text-sm rounded-lg block ml-2 p-2.5 font-semibold w-1/3"
            placeholder="product name"
            type="text">
        <input v-model="config.description"
            class="bg-gray-50 border text-black text-sm rounded-lg block ml-2 p-2.5 font-semibold w-1/3"
            placeholder="product description"
            type="text">
        <input v-model="config.image_path"
            class="bg-gray-50 border text-black text-sm rounded-lg block ml-2 p-2.5 font-semibold w-1/3"
            placeholder="/imgfolder/image.png"
            type="text">
        <input v-model="config.published"
            class="bg-gray-50 border text-black text-sm rounded-lg block ml-2 p-2.5 font-semibold w-1/3"
            type="checkbox"> Published

        <button @click="submit">Submit</button>

    </form>
   </div>
</template>