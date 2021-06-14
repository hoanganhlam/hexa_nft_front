export default async function (context, inject) {
   const $auth = {};
   const logout = async () => {
      await setToken(null);
      await setUser(null);
   };
   const login = async (credential) => {
      let res = await context.$axios.$post('/auth/rest-auth/login/', credential).catch(e => {
         console.log(e);
      });
      if (res) {
         await setToken(res['token']);
         let user = await getUser();
         await setUser(user);
      }
   };
   const getUser = async () => {
      try {
         return await context.$axios.$get('/auth/users/me/');
      } catch (e) {
         if (e.response && e.response.status === 401) {
            await logout();
         }
         return null;
      }
   };
   const getToken = async () => {
      let token;
      if (process['server'] && context.req.headers.cookie) {
         const parsed = cookieparser.parse(context.req.headers.cookie);
         token = parsed['auth.token'];
      } else {
         token = context.store.$ck.get('auth.token');
      }
      return token;
   };
   const setToken = async (token) => {
      if (token) {
         context.$axios.setHeader('Authorization', 'JWT ' + token);
         context.store.$ck.set('auth.token', token, {
            maxAge: 60 * 60 * 24 * 7,
            path: '/'
         });
      } else {
         context.$axios.setHeader('Authorization', undefined);
         context.store.$ck.remove('auth.token');
      }
      await context.store.commit('auth/SET_TOKEN', token);
   };
   const setUser = async (user) => {
      await context.store.commit('auth/SET_USER', user);
   };
   const init = async () => {

   };
   await init();
   $auth.login = login;
   $auth.logout = logout;
   context.$auth = $auth;
   inject('auth', $auth);
}
