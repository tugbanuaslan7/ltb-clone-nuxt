<template>
    <div class="kadin-jean">
        <div class="container">
          
            <div class="row">
                <div class="categories">

                </div>
                <div class="first-cart">
                    <Cart1 />
                </div>
                <div class="second-cart">
                    <Cart2 />
                </div>
                <div class="third-cart">
                    <Cart3 />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Cart1 from '~/components/Cart1.vue';
import Cart2 from '~/components/Cart2.vue';
import Cart3 from '~/components/Cart3.vue';
</script>

<style scoped>
.kadin-jean {
  display: flex;
  justify-content: center; /* Ortalamak için */
  align-items: flex-start; /* Üst hizalama */
}

.container {
  width: 100%;
}

.row {
  display: flex;
  justify-content: flex-end;
}

.categories {

}

.first-cart, .second-cart, .third-cart {
  width: 30%; /* Her bir kartın genişliği */
  margin: 10px; /* Kartlar arasına boşluk */
}

.first-cart {
    margin-right: 140px;
}

.second-cart {
  margin-left: -50px; /* Cart2'yi biraz sola kaydırmak için */
}



.third-cart {
  margin-left: 10px; /* Cart3'ü sola kaydırmak için */
}

</style>