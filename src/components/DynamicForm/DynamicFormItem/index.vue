<script>
import BasicForm from '../BasicForm'
export default {
  name: 'dynamic-form-item',

  components: { BasicForm },

  filters: {},

  props: {
    title: {
      type: String,
      default() {
        return 'title'
      }
    },
    schema: {
      type: Object,
      default() {
        return []
      }
    },
    model: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  data() {
    return {}
  },

  computed: {},

  watch: {},

  created() {},

  render: function (h) {
    const { title, schema, model } = this
    const { type, className } = schema
    let formComponent
    if (['text', 'number', 'check', 'radio', 'date', 'select', 'cascade'].includes(type)) {
      formComponent = BasicForm
    }

    return h(formComponent, {
      class: className ? className : '',
      props: { title, schema, model },
      on: this.$listeners
    })
  },

  mounted() {},

  updated() {},

  activated() {},

  deactivated() {},

  beforeDestroy() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.dynamic-form-item {
}
</style>
