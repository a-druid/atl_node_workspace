import NavMenu from '@/components/NavMenu/NavMenu.vue';
import Card from '@/components/Card/Card.vue';
import Footer from '@/components/Footer/Footer.vue';

export default {
  name: 'Home',
  components: {
    NavMenu,Card,Footer
  },
  data() {
    return {
      activeName: 'name1'
    };
  }
}