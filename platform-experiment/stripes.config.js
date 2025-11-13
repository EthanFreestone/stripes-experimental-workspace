module.exports = {
  //okapi: { 'url': 'https://folio-snapshot-okapi.dev.folio.org', 'tenant': 'diku' },
  okapi: { 'url': 'https://folio-snapshot2-okapi.dev.folio.org', 'tenant': 'diku' },
  config: {
    // autoLogin: { username: 'diku_admin', password: 'admin' }
    // logCategories: 'core,redux,connect,connect-fetch,substitute,path,mpath,mquery,action,event,perm,interface,xhr'
    // logPrefix: 'stripes'
    // logTimestamp: false
    // showPerms: false
    showHomeLink: true,
    // listInvisiblePerms: false
    // disableAuth: false
    welcomeMessage: 'ui-experiment-vue-stripes.front.welcome',
    platformName: 'experimental',
    platformDescription: 'Experimental platform',
    showDevInfo: true,
    staleBundleWarning: { path: '/index.html', header: 'last-modified', interval: 5 },
    disableStrictMode: true, // FIXME this is turned off because with it on Panes behave incredibly stupidly
    useSecureTokens: true,
  },
  modules: {
    '@folio/users': {},
    '@folio/developer': {},
    "@folio/service-interaction": {},
    "@folio/stripes-erm-components": {},
    "@folio/tenant-settings": {},
    '@k-int/vue-experiment-stripes': {},
  },
  branding: {
  }
};
