<script setup>
    import { ref } from 'vue';
    import ProductService from '@/Services/ProductService'

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

    async function foo() {
        console.log(config.value)
        
        const resp = await ProductService.create({
            name: config.value.name,
            description: config.value.description,
            image_path: config.value.image_path,
            published: config.value.published,
        });
        console.log(resp)

        debugger;
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
        </form>
    <button @click="foo">Submit</button>
   </div>
</template>