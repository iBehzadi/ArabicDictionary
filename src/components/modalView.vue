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
                <header class="modal-header">
                    <span>
                        <slot name="header"></slot>
                    </span>
                </header>

                <section class="modal-body">
                    <slot name="body"></slot>
                </section>

                <footer class="modal-footer">
                    <slot name="footer"></slot>
                    <button
                        type="button"
                        class="btn-green rounded-md"
                        @click="close"
                        aria-label="Close modal"
                    >بستن</button>
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
    font-family: Vazir;
}

.modal {
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    width: 40%;
    flex-direction: column;
    border-radius: 15px;
}

.modal-header,
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-header {
    position: relative;
    color: #ffcc00;
    justify-content: space-between;
}

.modal-footer {
    flex-direction: column;
}

.modal-body {
    position: relative;
    padding: 20px 10px;
}

.btn-green {
    color: white;
    background: #ffcc00;
    border: 1px solid #ffcc00;
    padding: 5px;
    color: #000;
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



