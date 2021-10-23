import { defineStore } from 'pinia'

export const useBrandStore = defineStore('brand', {
  // 声明state
  state: ()=>({
    // 品牌列表字段
    brandList: [
      { id: 1, name: '奔驰', ctime: '2020/09/23' },
      { id: 2, name: '宝马', ctime: '2020/09/21' },
      { id: 3, name: '长安', ctime: '2014/06/23' },
      { id: 4, name: '千里马', ctime: '2020/05/03' }
    ],
    // 双向绑定字段
    brand: {
      id: '',
      name: '',
      ctime: new Date().toLocaleDateString()
    },
    keywords: ""
  }),
  // 声明Getters
  getters: {
    searchResult(state){
      return state.brandList.filter(item =>item.name.includes(state.keywords));
    }
  },

  // 声明Actions
  actions: {
    addBrand(){
      this.brandList.push(this.brand);
      this.brand = {
        id: '',
        name: '',
        ctime: new Date().toLocaleDateString()
      }
    },
    delBrand(id) {
     this.brandList = this.brandList.filter(item => item.id !== id);
    }
  }
})