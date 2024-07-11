<template>
    <div class="info-box">
        <h3>{{ title }}</h3>
        <p>{{ caption }}</p>
    </div>

</template>

<script setup>
const props = defineProps({
    title: String,
    caption: String
})


</script>

<style scoped>
.info-box {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid var(--grey-color);
    width: 100%;
    height: max-content;
    padding: 1.5rem;
    transition: all 0.5s ease;
}

.info-box h3 {
    font-size: 1rem;
    text-transform: uppercase;
}

.info-box p {
    transition: all 0.5s ease;
}

.info-box:hover {
    background-color: var(--grey-color);
    transition: all 0.5s ease;
    cursor: pointer;
}

.info-box:hover p {
    transform: translateY(-5px);
    transition: all 0.5s ease;
}
</style>