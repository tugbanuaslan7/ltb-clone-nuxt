<template>
    <div class="kadin-jean">
        <div class="kadin-jean container">
            
            <div class="row">
                <div class="col-md-3">
                    <Cart1 />
                </div>
                <div class="col-md-9">
                    <Cart2 />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Cart1 from '~/components/Cart1.vue';
import Cart2 from '~/components/Cart2.vue';

</script>
