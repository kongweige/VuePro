<script setup>
    // 定义用于接收数据的属性
    defineProps(["data"])
    // 自定义事件
    const emit = defineEmits(["delData"])
    // 删除数据的响应方法
    function deleteData(item){
        // console.log("deleteData:",item)

        // 子组件无法直接删除父组件中传递的数据，需要向父组件发送一个事件，让父组件代为删除
        emit("delData",item)
    }
</script>


<template>
    <div class="rsc">
       <table>
            <tr>
                <th>编号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>操作</th>
            </tr>
            
            <tr v-for="item in data" :key="item.sid">
                <td> {{ item.sid }}</td>
                <td> {{ item.name }}</td>
                <td> {{ item.age }}</td>
                <!-- <td>  <button @click="deleteData(item)">删除</button> </td> -->
                <!-- 不能在自定义事件中使用 -->
                <td>  <button @click="$emit('delData',item)">删除</button> </td>               
            </tr>

       </table>
    </div>

</template>