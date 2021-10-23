# brandManager

## 1. 渲染数据

### 1.1 步骤

1. 在App.vue组件中，引入userBrandStore、storeToRefs
2. 解构出brandList
3. 找到table中渲染品牌数据的tr标签，使用v-for指令渲染数据

### 1.2 代码

### 1.3 总结

## 2. 添加数据

### 2.1 步骤

1. 在`/stores/brandStore.js`中的state里面，声明编号和品牌名称字段
2. 在`App.vue`中，把`编号`和`品牌名称`和`对应的input`进行双向绑定
3. 给添加按钮，添加点击事件，并绑定`addBrand`处理方法
4. 在`/stores/brandStore.js`中定义`addBrand`方法

### 2.2 代码

### 2.3 总结

## 3. 删除数据

1. 在DOM结构中，找到`删除按钮`,给按钮添加点击事件并绑定`delBrand`传递id参数
2. 在`/stores/brandStore.js`中定义`delBrand`方法
3. 在 `delBrand`方法中，对state中的brandList进行遍历，找到和传来的id不一样的元素 并返回

## 4. 搜索数据

1. 在`/stores/brandStore.js`的state中定义`keywords`字段
2. 在`App.vue`中，把`keywords`和`对应的input`进行双向绑定
3. 在`/stores/brandStore.js`的getters中定义`searchResult`计算属性
4. 对brandList的每一项的`品牌名称`进行过滤，是否包含关键字，包含的饭后
5. 把表格数据中的brandList替换为`searchResult`
