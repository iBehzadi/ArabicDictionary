<script setup lang="ts">

const emit = defineEmits(['close']);
function close() {
    emit('close');
}

function closeModal() {
    document.querySelector(".modal-backdrop")?.addEventListener("click", () => {
        close();
    })
}
function stopPropagationOfModal() {
    document.querySelector(".modal")?.addEventListener("click", (e) => {
        e.stopPropagation();
    })
}
</script>

<template>
    <transition name="modal-fade">
        <div class="modal-backdrop" @click="closeModal">
            <div class="modal" role="dialog" @click="stopPropagationOfModal">
                <header class="modal-body mx-2">
                    <slot name="body1"></slot>
                </header>
                <section class="modal-body mx-2">
                    <slot name="body2"></slot>
                </section>
                <section class="modal-body mx-2">
                    <slot name="body3"></slot>
                </section>
                <section class="modal-body mx-2">
                    <slot name="body4"></slot>
                </section>

                <footer class="modal-footer">
                    <button type="button" class="btn-green rounded-md" @click="close">بستن</button>
                </footer>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background: #ffffff;
    box-shadow: 0px 1px 10px 0px;
    overflow-x: auto;
    display: flex;
    width: 40%;
    flex-direction: column;
    border-radius: 15px;
    font-family: Vazir;
}

.modal-header,
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-header {
    position: relative;
    justify-content: space-between;
}

.modal-footer {
    flex-direction: column;
}

.modal-body {
    position: relative;
    padding: 5px 10px;
}

.btn-close {
    position: absolute;
    top: 0;
    left: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #ffcc00;
    background: transparent;
}

.btn-green {
    color: #000;
    background: #ffcc00;
    border: 1px solid #ffcc00;
    padding: 5px;
}

.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.5s ease;
}
</style>



