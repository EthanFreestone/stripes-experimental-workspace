module.exports = {
  //okapi: { 'url': 'https://folio-snapshot-okapi.dev.folio.org', 'tenant': 'diku' },
  okapi: { 'url': 'https://folio-snapshot-2-okapi.dev.folio.org', 'tenant': 'diku' },
  config: {
    // autoLogin: { username: 'diku_admin', password: 'admin' }
    // logCategories: 'core,redux,connect,connect-fetch,substitute,path,mpath,mquery,action,event,perm,interface,xhr'
    // logPrefix: 'stripes'
    // logTimestamp: false
    // showPerms: false
    // listInvisiblePerms: false
    // disableAuth: false
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
