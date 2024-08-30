<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterLink to="/">Inicio</RouterLink> |
  <RouterLink to="/about">Acerca de Nosotros</RouterLink> |
  <RouterLink to="/servicios">Servicios</RouterLink> |
  <RouterLink to="/blog">Blog</RouterLink> |

  <RouterLink to="/login">INGRESAR</RouterLink>

  <RouterView />
</template>
