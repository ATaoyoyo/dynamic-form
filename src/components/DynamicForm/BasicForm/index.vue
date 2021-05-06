<template>
  <div class="basic-form">
    <div class="basic-form-content">
      <div class="basic-form-content-schema">
        <Poptip v-if="schema.poptip" trigger="hover" width="120" :title="schema.title">
          <div class="basic-form-content-schema__title">
            <i v-if="schema.check">*</i>
            {{ schema.label }}
          </div>
        </Poptip>

        <div v-else class="basic-form-content-schema__title">
          <i v-if="schema.check">*</i>
          {{ schema.label }}
        </div>

        <div class="basic-form-content-schema__content">
          <FormItem :prop="schema.field">
            <Input
              v-if="schema.type === 'text'"
              v-model.trim="model[schema.field]"
              v-bind="schema.props"
            />

            <InputNumber
              v-else-if="schema.type === 'number'"
              style="width: 100%"
              v-model="model[schema.field]"
              v-bind="schema.props"
            />

            <CheckboxGroup
              v-else-if="schema.type === 'check'"
              v-model="model[schema.field]"
              v-bind="schema.props"
            >
              <Checkbox
                v-for="check in schema.options"
                v-bind="check.props"
                :key="check.label"
                :label="check.label"
              />
            </CheckboxGroup>

            <RadioGroup v-else-if="schema.type === 'radio'" v-model="model[schema.field]">
              <Radio
                v-for="radio in schema.options"
                v-bind="radio.props"
                :key="radio.label"
                :label="radio.label"
              />
            </RadioGroup>

            <DatePicker
              style="width: 100%"
              v-else-if="schema.type === 'date'"
              v-model="model[schema.field]"
              v-bind="schema.props"
            />

            <Select v-else-if="schema.type === 'select'" v-model="model[schema.field]">
              <Option v-for="select in schema.options" :value="select.value" :key="select.value">
                {{ select.label }}
              </Option>
            </Select>

            <Cascader
              v-else-if="schema.type === 'cascade'"
              v-model="model[schema.field]"
              :data="schema.data"
              v-bind="schema.props"
            />
          </FormItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basic-form',

  components: {},

  filters: {},

  props: {
    title: {
      type: String,
      default: 'title'
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

  mounted() {},

  updated() {},

  activated() {},

  deactivated() {},

  beforeDestroy() {},

  methods: {}
}
</script>

<style lang="less" scoped>
.basic-form {
  height: 100%;

  &-title {
    margin: 10px;
    text-align: center;
  }

  &-content {
    height: 100%;
    border-top: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-left: 1px solid #ddd;

    &-schema {
      display: flex;
      height: 100%;
      border-bottom: 1px solid #ddd;

      &__title {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        min-height: 30px;
        background-color: #eee;

        i {
          position: relative;
          right: 5px;
          font-size: 14px;
          font-weight: bold;
          color: red;
        }
      }

      &__content {
        flex: 1;
        display: flex;
        align-items: center;
        padding: 3px 5px;

        .ivu-form-item {
          flex: 1;
          margin: 3px;
        }
      }
    }
  }
}
</style>
