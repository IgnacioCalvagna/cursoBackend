const adminErrorMsj = "No posees las credenciales para realizar esta operación";
const admin = true;

const validarAdmin = (req, res, next) => {
  admin ? next() : res.status(403).json({ error: adminErrorMsj });
  return admin;
};
module.exports = validarAdmin;
