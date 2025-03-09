import React, { useState, useEffect } from "react";
import Layout from "../layout";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Separator from "../../../components/ui/Separator";
import { Trash } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export const ItemCard = ({ itemName, img, onClick }) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <img
        src={img}
        alt={itemName}
        className="w-32 h-32 object-cover rounded-lg"
      />
      <p className="text-center mt-2">{itemName}</p>
    </div>
  );
};

const CreateOrder = () => {
  const [discount, setDiscount] = useState(0);
  const [amountPaid, setAmoutPaid] = useState(0);
  const [username, setUsername] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const data = {
    products: [
      {
        ProductID: 1,
        ProductName: "Biscoff Cheesecake",
        CategoryID: 1,
        Price: 150,
      },
      { ProductID: 2, ProductName: "Funfetti", CategoryID: 1, Price: 210 },
      {
        ProductID: 3,
        ProductName: "Matcha with Cream Cheese",
        CategoryID: 1,
        Price: 180,
      },
      { ProductID: 4, ProductName: "Nutella Blast", CategoryID: 1, Price: 220 },
      {
        ProductID: 5,
        ProductName: "Oreo Cheesecake",
        CategoryID: 1,
        Price: 240,
      },
      { ProductID: 6, ProductName: "Rocky Road", CategoryID: 1, Price: 200 },
      { ProductID: 7, ProductName: "Smores 2.0", CategoryID: 1, Price: 250 },
      {
        ProductID: 8,
        ProductName: "Special Crinkles",
        CategoryID: 1,
        Price: 100,
      },
      { ProductID: 9, ProductName: "Brownies", CategoryID: 2, Price: 150 },
      { ProductID: 10, ProductName: "Butterscotch", CategoryID: 2, Price: 170 },
      { ProductID: 11, ProductName: "Revel Bars", CategoryID: 2, Price: 190 },
      {
        ProductID: 12,
        ProductName: "Red Velvet Cheesecake",
        CategoryID: 2,
        Price: 230,
      },
      {
        ProductID: 13,
        ProductName: "Ham and Cheese Empanada",
        CategoryID: 3,
        Price: 120,
      },
      {
        ProductID: 14,
        ProductName: "Small - Korean Cream Cheese Garlic Bread",
        CategoryID: 3,
        Price: 140,
      },
      {
        ProductID: 15,
        ProductName: "Medium - Korean Cream Cheese Garlic Bread",
        CategoryID: 3,
        Price: 160,
      },
      {
        ProductID: 16,
        ProductName: "Large - Korean Cream Cheese Garlic Bread",
        CategoryID: 3,
        Price: 180,
      },
    ],
  };

  const images = {
    products: [
      { id: 1, img: "/products/BiscoffCheesecake.jpg" },
      { id: 2, img: "/products/Funfetti.jpg" },
      { id: 3, img: "/products/MatchawithCreamCheese.jpg" },
      { id: 4, img: "/products/NutellaBlast.jpg" },
      { id: 5, img: "/products/OreoCheesecake.jpg" },
      { id: 6, img: "/products/RockyRoad.jpg" },
      { id: 7, img: "/products/Smores.jpg" },
      { id: 8, img: "/products/SpecialCrinkles.jpg" },
      { id: 9, img: "/products/Brownies.jpg" },
      { id: 10, img: "/products/Butterscotch.jpg" },
      { id: 11, img: "/products/RevelBars.jpg" },
      { id: 12, img: "/products/RedVelvetCheesecake.jpg" },
      { id: 13, img: "/products/HamandCheeseEmpanada.jpg" },
      { id: 14, img: "/products/KoreanCreamCheeseGarlicBread.jpg" },
      { id: 15, img: "/products/KoreanCreamCheeseGarlicBread.jpg" },
      { id: 16, img: "/products/KoreanCreamCheeseGarlicBread.jpg" },
    ],
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.ProductID === product.ProductID
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.ProductID === product.ProductID
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productID) => {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.ProductID !== productID);
    });
  };

  return (
    <Layout>
      <section className="h-full flex flex-col">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-blueSerenity py-5">Hello, {username}</h1>
          <div className="flex items-center relative">
            <input
              className=" text-left pl-14"
              placeholder="Search by name or product number"
            />
            <MagnifyingGlass size={32} className="absolute ml-3" />
          </div>
        </div>

        <div className="flex gap-8 h-full overflow-y-hidden">
          <div className="bg-solidWhite flex rounded-lg shadow-lg p-5 max-h-full h-full flex-col overflow-y-scroll w-full">
            {/* Cookies Section  */}
            <div className="w-full">
              <h2>Cookies</h2>
              <div className="flex gap-5 flex-wrap ">
                {data.products
                  .filter((item) => item.CategoryID === 1)
                  .map((item) => {
                    const productImage =
                      images.products.find((img) => img.id === item.ProductID)
                        ?.img || "";

                    return (
                      <div
                        key={item.ProductID}
                        className="cursor-pointer flex flex-col items-center w-32 h-32 border bg-arcLight hover:scale-110 transition-all duration-200 text-darkerGray shadow-lg rounded-lg justify-center gap-1"
                        onClick={() => addToCart(item)}
                      >
                        <p className="text-center break-words mt-2 text-sm max-w-32 font-semibold">
                          {item.ProductName}
                        </p>
                        <span className=" text-sm">
                          P {item.Price.toFixed(2)}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Bars Section */}
            <div className="w-full">
              <h2>Bars</h2>
              <div className="flex gap-5 flex-wrap ">
                {data.products
                  .filter((item) => item.CategoryID === 2)
                  .map((item) => {
                    const productImage =
                      images.products.find((img) => img.id === item.ProductID)
                        ?.img || "/products/default.jpg";

                    return (
                      <div
                        key={item.ProductID}
                        className="cursor-pointer flex flex-col items-center w-32 h-32 border bg-arcLight hover:scale-110 transition-all duration-200 text-darkerGray shadow-lg rounded-lg justify-center gap-1"
                        onClick={() => addToCart(item)}
                      >
                        <p className="text-center break-words mt-2 max-w-32 text-sm font-semibold">
                          {item.ProductName}
                        </p>
                        <span className=" text-sm">
                          P {item.Price.toFixed(2)}
                        </span>
                      </div>
                    );
                  })}
              </div>
            </div>

            {/* Bread Section */}
            <div className="w-full">
              <h2>Bread</h2>
              <div className="flex gap-5 flex-wrap ">
                {data.products.map((item) => {
                  return (
                    <div
                      key={item.ProductID}
                      className="cursor-pointer flex flex-col items-center w-32 h-32 border bg-arcLight hover:scale-110 transition-all duration-200 text-darkerGray shadow-lg rounded-lg justify-center gap-1"
                      onClick={() => addToCart(item)}
                    >
                      <p className="text-center break-words mt-2 text-sm max-w-32 font-semibold">
                        {item.ProductName}
                      </p>
                      <span className=" text-sm">
                        P {item.Price.toFixed(2)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="p-10 bg-solidWhite rounded-lg shadow-lg w-[35%] h-full flex flex-col">
            <h2>Cart</h2>
            <Separator />

            {/* Scrollable Cart Section */}
            <div className="w-full overflow-x-auto max-h-[25rem] flex-grow">
              <table className="w-full">
                <thead>
                  <tr className=" text-left">
                    <th className="p-2">Product</th>
                    <th className="p-2 text-center">Qty</th>
                    <th className="p-2 text-right">Subtotal</th>
                    <th className="p-2 text-right"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.ProductID} className="hover:bg-gray-50">
                      <td className="p-2">{item.ProductName}</td>
                      <td className="p-2 text-center">{item.quantity}</td>
                      <td className="p-2 text-right">
                        P {item.quantity * item.Price}
                      </td>
                      <td className="p-2 text-right">
                        <button
                          className="text-white bg-red/70 hover:bg-red text-sm px-2 py-1 rounded-lg w-fit"
                          onClick={() => removeFromCart(item.ProductID)}
                        >
                          <Trash size={32} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex w-full justify-between px-2 py-2">
              <label className="font-semibold">Total</label>
              <label className="font-semibold">
                P{" "}
                {cartItems.reduce(
                  (total, item) => total + item.quantity * item.Price,
                  0
                )}
              </label>
            </div>
            <Separator />

            {/* Payment Details */}
            <div className="flex flex-col gap-2">
              <div className="flex w-full justify-between px-2 py-2 items-center">
                <label className="font-semibold">Discount</label>
                <input
                  className="w-[10rem] text-left pl-3 text-black placeholder:text-darkerGray"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(
                      /[^0-9]/g,
                      ""
                    );
                  }}
                />
              </div>

              <div className="flex w-full justify-between px-2 py-2 items-center">
                <label className="font-semibold">Amount Paid</label>
                <input
                  className="w-[10rem] text-left pl-3 text-black placeholder:text-darkerGray"
                  value={amountPaid}
                  onChange={(e) => setAmoutPaid(e.target.value)}
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(
                      /[^0-9]/g,
                      ""
                    );
                  }}
                />
              </div>

              <div className="flex w-full justify-between px-2 py-2 items-center">
                <label className="font-semibold">Mode of Payment</label>
                <select className="w-[10rem]">
                  <option>Cash</option>
                  <option>Digital Wallet</option>
                </select>
              </div>
            </div>

            {/* Checkout Button Aligned to Bottom */}
            <div className="mt-auto flex justify-center">
              <button
                className=" text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition-all duration-200"
                onClick={() => navigate("/admin/create-order/checkout/")}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CreateOrder;
