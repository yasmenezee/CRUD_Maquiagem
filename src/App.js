import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({
    id: null,
    brand: "",  // Alterado de 'name' para 'brand'
    category: "",
    price: "",
    expiryDate: "",
  });

  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem("makeup-products")) || [];
    setProducts(savedProducts);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...currentProduct,
      price: parseFloat(currentProduct.price),
      id: currentProduct.id || Date.now(),
    };
    const updatedProducts = currentProduct.id
      ? products.map((p) => (p.id === currentProduct.id ? newProduct : p))
      : [...products, newProduct];
    localStorage.setItem("makeup-products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
    setCurrentProduct({ id: null, brand: "", category: "", price: "", expiryDate: "" });
  };

  const deleteProduct = (id) => {
    if (window.confirm("Excluir este produto?")) {
      const updatedProducts = products.filter((product) => product.id !== id);
      localStorage.setItem("makeup-products", JSON.stringify(updatedProducts));
      setProducts(updatedProducts);
    }
  };

  return (
    <div className="container my-4">
      <header className="header mb-4">
        <h1 className="text-center text-white py-3">Crud de Makes</h1>
      </header>

      <div className="mb-5">
        <h2>{currentProduct.id ? "Editar" : "Adicionar"} Produto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Marca:</label> {/* Alterado de 'Nome' para 'Marca' */}
            <input
              type="text"
              name="brand"  
              value={currentProduct.brand}
              onChange={handleInputChange}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Categoria:</label>
            <select
              name="category"
              value={currentProduct.category}
              onChange={handleInputChange}
              required
              className="form-control"
            >
              <option value="">Selecione...</option>
              <option value="Batom">Batom</option>
              <option value="Base">Base</option>
              <option value="Paleta">Paleta de Sombras</option>
              <option value="Rímel">Rímel</option> {/* Nova categoria */}
              <option value="Lábios">Lábios</option> {/* Nova categoria */}
              <option value="Pó Compacto">Pó Compacto</option> {/* Nova categoria */}
              <option value="Blush">Blush</option> {/* Nova categoria */}
            </select>
          </div>

          <div className="mb-3">
            <label>Preço (R$):</label>
            <input
              type="number"
              name="price"
              value={currentProduct.price}
              onChange={handleInputChange}
              required
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Data de Validade:</label>
            <input
              type="date"
              name="expiryDate"
              value={currentProduct.expiryDate}
              onChange={handleInputChange}
              required
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            {currentProduct.id ? "Atualizar" : "Salvar"}
          </button>
        </form>
      </div>

      <div>
        <h2>Lista de Produtos</h2>
        {products.length === 0 ? (
          <p>Nenhum produto cadastrado.</p>
        ) : (
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Marca</th> {/* Alterado de 'Nome' para 'Marca' */}
                <th>Categoria</th>
                <th>Preço</th>
                <th>Validade</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.brand}</td> {/* Alterado para 'brand' */}
                  <td>{product.category}</td>
                  <td>R$ {product.price.toFixed(2)}</td>
                  <td>{new Date(product.expiryDate).toLocaleDateString()}</td>
                  <td>
                    <button
                      onClick={() => setCurrentProduct(product)}
                      className="btn btn-warning btn-sm me-2"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <footer className="text-center mt-4">
        <small>Emilly & Yasmin</small>
      </footer>
    </div>
  );
}

export default App;
