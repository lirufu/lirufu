const exercises = [
  {
    id: 'html',
    title: "HTML基础",
    description: "HTML标签和文档结构练习",
    path: "/exercises/html",
    content: (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">HTML基础练习</h2>
        <p className="mb-4">请创建一个包含标题、段落和图片的HTML页面</p>
        <pre className="bg-gray-100 p-4 rounded">
          {`<!DOCTYPE html>
<html>
<head>
  <title>我的页面</title>
</head>
<body>
  <h1>欢迎</h1>
  <p>这是一个段落</p>
</body>
</html>`}
        </pre>
      </div>
    )
  },
  {
    id: 'css',
    title: "CSS布局",
    description: "Flexbox和Grid布局练习",
    path: "/exercises/css"
  },
  {
    id: 'js',
    title: "JavaScript基础",
    description: "变量、函数和DOM操作练习",
    path: "/exercises/js"
  }
];

export { exercises };