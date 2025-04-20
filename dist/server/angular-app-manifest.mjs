
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 4713, hash: '9b48c5091aa09bff01c1d854667dad6377787b1c8e6e8b83ceab3b5fdb189444', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4913, hash: '1702f4758c6d08f06ad79bf0bc6e57aac55252d91a4a33e46a128867fae2c102', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-H6MBK45R.css': {size: 346, hash: 'ykoKSvPMyKM', text: () => import('./assets-chunks/styles-H6MBK45R_css.mjs').then(m => m.default)}
  },
};
