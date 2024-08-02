export default function ProductCard({product}) {
    console.log(product);
  return (
    <>
    <div className="flex flex-col">
      <div><img src={product.images[0]} alt={`${product.title}'s image`} /></div>
      <div className="p-3 ">
        <div className="text-center w-full">{product.title}</div>
        <div className="flex ite justify-between mt-2">
          <div>${product.price}</div>
          <div><button className="bg-[#E7C158] py-2 px-4">Add To Cart</button></div>
        </div>
      </div>
    </div>
    </>
  )
}
