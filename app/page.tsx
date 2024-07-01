import Image from "next/image";

import thumbnail from "/public/image-product-1.jpg";
import imag1 from "/public/image-product-1-thumbnail.jpg";
import imag2 from "/public/image-product-2-thumbnail.jpg";
import imag3 from "/public/image-product-3-thumbnail.jpg";
import imag4 from "/public/image-product-4-thumbnail.jpg";
import { Minus, Plus, ShoppingCart } from "lucide-react";


export default function Home() {
  return (
    <main className="m-10">
      <div className="flex items-center justify-around m-6">
        <div>
          <Image src={thumbnail} alt="thumbnail" width={400} height={490} className="mb-4 rounded-xl"/>
          <div className="flex items-center gap-6">
            <Image src={imag1} alt="imag1" width={82} height={100}/>
            <Image src={imag2} alt="imag2" width={82} height={100}/>
            <Image src={imag3} alt="imag3" width={82} height={100}/>
            <Image src={imag4} alt="imag4" width={82} height={100}/>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-500 mb-4">SNEAKER COMPANY</h3>
          <h1 className="text-5xl font-bold mb-6">Fall Limited Edition <br /> Sneakers</h1>
          <p className="text-sm text-gray-400 text-justify mb-4">
            These low-profile sneakers are your perfect casual wear <br />
            companion. Featuring a durable rubber outer sole, they will <br />
            withsand everything the weather can offer.
          </p>
          <p className="flex items-center gap-4 mb-2">
            <strong className="">  
              $125.00
            </strong>
            <span className="bg-black text-zinc-50 p-1 rounded">50%</span>
          </p>
          <p className="text-sm font-bold text-gray-400 line-through mb-5">
            $250.00
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center w-24 h-10 p-1 gap-5 bg-gray-100 rounded font-bold">
              <Minus className="w-6 h-6 text-orange-400"/>
              0
              <Plus className="w-6 h-6 text-orange-400"/>
            </div>
            <div className="flex items-center gap-4 bg-orange-400 w-40 h-10 p-4 font-bold rounded">
              <ShoppingCart className="w-5 h-5"/>
              Add to cart
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
