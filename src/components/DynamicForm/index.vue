<template>
  <div class="dynamic-form">
    <h1 class="dynamic-form-title">{{ title }}</h1>
    <Form ref="formValidate" :model="model">
      <div v-for="item in schema" :key="item.label">
        <h3 class="dynamic-form-item__title">{{ item.title }}</h3>

        <Row>
          <Col v-for="schema in item.schemaChildren" :key="schema.field" :span="schema.span">
            <DynamicFormItem :model="model" :schema="schema" />
          </Col>
        </Row>
      </div>
    </Form>
  </div>
</template>

<script>
import DynamicFormItem from './DynamicFormItem'

export default {
  name: 'dynamic-form',

  components: { DynamicFormItem },

  filters: {},

  props: {
    title: {
      type: String,
      default: 'Form Title'
    },
    model: {
      type: Object,
      default() {
        return {}
      }
    },
    schema: {
      type: Array,
      default() {
        return []
      }
    }
  },

  data() {
    return {}
  },

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  updated() {},

  activated() {},

  deactivated() {},

  beforeDestroy() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.dynamic-form {
  &-title {
    text-align: center;
  }
  &-item__title {
    text-align: center;
  }
}
</style>
