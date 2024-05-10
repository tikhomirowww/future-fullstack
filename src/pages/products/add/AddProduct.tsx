import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useEffect,
  useState,
} from "react";
import Input from "../../../components/Input";
import Button from "../../../ui/Button";
import { useAppDispatch, useAppSelector } from "../../../helpers/hooks";
import {
  addProduct,
  getCategories,
  sendComment,
} from "../../../store/actions/products.actions";
import { newProduct } from "../../../types";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState<newProduct>({
    title: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { categories } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  console.log(product);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value, name, files } = e.target;
    if (name === "image" && files) {
      setProduct({ ...product, [name]: files[0] });
    } else {
      setProduct({ ...product, [name]: value });
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(addProduct({ product, navigate }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>AddProduct</h2>
      <Input
        onChange={handleChange}
        name="title"
        value={product.title}
        placeholder="title"
      />
      <Input
        onChange={handleChange}
        name="description"
        value={product.description}
        placeholder="description"
      />
      <Input
        onChange={handleChange}
        name="price"
        type="number"
        value={product.price}
        placeholder="price"
      />
      <select name="category" onChange={handleChange as any}>
        <option>Category</option>
        {categories.map((item) => (
          <option value={item.id} key={item.id}>
            {item.title}
          </option>
        ))}
      </select>
      <Input
        accept="image/*"
        onChange={handleChange}
        name="image"
        type="file"
        placeholder="image"
      />
      <Button>Create product</Button>
    </form>
  );
};

export default AddProduct;
