import { Router } from 'express'
import ProductsManager from '../dao/mongoManagers/productsManager.js'

const productsRouter = Router()

const productsManager = new ProductsManager()

productsRouter.get('/', async (req, res) => {
  try {
    const products = await productsManager.getProducts()
    res.json(products)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
 }
)

productsRouter.get('/:id', async (req, res) => {
  try {
    const product = await productsManager.getProductById(req.params.id)
    res.json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
 }
)

productsRouter.post('/', async (req, res) => {
  try {
    const product = await productsManager.addProduct(req.body)
    res.json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
 }
)

productsRouter.put('/:id', async (req, res) => {
  try {
    const product = await productsManager.updateProduct(req.params.id, req.body)
    res.json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
 }
)

productsRouter.delete('/:id', async (req, res) => {
  try {
    const product = await productsManager.deleteProduct(req.params.id)
    res.json(product)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
 }
)

export default productsRouter
