import React from "react"
import merge from "lodash/merge"
import MaterialConfig from 'react-awesome-query-builder/lib/config/material'

import en_GB from "antd/lib/locale-provider/en_GB"

const chosenConfig = MaterialConfig

const conjunctions = {
  ...chosenConfig.conjunctions
}

const operators = {
  ...chosenConfig.operators,

  equal: {
    label: 'Equal to'
  },

  not_equal:{
    label: `Doesn't equal`
  },

  less_or_equal:{
    label: 'Less than or equals'
  },

  greater_or_equal: {
    label: 'More than or equals'
  },

  less: {
    label:'Less than'
  },

  greater:{
    label:'Greater than'
  },

  between: {
    ...chosenConfig.operators.between,
    valueLabels: ["Value from", "Value to"],
    textSeparators: ["from", "to"]
  },

  proximity: {
    ...chosenConfig.operators.proximity,
    valueLabels: [
      { label: "Word 1", placeholder: "Enter first word" },
      { label: "Word 2", placeholder: "Enter second word" }
    ],
    textSeparators: [
      //'Word 1',
      //'Word 2'
    ],
    options: {
      ...chosenConfig.operators.proximity.options,
      optionLabel: "Near", // label on top of "near" selectbox (for config.settings.showLabels==true)
      optionTextBefore: "Near", // label before "near" selectbox (for config.settings.showLabels==false)
      optionPlaceholder: "Select words between", // placeholder for "near" selectbox
      minProximity: 2,
      maxProximity: 10,
      defaults: {
        proximity: 2
      },
      customProps: {}
    }
  }
}

const widgets = {
  ...chosenConfig.widgets,
  text: {
    ...chosenConfig.widgets.text,
    validateValue: (val, fieldDef) => {
      return val.length < 10
    }
  },
  slider: {
    ...chosenConfig.widgets.slider,
    customProps: {
      width: "300px"
    }
  },
  rangeslider: {
    ...chosenConfig.widgets.rangeslider,
    customProps: {
      width: "300px"
    }
  },
  date: {
    ...chosenConfig.widgets.date,
    dateFormat: "DD.MM.YYYY",
    valueFormat: "YYYY-MM-DD"
  },
  time: {
    ...chosenConfig.widgets.time,
    timeFormat: "HH:mm",
    valueFormat: "HH:mm:ss"
  },
  datetime: {
    ...chosenConfig.widgets.datetime,
    timeFormat: "HH:mm",
    dateFormat: "DD.MM.YYYY",
    valueFormat: "YYYY-MM-DD HH:mm:ss"
  },
  func: {
    ...chosenConfig.widgets.func,
    customProps: {
      showSearch: true
    }
  }
}

const types = {
  ...chosenConfig.types,
  // examples of  overriding
  boolean: merge(chosenConfig.types.boolean, {
    widgets: {
      boolean: {
        widgetProps: {
          hideOperator: true,
          operatorInlineLabel: "is"
        }
      }
    }
  })
}

const localeSettings = {
  locale: {
    short: "en",
    full: "en_GB",
    antd: en_GB
  },
  valueLabel: "Value",
  valuePlaceholder: "Value",
  fieldLabel: "Field",
  operatorLabel: "Operator",
  fieldPlaceholder: "Select field",
  operatorPlaceholder: "Select operator",
  deleteLabel: null,
  addGroupLabel: "Add group",
  addRuleLabel: "Add rule",
  delGroupLabel: null,
  // notLabel: "Not",
  valueSourcesPopupTitle: "Select value source",
  removeRuleConfirmOptions: {
    title: "Are you sure delete this rule?",
    okText: "Yes",
    okType: "danger"
  },
  removeGroupConfirmOptions: {
    title: "Are you sure delete this group?",
    okText: "Yes",
    okType: "danger"
  }
}

const settings = {
  ...chosenConfig.settings,
  ...localeSettings,

  valueSourcesInfo: {
    value: {
      label: "Value"
    },
    field: {
      label: "Field",
      widget: "field"
    },
    func: {
      label: "Function",
      widget: "func"
    }
  },

  canReorder: true,
  canRegroup: true,
  showNot: true,
  showLabels: false,
  maxNesting: 5,
  canLeaveEmptyGroup: false,
}

//////////////////////////////////////////////////////////////////////

const fields = {
  user: {
    label: "User",
    tooltip: "Group of fields",
    type: "!struct",
    subfields: {
      firstName: {
        label2: "Username", //only for menu's toggler
        type: "text",
        excludeOperators: ["proximity"],
        mainWidgetProps: {
          valueLabel: "Name",
          valuePlaceholder: "Enter name",
          validateValue: (val, fieldDef) => {
            return val.length < 10
          }
        }
      },
      login: {
        type: "text",
        tableName: "t1", // PR #18, PR #20
        excludeOperators: ["proximity"],
        mainWidgetProps: {
          valueLabel: "Login",
          valuePlaceholder: "Enter login",
          validateValue: (val, fieldDef) => {
            return (
              val.length < 10 &&
              (val === "" || val.match(/^[A-Za-z0-9_-]+$/) !== null)
            )
          }
        }
      }
    }
  },
  prox1: {
    label: "prox",
    tooltip: "Proximity search",
    type: "text",
    operators: ["proximity"]
  },
  num: {
    label: "Number",
    type: "number",
    preferWidgets: ["number"],
    fieldSettings: {
      min: -1,
      max: 5
    },
    funcs: ["LINEAR_REGRESSION"]
  },
  slider: {
    label: "Slider",
    type: "number",
    preferWidgets: ["slider", "rangeslider"],
    valueSources: ["value", "field"],
    fieldSettings: {
      min: 0,
      max: 100,
      step: 1,
      marks: {
        0: <strong>0%</strong>,
        100: <strong>100%</strong>
      }
    },
    //overrides
    widgets: {
      slider: {
        widgetProps: {
          valuePlaceholder: "..Slider"
        }
      }
    }
  },
  date: {
    label: "Date",
    type: "date",
    valueSources: ["value"]
  },
  time: {
    label: "Time",
    type: "time",
    valueSources: ["value"],
    operators: ["greater_or_equal", "less_or_equal", "between"],
    defaultOperator: "between"
  },
  datetime: {
    label: "DateTime",
    type: "datetime",
    valueSources: ["value"]
  },
  datetime2: {
    label: "DateTime2",
    type: "datetime",
    valueSources: ["field"]
  },
  color: {
    label: "Color",
    type: "select",
    valueSources: ["value"],
    listValues: {
      yellow: "Yellow",
      green: "Green",
      orange: "Orange"
    }
  },
  color2: {
    label: "Color2",
    type: "select",
    listValues: {
      yellow: "Yellow",
      green: "Green",
      orange: "Orange",
      purple: "Purple"
    }
  },
  multicolor: {
    label: "Colors",
    type: "multiselect",
    listValues: {
      yellow: "Yellow",
      green: "Green",
      orange: "Orange"
    },
    allowCustomValues: true
  },

  stock: {
    label: "In stock",
    type: "boolean"
  },

  machineCount: {
    label: "Example Qty",
    type: "number",
    preferWidgets: ["number"],
    fieldSettings: {
      min: 0,
      max: 10
    }
  },
  machineId: {
    label: "Example ID",
    type: "multiselect",
    listValues: {
      1: "EX1",
      2: "EX2",
      3: "EX3"
    },
    allowCustomValues: true
  }
}

const funcs = {
  LOWER: {
    label: "Lowercase",
    mongoFunc: "$toLower",
    jsonLogic: ({ str }) => ({ method: [str, "toLowerCase"] }),
    returnType: "text",
    args: {
      str: {
        label: "String",
        type: "text",
        valueSources: ["value", "field"]
      }
    }
  },
  LINEAR_REGRESSION: {
    label: "Linear regression",
    returnType: "number",
    formatFunc: ({ coef, bias, val }, _) => `(${coef} * ${val} + ${bias})`,
    sqlFormatFunc: ({ coef, bias, val }) => `(${coef} * ${val} + ${bias})`,
    mongoFormatFunc: ({ coef, bias, val }) => ({
      $sum: [{ $multiply: [coef, val] }, bias]
    }),
    jsonLogic: ({ coef, bias, val }) => ({ "+": [{ "*": [coef, val] }, bias] }),
    renderBrackets: ["", ""],
    renderSeps: [" * ", " + "],
    args: {
      coef: {
        label: "Coef",
        type: "number",
        defaultValue: 1,
        valueSources: ["value"]
      },
      val: {
        label: "Value",
        type: "number",
        valueSources: ["value"]
      },
      bias: {
        label: "Bias",
        type: "number",
        defaultValue: 0,
        valueSources: ["value"]
      }
    }
  }
}

export default {
  conjunctions,
  operators,
  widgets,
  types,
  settings,
  fields,
  funcs
}
