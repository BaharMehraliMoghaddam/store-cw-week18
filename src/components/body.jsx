import ProductSide from "./common/sections/products-side/product-side";
import CartSide from "./common/sections/cart-side/cart-side";

export default function Body() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 lg:m-16 ">
      <div className="lg:col-span-3 md:col-span-2">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4 ">
          <div className="lg:col-span-3 md:col-span-2">
            <div className="flex items-center justify-around gap-60">
              <p>6 products</p>
              <div className="space-x-2">
              <label for="order">Order</label>
              <select className="border border-black rounded-sm" name="order" id="order">
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
              </select>
              </div>

              <div className="space-x-2">
              <label for="filter">Filter</label>
              <select className="border border-black rounded-sm" name="filter" id="filter">
                <option value="all">All</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border border-b-0 border-gray-900 mt-4"></div>
        <ProductSide />
      </div>
      <div className="lg:col-span-1 md:col-span-1">
        <p className="text-center lg:col-span-1 md:col-span-1">
          Cart is empty now
        </p>
        <div className="w-full border border-b-0 border-gray-400 mt-4"></div>
        <CartSide />
      </div>
    </div>
  );
}
