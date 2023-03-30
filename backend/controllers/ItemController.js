const itemModel = require("../models/ItemSchema");

const addItemController = async (req, res) => {
  try {
    const { product, value, validateProduct, size, createdAt } = req.body;
    const userId = req.id;
    await itemModel.create({
      product,
      value,
      validateProduct,
      size,
      createdAt,
      userId,
    });

    res.status(201).json({ message: "Produto criado com sucesso!" });
    return;
  } catch (error) {
    res.status(400).json({
      error: "Você cometeu algum erro, veja os passos e tente novamente",
    });
  }
};

const getItemController = async (req, res) => {
  try {
    const userId = req.id;
    const products = await itemModel.find({ userId });
    if (!products) {
      res
        .status(404)
        .json({ error: "Você não possui nenhum produto cadastrado" });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      error: "Ocorreu algum erro, tente novamente mais tarde",
    });
  }
};

const updateItemController = async (req, res) => {
  try {
    const { id } = req.params;
    const { product, value, validateProduct, size } = req.body;

    const newProduct = await itemModel.findByIdAndUpdate(id, {
      product,
      value,
      validateProduct,
      size,
    });

    if (!newProduct) {
      res.status(404).json({ error: "Produto não encontrado" });
      return;
    }

    res.status(200).json({ message: "Produto atualizado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Ocorreu algum erro, tente novamente mais tarde" });
    console.log(error);
  }
};

const deleteItemController = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await itemModel.findByIdAndDelete(id);

    if (!deletedProduct) {
      res.status(404).json({ error: "Produto não encontrado" });
      return;
    }

    res.status(200).json({ message: "Produto deletado com sucesso" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Ocorreu algum erro, tente novamente mais tarde" });
  }
};

module.exports = {
  addItemController,
  getItemController,
  updateItemController,
  deleteItemController,
};
