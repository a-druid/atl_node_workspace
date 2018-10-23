import NavMenu from '@/components/NavMenu/NavMenu.vue';
import Card from '@/components/Card/Card.vue';
import api from '@/api';
export default {
  name: 'Home',
  components: {
    NavMenu,Card
  },
  data() {
    return {
      activeIndex:'1',
      categoryInfo: {

      },
      yearsInfo: {
        
      }
    }
  },
  created() {
    api.getFirstCategory().then(res => {
      this.categoryInfo = res;
    })
    api.getYearsInfo().then(res => {
      this.yearsInfo = res;
    })
},

}