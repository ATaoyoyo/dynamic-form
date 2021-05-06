export const getFormModel = () => {
  return {
    input: '',
    input2: '',
    input3: '',
    input4: 9527,
    check: ['西瓜'],
    radio: '金斑蝶',
    date: '2021-05-06',
    select: 'New York',
    cascade: ''
  }
}

export const getFormSchema = () => {
  return [
    {
      title: 'Test Form Title',
      schemaChildren: [
        {
          label: '输入框',
          type: 'text',
          field: 'input',
          span: 12,
          props: { disabled: false, readonly: false, placeholder: 'write your text...' }
        },
        {
          label: '数字输入框',
          type: 'text',
          field: 'input2',
          span: 12,
          props: { disabled: false, readonly: false, placeholder: 'write your text...' }
        },
        {
          label: '多行输入',
          type: 'text',
          field: 'input3',
          span: 24,
          check: true,
          props: {
            type: 'textarea',
            disabled: false,
            readonly: false,
            placeholder: 'write your text...'
          }
        },
        {
          label: '数字输入',
          type: 'number',
          field: 'input4',
          span: 8,
          props: {
            disabled: false,
            readonly: false,
            placeholder: 'write your text...'
          }
        },
        {
          label: '多选框',
          type: 'check',
          field: 'check',
          span: 8,
          options: [
            { label: '香蕉' },
            { label: '苹果', props: { disabled: true } },
            { label: '西瓜' }
          ],
          props: { disabled: false }
        },
        {
          label: '单选框',
          type: 'radio',
          field: 'radio',
          span: 8,
          options: [
            { label: '金斑蝶' },
            { label: '犀牛', props: { disabled: true } },
            { label: '黑羚' }
          ]
        },
        {
          label: '日期选择',
          type: 'date',
          field: 'date',
          span: 8,
          props: { format: 'yyyy-MM-dd', placeholder: 'select date...' }
        },
        {
          label: '选择框',
          type: 'select',
          field: 'select',
          span: 8,
          options: [
            {
              value: 'New York',
              label: 'New York'
            },
            {
              value: 'London',
              label: 'London'
            },
            {
              value: 'Sydney',
              label: 'Sydney'
            },
            {
              value: 'Ottawa',
              label: 'Ottawa'
            },
            {
              value: 'Paris',
              label: 'Paris'
            },
            {
              value: 'Canberra',
              label: 'Canberra'
            }
          ],
          props: { disabled: false }
        },
        {
          label: '级联选择',
          type: 'cascade',
          span: 8,
          props: { trigger: 'hover' },
          data: [
            {
              value: 'beijing',
              label: '北京',
              children: [
                {
                  value: 'gugong',
                  label: '故宫'
                },
                {
                  value: 'tiantan',
                  label: '天坛'
                },
                {
                  value: 'wangfujing',
                  label: '王府井'
                }
              ]
            },
            {
              value: 'jiangsu',
              label: '江苏',
              children: [
                {
                  value: 'nanjing',
                  label: '南京',
                  children: [
                    {
                      value: 'fuzimiao',
                      label: '夫子庙'
                    }
                  ]
                },
                {
                  value: 'suzhou',
                  label: '苏州',
                  children: [
                    {
                      value: 'zhuozhengyuan',
                      label: '拙政园'
                    },
                    {
                      value: 'shizilin',
                      label: '狮子林'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
