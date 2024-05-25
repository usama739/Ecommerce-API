const supabase = require('../config/supabase');

exports.placeOrder = async (req, res) => {
  const { userId } = req.body;

  const { data: cart, error: cartError } = await supabase
    .from('carts')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (cartError) {
    return res.status(500).json({ error: cartError.message });
  }


  const productIds = cart.products.map(product => product.product_id);

  const { data: products, error: productsError } = await supabase
    .from('products')
    .select('*')
    .in('id', productIds);

  if (productsError) {
    return res.status(500).json({ error: productsError.message });
  }

  const totalCost = cart.products.reduce((acc, item) => {
    const product = products.find(p => p.id === item.product_id);
    if (product) {
      return acc + item.quantity * product.price;
    } else {
      return acc;
    }
  }, 0);


  const { data: order, error: orderError } = await supabase
    .from('orders')
    .insert([{ user_id: userId, products: cart.products, total_cost: totalCost }]);

  if (orderError) {
    return res.status(500).json({ error: orderError.message });
  }

  const { data: updatedCart, error: updateError } = await supabase
    .from('carts')
    .update({ products: [] })
    .eq('user_id', userId);

  if (updateError) {
    return res.status(500).json({ error: updateError.message });
  }

  res.status(201).json({"message": "Order Placed Successfully"});
};



exports.getOrder = async (req, res) => {
  const { id } = req.params;

  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json(data);
};
