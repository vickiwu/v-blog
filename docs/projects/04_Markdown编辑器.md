---
title: Markdown 编辑器
description: 在线 Markdown 编辑器，支持实时预览和导出
sidebar_position: 4
---

# Markdown 编辑器

一个功能强大的在线 Markdown 编辑器，支持实时预览、语法高亮和多种导出格式。

## 📝 项目简介

基于 React 开发的 Markdown 编辑器，提供流畅的编辑体验和丰富的功能。

## ✨ 主要特性

- **✍️ 实时预览** - 左右分屏，即时查看效果
- **🎨 语法高亮** - 代码块语法高亮显示
- **📥 导出功能** - 支持导出 HTML、PDF、Markdown
- **💾 自动保存** - 本地自动保存草稿
- **🔍 目录生成** - 自动生成文章目录
- **📋 快捷工具栏** - 常用格式快速插入
- **🌙 主题切换** - 多种编辑器主题

## 🛠️ 技术栈

```
前端框架: React 18
Markdown 解析: marked.js
代码高亮: highlight.js
编辑器: CodeMirror
PDF 导出: jsPDF
样式方案: Tailwind CSS
```

## 🎯 核心功能

### 编辑功能
- Markdown 语法支持
- 快捷键操作
- 撤销/重做
- 查找替换

### 预览功能
- 实时渲染
- 代码高亮
- 数学公式支持（KaTeX）
- 流程图支持（Mermaid）

### 工具栏
- 标题插入
- 列表插入
- 链接/图片插入
- 代码块插入
- 表格生成器

## 💻 核心代码

```typescript
import { marked } from 'marked';
import hljs from 'highlight.js';

// 配置 marked
marked.setOptions({
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value;
    }
    return hljs.highlightAuto(code).value;
  },
  breaks: true,
  gfm: true
});

// Markdown 编辑器组件
const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState('');
  const [html, setHtml] = useState('');
  
  useEffect(() => {
    // 实时转换 Markdown 为 HTML
    const converted = marked(markdown);
    setHtml(converted);
  }, [markdown]);
  
  return (
    <div className="editor-container">
      <textarea 
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="在这里输入 Markdown..."
      />
      <div 
        className="preview"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};
```

## 🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/vickiwu/markdown-editor.git

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 📱 功能演示

### 支持的 Markdown 语法

- **标题**: `# H1` 到 `###### H6`
- **强调**: `*斜体*` `**粗体**`
- **列表**: 有序列表和无序列表
- **链接**: `[文本](URL)`
- **图片**: `![alt](URL)`
- **代码**: 行内代码和代码块
- **表格**: GFM 表格语法
- **引用**: `> 引用文本`

### 导出格式

1. **Markdown** - 原始 .md 文件
2. **HTML** - 带样式的 HTML 文件
3. **PDF** - 格式化的 PDF 文档

## 💡 技术亮点

1. **性能优化** - 使用 debounce 优化实时预览
2. **本地存储** - IndexedDB 存储大文件
3. **快捷键** - 完整的键盘快捷键支持
4. **插件系统** - 支持自定义扩展

## 📈 未来计划

- [ ] 支持云端同步
- [ ] 添加协作编辑功能
- [ ] 集成图床服务
- [ ] 支持更多导出格式
- [ ] 添加模板库
- [ ] 支持 Vim/Emacs 模式

## 🔗 相关资源

- **Markdown 指南**: [markdown.com.cn](https://markdown.com.cn/)
- **marked.js**: [marked.js.org](https://marked.js.org/)
- **highlight.js**: [highlightjs.org](https://highlightjs.org/)

---

> 这是一个示例项目，你可以替换为你自己的实际项目。
