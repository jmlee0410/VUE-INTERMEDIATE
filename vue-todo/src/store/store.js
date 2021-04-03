import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters'
// import * as mutations from './mutations'
import todoApp from './modules/todoApp'


Vue.use(Vuex);

// const storage = {
//     fetch() {
//         const arr = [];
//         if (localStorage.length > 0) {
//             for (let i = 0; i < localStorage.length; i++) {
//                 if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
//                     arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//                 }
//             }
//         }
//         return arr;
//     }
// };

export const store = new Vuex.Store({


    modules: {
        todoApp
    }

    // state: {
    //     todoItems: storage.fetch()
    // },
    // getters,
    // mutations



    // getters: {
    //     storedTodoItems(state) {
    //         return state.todoItems;
    //     }

    // },
    // mutations: {
    //     addOneItem(state, todoItem) {
    //         const obj = { completed: false, item: todoItem };
    //         localStorage.setItem(todoItem, JSON.stringify(obj));
    //         state.todoItems.push(obj);
    //     },
    //     removeOneItem(state, payload) {
    //         localStorage.removeItem(payload.todoItem.item);
    //         state.todoItems.splice(payload.index, 1);
    //     },
    //     toggleOneItem(state, payload) {
    //         state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    //         localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    //     },
    //     clearAllItems(state) {
    //         localStorage.clear();
    //         state.todoItems = [];
    //     }
    // }

});