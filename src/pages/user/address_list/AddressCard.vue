<template>
    
</template>
<script>
  import S from 'service';
  const props = ['item', 'edit',];
  const events = {
      CHECK_CLICK: 'check-click',
      DELETE: 'delete'
    };
  export default {
    props: props,
    components: { 
       
    },

    data() {
        return {
            
            
        };
     
    },
    methods: {
      select(index) {
        this.$dispatch(events.CHECK_CLICK, item );
       
      },
       delete(item) {
        this.$dispatch(events.DELETE, item);
      },
      init() {
       
      },
     
  },
    ready() {
        
        this.init();

        
    }
  };   

</script>
