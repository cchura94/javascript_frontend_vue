<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Administración',
        items: [{ label: 'Admin', icon: 'pi pi-fw pi-home', to: '/admin' }]
    },
    {
        label: 'Gestión Invetarios',
        items: [
            { label: 'Productos', icon: 'pi pi-fw pi-id-card', to: '/admin/producto' },
            { label: 'Categorias', icon: 'pi pi-fw pi-check-square', to: '/admin/categoria' },
        ]
    },
    {
        label: 'Gestión Pedidos',
        icon: 'pi pi-fw pi-briefcase',
        items: [
            {
                label: 'Clientes',
                icon: 'pi pi-fw pi-globe',
                to: '/admin/cliente'
            },
            {
                label: 'Pedidos',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'Nuevo Pedido',
                        icon: 'pi pi-fw pi-sign-in',
                        to: '/auth/login'
                    },
                    {
                        label: 'Lista Pedidos',
                        icon: 'pi pi-fw pi-times-circle',
                        to: '/auth/error'
                    },
                ]
            },
          
           
        ]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
