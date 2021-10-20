<script setup lang="ts">
import { onMounted } from "vue-demi"
import { ref } from "vue";

  let isloaded = ref(false)
    onMounted(()=>{
            document.onreadystatechange=() =>{
                if(document.readyState == "complete"){
                    isloaded.value=true;
                }
            }
 
    })

</script>


<template>

        <div id="test" class="flex justify-center  items-center fixed top-0 left-0 w-screen h-screen bg-gray-800      z-10" v-if="!isloaded">
             
              <div class="test">
               </div> 

              <div class="test">
               </div> 

              <div class="test">
               </div>  

              <div class="test">
               </div> 

                  <div class="test">
               </div>  
         </div>  

</template>

<style scoped lang="scss">
$colors:#8cc271 ,#69BEEB , #F5AA39,#E9643B;

     .test {
        width: 40px;
        height: 40px;
        margin-right: 10px;

        @for $i from 1 through length($colors) {
            &:nth-child(#{$i}) {
                background-color: nth($colors , $i );
            }
        }
        &:first-child {
            animation: left 1s infinite;
        }
          &:nth-child(4){
            animation: right 1s infinite .5s ;
        }
    }

    @keyframes left {
            40% {
                transform: translateX(+60px);
            }
            50% {
                transform: translateX(0);   
            }
    }
    @keyframes right {
            40% { 
                transform: translateX(-60px);
            }
            50% {
                transform: translateX(0);   
            }
    }
</style>