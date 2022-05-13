export default function generateProperty(indent = 0) {
  const comments = [
    `/**\n`,
    " * @property 属性名\n",
    " * @description 详细描述信息\n",
    " * @requires\n",
    " * @type 类型名 {@link 类型声明文件路径}\n",
    " */",
  ];

  const tab = (new Array(indent)).fill(" ", 0, indent).join("");

  return comments.map((comment) => tab + comment).join("");
}
