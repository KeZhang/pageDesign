const defaultData = {
  style: {
    left: "0px",
  },
  gridSizeList: [
    {
      width: 0,
      height: 0,
      value: "无",
    },
    {
      width: 10,
      height: 10,
      value: "10x10",
    },
    {
      width: 20,
      height: 20,
      value: "20x20",
    },
    {
      width: 50,
      height: 50,
      value: "50x50",
    },
    {
      width: 75,
      height: 75,
      value: "75x75",
    },
    {
      width: 100,
      height: 100,
      value: "100x100",
    },
  ],
  gridSizeIndex: 0,
  showGridSizeList: false,
  showMenuBg: false,
  menuList: {
    left: 0,
    top: 0,
    list: [],
  },
  widgetMenu: [
    {
      type: "copy",
      text: "复制",
    },
    {
      type: "paste",
      text: "粘贴",
    },
    {
      type: "index-up",
      text: "上移一层",
    },
    {
      type: "index-down",
      text: "下移一层",
    },
    {
      type: "del",
      text: "删除",
    },
  ],
  pageMenu: [
    {
      type: "paste",
      text: "粘贴",
    },
  ],
  fillInfoing: false,
  message: {
    1: "生成封面图",
    2: "填写模板信息",
    3: "发布模板",
  },
  active: {
    1: 0,
    2: 1,
    3: 2,
  },
  fillStep: 1,
  formParams: {},
  title: "",
  publishing: false,
  templateIndex: 0,
  templateList: [1, 2, 3],
}

export {
  defaultData
}