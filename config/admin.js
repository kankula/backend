module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd91041105768d8f8d6d4f4e5858fc0ac'),
  },
});
