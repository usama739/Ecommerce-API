const supabase = require('../config/supabase');

exports.createProduct = async (req, res) => {
  const { name, description, price, category } = req.body;

  const { data, error } = await supabase
    .from('products')
    .insert([{ name, description, price, category }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json({ message: 'Product created successfully' });
};

exports.getProducts = async (req, res) => {
  const { category } = req.query;

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', category);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json(data);
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const { data, error } = await supabase
    .from('products')
    .update(updates)
    .eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ message: 'Product updated successfully' });
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('products')
    .delete()
    .eq('id', id);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ message: 'Product deleted successfully' });
};
