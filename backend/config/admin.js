module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd723cf55cac6fcf2b0cae2c03398f131'),
  },
});
