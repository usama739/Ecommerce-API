const express = require('express');
const { placeOrder, getOrder } = require('../controllers/orderController');
const { authMiddleware } = require('../middleware/authenticationMiddleware');
const router = express.Router();


/**
 * @swagger
 * /api/order:
 *   post:
 *     summary: Place an order by converting the contents of the user's cart into an order
 *     tags: [Order]
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
 *         description: Order placed successfully
 *       404:
 *         description: User or cart not found
 *       500:
 *         description: Internal Server Error
 */
router.post('/', authMiddleware, placeOrder);



/**
 * @swagger
 * /api/order/{id}:
 *   get:
 *     summary: Retrieve order details by order ID
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The ID of the order
 *     responses:
 *       200:
 *         description: Order retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 userId:
 *                   type: integer
 *                 totalCost:
 *                   type: number
 *                 products:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       productId:
 *                         type: integer
 *                       name:
 *                         type: string
 *                       price:
 *                         type: number
 *                       quantity:
 *                         type: integer
 *       404:
 *         description: Order not found
 *       500:
 *         description: Internal Server Error
 */
router.get('/:id', authMiddleware, getOrder);

module.exports = router;
