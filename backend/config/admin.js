module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6602c4068902934519a282390f9ee528'),
  },
});
