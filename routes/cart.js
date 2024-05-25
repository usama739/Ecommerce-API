const express = require('express');
const { createCart, addToCart, removeFromCart, getCart } = require('../controllers/cartController');
const { authMiddleware } = require('../middleware/authenticationMiddleware');
const router = express.Router();


/**
 * @swagger
 * /api/cart:
 *   post:
 *     summary: Create a new cart for a user
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *             properties:
 *               userId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Cart created successfully
 *       500:
 *         description: Internal Server Error
 */
router.post('/', authMiddleware, createCart);


/**
 * @swagger
 * /api/cart/add:
 *   post:
 *     summary: Add a product to the user's cart with a specified quantity
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cartId
 *               - productId
 *               - quantity
 *             properties:
 *               cartId:
 *                 type: integer
 *               productId:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Product added to cart successfully
 *       500:
 *         description: Internal Server Error
 */
router.post('/add', authMiddleware, addToCart);



/**
 * @swagger
 * /api/cart/remove:
 *   post:
 *     summary: Remove a product from the user's cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - productId
 *             properties:
 *               cartId:
 *                 type: integer
 *               productId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Product removed from cart successfully
 *       500:
 *         description: Internal Server Error
 */
router.post('/remove', authMiddleware, removeFromCart);



/**
 * @swagger
 * /api/cart/{userId}:
 *   get:
 *     summary: Retrieve the contents of the user's cart
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the user
 *     responses:
 *       200:
 *         description: Cart retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   cartId:
 *                     type: integer
 *                   productId:
 *                     type: integer
 *                   quantity:
 *                     type: integer
 *                   product:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                       price:
 *                         type: number
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal Server Error
 */
router.get('/:userId', authMiddleware, getCart);

module.exports = router;
