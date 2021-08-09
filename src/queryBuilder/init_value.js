export default {
    type: "group",
    id: "9a99988a-0123-4456-b89a-b1607f326fd8",
    children1: {
      "b9988bb9-89ab-4cde-b012-316f64df2a95": {
        type: "group",
        properties: {
          conjunction: "AND"
        },
        children1: {
          "a9a88b9a-4567-489a-bcde-f16f64df2a96": {
            type: "rule",
            properties: {
              field: "machineCount",
              operator: "greater_or_equal",
              value: [2],
              valueSrc: ["value"],
              valueType: ["number"]
            }
          },
          "abb98ba8-89ab-4cde-b012-316f64df7b8d": {
            type: "rule",
            properties: {
              field: "machineId",
              operator: "multiselect_equals",
              value: [["2", "3"]],
              valueSrc: ["value"],
              valueType: ["multiselect"]
            }
          }
        }
      },
      "988ba88b-4567-489a-bcde-f16f64dfbd2d": {
        type: "group",
        properties: {
          conjunction: "AND"
        },
        children1: {
          "89aaa898-0123-4456-b89a-b16f64dfbd2d": {
            type: "rule",
            properties: {
              field: "machineId",
              operator: "multiselect_not_equals",
              value: [["ET11", "ET34"]],
              valueSrc: ["value"],
              valueType: ["multiselect"]
            }
          },
          "abaa899a-4567-489a-bcde-f16f64e03c83": {
            type: "rule",
            properties: {
              field: "machineCount",
              operator: "less",
              value: [10],
              valueSrc: ["value"],
              valueType: ["number"]
            }
          }
        }
      },
      "99a99aa8-0123-4456-b89a-b16f64e0a512": {
        type: "group",
        properties: {
          conjunction: "AND"
        },
        children1: {
          "89bb9b9b-89ab-4cde-b012-316f64e0b3fa": {
            type: "group",
            properties: {
              conjunction: "AND"
            },
            children1: {
              "98989ab9-4567-489a-bcde-f16f64e0b3fa": {
                type: "rule",
                properties: {
                  field: "machineId",
                  operator: "multiselect_equals",
                  value: [["1"]],
                  valueSrc: ["value"],
                  valueType: ["multiselect"]
                }
              },
              "b98aa9b9-0123-4456-b89a-b16f64e0fce1": {
                type: "rule",
                properties: {
                  field: "machineCount",
                  operator: "not_between",
                  value: [7, 10],
                  valueSrc: ["value", "value"],
                  valueType: ["number", "number"]
                }
              }
            }
          },
          "abbba9b8-cdef-4012-b456-716f64e16f71": {
            type: "group",
            properties: {
              conjunction: "OR",
              not: true
            },
            children1: {
              "8b898998-89ab-4cde-b012-316f64e16f71": {
                type: "rule",
                properties: {
                  field: "machineCount",
                  operator: "not_equal",
                  value: [2],
                  valueSrc: ["value"],
                  valueType: ["number"]
                }
              },
              "ba9898ba-4567-489a-bcde-f16f64e1afd7": {
                type: "rule",
                properties: {
                  field: "machineId",
                  operator: "multiselect_equals",
                  value: [["ET23"]],
                  valueSrc: ["value"],
                  valueType: ["multiselect"]
                }
              }
            }
          }
        }
      }
    },
    properties: {
      conjunction: "AND",
      not: false
    }
  };
  