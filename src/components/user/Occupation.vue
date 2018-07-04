<template>
        <div class="m-occupation">
            <router-view message="occupation"></router-view>
        </div>
    </template>
    <script>
        export default {
            name: 'Occupation',
            data() {
                return {
                    // value: this.$route.query.value
                }
            }
        }
    </script>