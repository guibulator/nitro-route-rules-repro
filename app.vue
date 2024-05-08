<script setup lang="ts">
  const {data:auth, error} = useFetch('/api/auth/info')
  const {data:objectsFromProxy} = useFetch('/api/objects')

</script>

<template>
  <div>
    <span v-if="auth" :style="{color:'green'}">"{{auth}}"</span>
    <span v-else :style="{color:'red'}">Should receive info from /api/auth/info -> {{ error }}</span>
  
  </div>
  </br>
  <pre v-if="objectsFromProxy" :style="{color:'green'}">{{objectsFromProxy}}</pre>
  <span v-else :style="{color:'red'}">Should receive info from /api/objects</span>
</template>
