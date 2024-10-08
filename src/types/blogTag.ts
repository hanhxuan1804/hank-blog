export const BlogTagOptions = [
  'react',
  'next',
  'pre-dev',
  'dev',
  'high-dev',
  'pro-dev',
  'expert',
  'engineer',
  'frontend',
  'backend',
  'fullstack',
  'devops',
  'testing',
  'security',
  'performance',
  'design',
  'ui',
  'ux',
  'design-systems',
  'design-tokens',
  'design-patterns',
  'design-principles',
  'design-thinking',
  'design-architecture',
  'design-techniques',
  'design-strategies',
  'javascript',
  'typescript',
  'flow',
  'babel',
  'webpack',
  'rollup',
  'parcel',
  'esbuild',
  'svelte',
  'vue',
  'angular',
  'react-native',
  'expo',
  'web-components',
  'polymer',
  'stencil',
  'c++',
  'c#',
  'java',
  'python',
  'ruby',
  'php',
  'go',
  'rust',
  'kotlin',
  'dart',
  'swift',
  'objective-c',
  'sql',
  'nosql',
  'graphql',
  'rest',
  'http',
  'websockets',
  'grpc',
  'webassembly',
  'asm',
  'wasm',
  'webgl',
  'threejs',
  'babylonjs',
  'unity',
] as const;

export type BlogTag = (typeof BlogTagOptions)[number];
