const supabase = require('../config/supabase');
const bcrypt = require('bcryptjs');

exports.authMiddleware = async (req, res, next) => {
  const { email, password } = req.headers;
  if (!email || !password) {
    return res.status(401).json({ error: 'Unauthorized: Missing email or password' });
  }

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (error || !data) {
    return res.status(401).json({ error: 'Unauthorized: Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, data.password);
  if (!isMatch) {
    return res.status(401).json({ error: 'Unauthorized: Invalid credentials' });
  }

  req.user = data.id;
  next();
};
