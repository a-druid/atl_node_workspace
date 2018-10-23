import api from '@/api'
export default {
  props: ['activeIndex'],
  data() {
    return {
      // activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      if (key == 1) {
        this.$router.push('/')
      }
      if (key == 2) {
        this.$router.push('/tab1')
      }
    }
  }
};