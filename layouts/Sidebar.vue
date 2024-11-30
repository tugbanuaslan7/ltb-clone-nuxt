<template>
    <div class="sidebar">
      <ul>
        <li><button @click="navigateTo('Navbar')">Navbar</button></li>
        <li><button @click="navigateTo('Jean')">Jean</button></li>
      </ul>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const navigateTo = (component: string) => {
    router.push({ name: component });
  };
  </script>
  
  <style scoped>
  .sidebar {
    width: 110px;
    height: 100vh;
    background-color: #f4f4f4;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar li {
    margin-bottom: 10px;
  }
  
  .sidebar button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .sidebar button:hover {
    background-color: #0056b3;
  }
  </style>