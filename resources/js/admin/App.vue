<template>
    <component :is="layout">
        <router-view/>
    </component>
</template>

<script>
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
export default {
    name: "App",
    props: [],
    data: () => ({}),
    components: {
        AuthLayout,
        MainLayout
    },
    computed: {
        layout()
        {
            return (this.$route.meta.layout || "auth") + '-layout'
        }
    },
    watch: {},
    methods: {},
    mounted() {
    }
}
</script>

<style scoped>

</style>
