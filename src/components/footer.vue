<template>
    <div>
        <footer>
            {{ content }}
        </footer>
    </div>
</template>

<script>
export default {
name: 'Footer',
props: {
    content: String
}
}
</script>

<style>
footer {
        background-color: black;
        padding: 20px;
        color: white;
    }
    h3 {
        margin: 0;
    }
</style>
