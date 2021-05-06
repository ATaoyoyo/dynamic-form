<template>
  <div class="dynamic-form-page">
    <DynamicForm title="表单标题" :model="model" :schema="schema" />
  </div>
</template>

<script>
import DynamicForm from '@/components/DynamicForm'
import { getFormModel, getFormSchema } from '@/view/default-form'

export default {
  name: 'dynamic-form-page',

  components: { DynamicForm },

  filters: {},

  props: {},

  data() {
    return {
      model: {},
      schema: []
    }
  },

  computed: {},

  watch: {},

  created() {
    this.model = getFormModel()
    this.schema = getFormSchema()
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
.dynamic-form-page {
  margin: 0 300px;
}
</style>
