export function getFormModel() {
  return {
    useLand: [
      {
        index: '1',
        countyName: '区县名称',
        jurisdictionArea: '2000',
        bagNum: '分包号',
        node: '',
        countyNum: '',
        area: '',
        checkDate: '',
        accArea: '',
        accProportion: '',
        alreadyArea: '',
        accCheckArea: '',
        sampleArea: '',
        boundaryError: '',
        classificationError: '',
        remark: '完成第二批核查'
      }
    ]
  }
}

export function getFormSchema() {
  return [
    {
      category: '复垦区土地利用现状',
      children: [
        {
          type: 'formTable',
          span: 24,
          field: 'useLand',
          props: { border: false, showSummary: true },
          // suffix: 'hm²',
          spans: [
            { rowIndex: 0, columnIndex: 0, rowspan: 1, colspan: 1 },
            { rowIndex: 1, columnIndex: 1, rowspan: 1, colspan: 1 }
          ],
          columns: [
            {
              title: '序号',
              key: 'index',
              align: 'center',
              minWidth: 50
            },
            {
              title: '区县名称',
              key: 'countyName',
              align: 'center',
              minWidth: 100,
              customize: {
                type: 'text',
                props: {
                  disabled: false,
                  readonly: false,
                  min: 0,
                  max: Infinity,

                  placeholder: '请输入区县名称'
                },
                validate: [
                  { required: false, type: 'number', message: '请输入区县名称', trigger: 'blur' }
                ]
              }
            },
            {
              title: '辖区面积',
              key: 'jurisdictionArea',
              align: 'center',
              minWidth: 50,
              customize: {
                type: 'number',
                props: {
                  disabled: false,
                  readonly: false,
                  min: 0,
                  max: Infinity
                },
                validate: [
                  { required: false, type: 'number', message: '请输入辖区面积', trigger: 'blur' }
                ]
              }
            },
            {
              title: '分包号',
              key: 'bagNum',
              align: 'center',
              minWidth: 50,
              customize: {
                type: 'text',
                props: {
                  disabled: false,
                  readonly: false,
                  min: 0,
                  max: Infinity
                }
              }
            },
            {
              title: '业内信息提取节点',
              key: 'node',
              align: 'center',
              minWidth: 50,
              customize: {
                type: 'number',
                props: {
                  disabled: false,
                  readonly: false,
                  min: 0,
                  max: Infinity
                }
              }
            },
            {
              title: '第二次提交核查情况',
              align: 'center',
              children: [
                {
                  title: '乡镇数',
                  key: 'countyNum',
                  align: 'center',
                  minWidth: 80,
                  customize: {
                    type: 'number',
                    props: {
                      disabled: false,
                      readonly: false,
                      min: 0,
                      max: Infinity
                    }
                  }
                },
                {
                  title: '面积',
                  key: 'area',
                  align: 'center',
                  minWidth: 80,
                  customize: {
                    type: 'number',
                    props: {
                      disabled: false,
                      readonly: false,
                      min: 0,
                      max: Infinity,
                      placeholder: '面积'
                    }
                  }
                },
                {
                  title: '移交时间检查',
                  key: 'checkDate',
                  align: 'center',
                  minWidth: 100,
                  customize: {
                    type: 'date',
                    props: {
                      disabled: false,
                      readonly: false,
                      min: 0,
                      max: Infinity
                    }
                  }
                }
              ]
            },
            {
              title: '累计提交面积（%）',
              key: 'accArea',
              align: 'center',
              minWidth: 80,
              customize: {
                type: 'number'
              }
            },
            {
              title: '累计比例（%）',
              key: 'accProportion',
              align: 'center',
              minWidth: 80,
              customize: {
                type: 'number'
              }
            },
            {
              title: '第二批已核查面积（%）',
              key: 'alreadyArea',
              align: 'center',
              minWidth: 80,
              customize: {
                type: 'number'
              }
            },
            {
              title: '累计核查面积（km2）',
              key: 'accCheckArea',
              align: 'center',
              minWidth: 80,
              customize: {
                type: 'number'
              }
            },
            {
              title: '累计核查比例（%）',
              key: 'accCheckArea',
              align: 'center',
              minWidth: 80,
              customize: {
                type: 'number'
              }
            },
            {
              title: '第二批抽样1平方公里详查情况',
              key: 'index',
              align: 'center',
              children: [
                {
                  title: '抽样面积',
                  key: 'sampleArea',
                  align: 'center',
                  minWidth: 80,
                  customize: {
                    type: 'number',
                    props: {
                      disabled: false,
                      readonly: false,
                      min: 0,
                      max: Infinity
                    }
                  }
                },
                {
                  title: '分类错误率(%)',
                  key: 'boundaryError',
                  align: 'center',
                  minWidth: 80,
                  customize: {
                    type: 'number',
                    props: {
                      disabled: false,
                      readonly: false,
                      min: 0,
                      max: Infinity
                    }
                  }
                },
                {
                  title: '边界错误率(%)',
                  key: 'classificationError',
                  align: 'center',
                  minWidth: 80,
                  customize: {
                    type: 'number',
                    props: {
                      disabled: false,
                      readonly: false,
                      min: 0,
                      max: Infinity
                    }
                  }
                }
              ]
            },
            {
              title: '备注（全域核查的备注起）',
              key: 'remark',
              align: 'center',
              minWidth: 100
            }
          ]
        }
      ]
    }
  ]
}
