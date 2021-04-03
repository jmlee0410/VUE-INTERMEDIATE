<template>
  <div id="app">
    
    <!-- <TodoInput v-on:addTodoItem="addOneItem"></TodoInput> -->
    <!-- <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList> -->
    <!-- <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter> -->
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>    
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>

import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

// TodoInput.methods.testMethod('mytest');

export default {

  components: {
    
    // 컴포넌트 태그명 : 컴포넌트 내용
    //'TodoFooter':  TodoFooter,
    //'TodoHeader': TodoHeader,
    //'TodoInput': TodoInput,
    //'TodoList': TodoList

    // 축약 가능
    TodoFooter,
    TodoHeader,
    TodoInput,
    TodoList
  }
}
</script>

<style>
body {
    text-align: center;
    background-color: #f6f6f6;
}
input {
    border-style: groove;
    width: 200px;
}
button {
    border-style: groove;
}
.shadow{
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
