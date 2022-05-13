export default function generateEvent(indent = 0) {
  const comments = [
    `/**\n`,
    " * @event 事件名\n",
    " * @description 详细描述信息\n",
    " * @detail 返回值类型名 {@link 类型声明文件路径}\n",
    " */",
  ];

  const tab = (new Array(indent)).fill(" ", 0, indent).join("");

  return comments.map((comment) => tab + comment).join("");
}
