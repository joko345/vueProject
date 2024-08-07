<template>
    <div class="user_profile">
        <h3>User information</h3>
        <ul>
            <li>
                <span>Name: </span> {{ name }}
            </li>
            <li>
                <span>Last Name:</span> {{ last }}
            </li>
            <li>
                <span>hardcode Name:</span> {{ hardcode }}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props:[ 'name', 'last', 'hardcode' ]//mengambil value dari app.vue 
    }
</script>