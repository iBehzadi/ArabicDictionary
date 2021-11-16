<script setup lang="ts">

const emit = defineEmits(['close']);
function close() {
    emit('close');
}
function closeModal() {
    document.querySelector(".modal")?.addEventListener("click", () => {
        close();
    })
    document.querySelector(".modal__content")?.addEventListener("click", (e) => {
        e.stopPropagation();
    })
}
</script>

<template>
    <div
        class="modal flex-center fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-30"
        @click="closeModal"
    >
        <div
            class="modal__content text-xs overflow-auto flex flex-col w-9/12 md:text-base lg:text-lg lg:w-8/12 lg:h-auto rounded-15 font-sans bg-white shadow-2md"
            role="dialog"
        >
            <header class="mt-4 mx-2 py-1 px-2">
                <slot name="body1"></slot>
            </header>
            <section class="py-1 px-2 mx-2">
                <slot name="body2"></slot>
            </section>
            <section class="py-1 px-2 mx-2">
                <slot name="body3"></slot>
            </section>
            <section class="py-1 px-2 mx-2">
                <slot name="body4"></slot>
            </section>

            <footer class="flex flex-col p-4">
                <button
                    aria-label="Close"
                    class="modal__close-button text-black p-2 bg-uniqColor rounded-md left-0 right-0"
                    @click="close"
                >
                    <slot name="button">بستن</slot>
                </button>
            </footer>
        </div>
    </div>
</template>

<style scoped>
</style>



