const supabase = require('../config/supabase');

exports.createCart = async (req, res) => {
  const { userId } = req.body;

  const { data, error } = await supabase
    .from('carts')
    .insert([{ user_id: userId, products: [] }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json({"message": "Cart created successfully"});
};

exports.addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  let { data: cart, error } = await supabase
    .from('carts')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  const productIndex = cart.products.findIndex(p => p.product_id === productId);
  if (productIndex > -1) {
    cart.products[productIndex].quantity += quantity;
  } else {
    cart.products.push({ product_id: productId, quantity });
  }

  const { data, updateError } = await supabase
    .from('carts')
    .update({ products: cart.products })
    .eq('user_id', userId);

  if (updateError) {
    return res.status(500).json({ error: updateError.message });
  }

  res.status(201).json({"message": "Product added to cart successfully"});
};

exports.removeFromCart = async (req, res) => {
  const { userId, productId } = req.body;

  let { data: cart, error } = await supabase
    .from('carts')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  cart.products = cart.products.filter(p => p.product_id !== productId);

  const { data, updateError } = await supabase
    .from('carts')
    .update({ products: cart.products })
    .eq('user_id', userId);

  if (updateError) {
    return res.status(500).json({ error: updateError.message });
  }

  res.status(200).json({"message": "Product removed successfully"});
};

exports.getCart = async (req, res) => {
  const { userId } = req.params;

  const { data, error } = await supabase
    .from('carts')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
};
