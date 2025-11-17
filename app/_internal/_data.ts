// This is a mock database used to simplify parts of the app not
// relevant to the demo. In a real app, this data would live in
// a relational database like PostgreSQL or MySQL, accessed through
// a database client or ORM.

export type Product = {
  id: string;
  name: string;
  image: string;
  category: string;
  price: number;
};

export type Section = {
  id: string;
  name: string;
  slug: string;
  categories: string[];
};

export type Category = {
  id: string;
  name: string;
  section: string;
  slug: string;
  products: string[];
};

export type Demo = {
  slug: string;
  name: string;
  nav_title?: string;
  description: string;
};

export type DemoCategory = { name: string; items: Demo[] };

const sections: Section[] = [
  { id: '1', name: '服装', slug: 'clothing', categories: ['1', '2', '3'] },
  {
    id: '2',
    name: '电子产品',
    slug: 'electronics',
    categories: ['4', '5', '6'],
  },
  { id: '3', name: '运动', slug: 'sports', categories: ['7', '8', '9'] },
];

const categories: Category[] = [
  { id: '1', name: '上衣', slug: 'tops', section: '1', products: ['1'] },
  { id: '2', name: '短裤', slug: 'shorts', section: '1', products: ['2'] },
  { id: '3', name: '鞋子', slug: 'shoes', section: '1', products: ['3'] },
  { id: '4', name: '手机', slug: 'phones', section: '2', products: ['4'] },
  {
    id: '5',
    name: '笔记本电脑',
    slug: 'laptops',
    section: '2',
    products: ['5'],
  },
  { id: '6', name: '平板', slug: 'tablets', section: '2', products: ['6'] },
  { id: '7', name: '球', slug: 'balls', section: '3', products: ['7'] },
  { id: '8', name: '设备', slug: 'equipment', section: '3', products: ['8'] },
  { id: '9', name: '配件', slug: 'accessories', section: '3', products: ['9'] },
];

const products: Product[] = [
  { id: '1', name: '上衣', image: 'top.png', category: '1', price: 29.99 },
  { id: '2', name: '短裤', image: 'shorts.png', category: '2', price: 39.99 },
  { id: '3', name: '鞋子', image: 'shoes.png', category: '3', price: 89.99 },

  { id: '4', name: '手机', image: 'phone.png', category: '4', price: 699.99 },
  {
    id: '5',
    name: '笔记本电脑',
    image: 'laptop.png',
    category: '5',
    price: 1299.99,
  },
  { id: '6', name: '平板', image: 'tablet.png', category: '6', price: 499.99 },
  { id: '7', name: '篮球', image: 'balls.png', category: '7', price: 24.99 },
  { id: '8', name: '配重', image: 'weights.png', category: '8', price: 149.99 },
  { id: '9', name: '手套', image: 'gloves.png', category: '9', price: 19.99 },
];

const demos = [
  {
    name: '布局',
    items: [
      { slug: 'layouts', name: '嵌套布局', description: '创建跨路由共享的 UI' },
      {
        slug: 'route-groups',
        name: '路由组',
        description: '在不影响 URL 路径的情况下组织路由',
      },
      {
        slug: 'parallel-routes',
        name: '并行路由',
        description: '在同一布局中渲染多个页面',
      },
    ],
  },
  {
    name: '文件约定',
    items: [
      {
        slug: 'loading',
        name: '加载中',
        description: '创建有意义的加载中界面以适应应用的特定部分',
      },
      {
        slug: 'error',
        name: '错误',
        description: '为应用的特定部分创建错误界面',
      },
      {
        slug: 'not-found',
        name: '未找到',
        description: '为应用的特定部分创建未找到界面',
      },
    ],
  },
  {
    name: '缓存',
    items: [
      {
        slug: 'cached-routes',
        name: '缓存的路由片段',
        nav_title: '缓存的路由',
        description: '缓存路由片段的渲染输出',
      },
      {
        slug: 'cached-components',
        name: '缓存的 React 服务器组件',
        nav_title: '缓存的组件',
        description: '缓存单个 React 服务器组件的渲染输出',
      },
      {
        slug: 'cached-functions',
        name: '缓存的函数',
        description: '缓存普通函数的计算结果',
      },
      {
        slug: 'remote-cache',
        name: '远程缓存',
        description:
          'Cache data at runtime with use cache: remote in dynamic contexts',
      },
      {
        slug: 'private-cache',
        name: '私有缓存',
        description:
          'Cache user-specific data with use cache: private using cookies and headers',
      },
    ],
  },
  {
    name: 'APIs',
    items: [
      {
        slug: 'use-link-status',
        name: 'useLinkStatus',
        description: '为链接交互创建内联视觉反馈',
      },
    ],
  },
  {
    name: '杂项',
    items: [
      {
        slug: 'view-transitions',
        name: '视图过渡',
        description: '使用动画帮助用户理解两个视图之间的关系',
      },
      {
        slug: 'context',
        name: '客户端上下文',
        description: '在跨越服务器/客户端组件边界的客户端组件之间传递上下文',
      },
    ],
  },
] as const satisfies DemoCategory[];

export type DemoSlug = (typeof demos)[number]['items'][number]['slug'];

export const data = { sections, categories, products, demos };
