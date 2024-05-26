<script setup>
    import SlotOC from './SlotOC.vue';
    import SlotSC from './SlotSC.vue';
</script>

<template>
    <h1>这是父组件内容</h1>
    <!-- 子组件使用默认插槽内容 -->
    <SlotSC></SlotSC>
    <!-- 子组件使用普通文本内容作为插槽内容 -->
    <SlotSC>子组件使用普通文本内容作为插槽内容</SlotSC>
    <!-- 子组件使用父组件传递的HTML代码块作为插槽内容 -->
    <SlotSC>
        <div>
            <ul>
                <li>这是向子组件插槽中添加的一个复合HTML元素1</li>
                <li>这是向子组件插槽中添加的一个复合HTML元素2</li>
                <li>这是向子组件插槽中添加的一个复合HTML元素3</li>
            </ul>
        </div>
    </SlotSC>

    <!-- 子组件使用父组件传递进来的其他组件作为内容 -->
    <SlotSC>
        <SlotOC></SlotOC>
    </SlotSC>

</template>