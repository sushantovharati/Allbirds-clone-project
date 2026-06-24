"use client";

import { useState } from "react";
import Select from "react-select";

const productTypeOptions = [
  { value: "Everyday Sneakers", label: "Everyday Sneakers" },
  { value: "Flats", label: "Flats" },
  { value: "Fluffs", label: "Fluffs" },
  { value: "Golf", label: "Golf" },
  { value: "High Tops", label: "High Tops" },
  { value: "Hiking Shoes", label: "Hiking Shoes" },
  { value: "Long Sleeve Tees", label: "Long Sleeve Tees" },
  { value: "Running Shoes", label: "Running Shoes" },
  { value: "Sandals", label: "Sandals" },
  { value: "Shirts", label: "Shirts" },
  { value: "Slip Ons", label: "Slip Ons" },
  { value: "Slippers", label: "Slippers" },
  { value: "Socks", label: "Socks" },
  { value: "Sweatpants", label: "Sweatpants" },
  { value: "Sweatshirts", label: "Sweatshirts" },
  { value: "Tees", label: "Tees" },
  { value: "Underwear", label: "Underwear" },
  { value: "Water-Repellent Shoes", label: "Water-Repellent Shoes" },
];

const sizeOptions = [
  "XS", "S", "M", "L", "XL", "XXL", "XXXL",
  "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "13.5", "14", "15",
  "11T", "12T", "13T", "1Y", "2Y", "3Y",
  "W4.5 M3", "W5 M3", "W5.5 M4", "W6 M4", "W6.5 M5", "W7 M5", "W7.5 M6", "W8 M6", "W8.5 M7", "W9 M7", "W9.5 M8", "W10 M8",
  "W10.5 M9", "W11 M9", "W11.5 M10", "W12 M10", "W12.5 M11", "W13 M11", "W13.5 M12", "W14 M12", "W14.5 M13", "W15 M13", "W15.5 M14", "W16 M14",
].map((size) => ({ value: size, label: size }));

const materialOptions = [
  { value: "Alternative-Leather", label: "Alternative-Leather" },
  { value: "Canvas", label: "Canvas" },
  { value: "Corduroy", label: "Corduroy" },
  { value: "Cotton", label: "Cotton" },
  { value: "Cozy-Collection", label: "Cozy-Collection" },
  { value: "Luxe-Collection", label: "Luxe-Collection" },
  { value: "Plant", label: "Plant" },
  { value: "Sugar", label: "Sugar" },
  { value: "Tree", label: "Tree" },
  { value: "Tree-Fiber-Blend", label: "Tree-Fiber-Blend" },
  { value: "Trino-Jersey", label: "Trino-Jersey" },
  { value: "Trino-Knit", label: "Trino-Knit" },
  { value: "Wool", label: "Wool" },
];

export default function CreateProductPage() {
  const [productTypes, setProductTypes] = useState<string[]>([]);
  const [materials, setMaterials] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [sale, setSale] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const imageFormData = new FormData();
    const imageFiles = formData.getAll("images") as File[];

    imageFiles.forEach((file) => {
      imageFormData.append("images", file);
    });

    const uploadRes = await fetch("http://localhost:5000/products/upload-images", {
      method: "POST",
      body: imageFormData,
    });

    const uploadData = await uploadRes.json();

    const productData = {
      title: formData.get("title"),
      price: Number(formData.get("price")),
      quantity: Number(formData.get("quantity")),

      category: formData.get("category"),
      gender: formData.get("gender"),

      productTypes,
      materials,

      colorName: formData.get("colorName"),

      edition: formData.get("edition"),
      family: formData.get("family"),
      badge: formData.get("badge") || undefined,

      sale: formData.get("sale") === "on",
      discountPercent: Number(formData.get("discountPercent") || 0),

      sizes,

      images: uploadData.images,
    };

    await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    setLoading(false);
    alert("Product created successfully!");
    form.reset();
    setProductTypes([]);
    setMaterials([]);
    setSizes([]);
    setPreviewImages([]);
    setSale(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-[120px]">
      <div className="mx-auto max-w-5xl rounded-xl bg-white p-8 shadow">
        <h1 className="mb-8 text-2xl font-bold">Create Product</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-5">
          <input name="title" placeholder="Title" className="rounded border p-3" required />
          <input name="price" type="number" placeholder="Price" className="rounded border p-3" required />

          <input name="quantity" type="number" placeholder="Quantity" className="rounded border p-3" required />

          <select name="category" className="rounded border p-3" required>
            <option value="">Select Category</option>
            <option value="shoes">Shoes</option>
            <option value="socks">Socks</option>
            <option value="apparel">Apparel</option>
          </select>

          <select name="gender" className="rounded border p-3" required>
            <option value="">Select Gender</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="unisex">Unisex</option>
          </select>

          <select name="colorName" className="rounded border p-3" required>
            <option value="">Select Color</option>
            <option value="Black">Black</option>
            <option value="White">White</option>
            <option value="Grey">Grey</option>
            <option value="Beige">Beige</option>
            <option value="Brown">Brown</option>
            <option value="Red">Red</option>
            <option value="Pink">Pink</option>
            <option value="Orange">Orange</option>
            <option value="Yellow">Yellow</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Purple">Purple</option>
          </select>

          <select name="edition" className="rounded border p-3" required>
            <option value="">Select Edition</option>
            <option value="Standard Edition">Standard Edition</option>
            <option value="Classic Edition">Classic Edition</option>
            <option value="Premium Edition">Premium Edition</option>
            <option value="Ultimate Edition">Ultimate Edition</option>
            <option value="Limited Edition">Limited Edition</option>
            <option value="Special Edition">Special Edition</option>
          </select>

          <select name="family" className="rounded border p-3" required>
            <option value="">Select Family</option>

            <option value="anytime-ankle-sock">Anytime Ankle Sock</option>
            <option value="anytime-no-show-heel-grip">Anytime No Show Heel Grip</option>
            <option value="canvas-cruiser">Canvas Cruiser</option>
            <option value="canvas-piper">Canvas Piper</option>
            <option value="cruiser">Cruiser</option>
            <option value="dasher-nz">Dasher NZ</option>
            <option value="men-varsity">Men Varsity</option>
            <option value="merino-blend-sweatpant">Merino Blend Sweatpant</option>
            <option value="merino-blend-sweatshirt">Merino Blend Sweatshirt</option>
            <option value="runner-go">Runner Go</option>
            <option value="runner-nz">Runner NZ</option>
            <option value="sandals">Sandals</option>
            <option value="slide">Slide</option>
            <option value="soft-merino-long-sleeve-tee">Soft Merino Long Sleeve Tee</option>
            <option value="soft-merino-tee">Soft Merino Tee</option>
            <option value="terralux-cl">Terralux CL</option>
            <option value="tree-dasher-relay">Tree Dasher Relay</option>
            <option value="tree-runner-nz">Tree Runner NZ</option>
            <option value="trino-cozy-crew">Trino Cozy Crew</option>
            <option value="women-varsity">Women Varsity</option>
            <option value="wool-runner-up-mizzle">Wool Runner Up Mizzle</option>
            <option value="varsity">Varsity</option>
            <option value="varsity-cruiser">Varsity Cruiser</option>
          </select>

          <select name="badge" className="rounded border p-3">
            <option value="">Select Badge</option>
            <option value="NEW">NEW</option>
            <option value="WATERPROOF">WATERPROOF</option>
            <option value="WATER-REPELLENT">WATER-REPELLENT</option>
            <option value="FINAL FEW">FINAL FEW</option>
          </select>

          <Select
            isMulti
            options={productTypeOptions}
            value={productTypeOptions.filter((option) =>
              productTypes.includes(option.value)
            )}
            onChange={(selected) =>
              setProductTypes(selected.map((item) => item.value))
            }
            placeholder="Select product types"
          // className="col-span-2"
          />

          <Select
            isMulti
            options={materialOptions}
            value={materialOptions.filter((option) =>
              materials.includes(option.value)
            )}
            onChange={(selected) =>
              setMaterials(selected.map((item) => item.value))
            }
            placeholder="Select materials"
          // className="col-span-2"
          />

          <Select
            isMulti
            options={sizeOptions}
            value={sizeOptions.filter((option) => sizes.includes(option.value))}
            onChange={(selected) =>
              setSizes(selected.map((item) => item.value))
            }
            placeholder="Select sizes"
          // className="col-span-2"
          />

          <label className="flex items-center gap-3 rounded border p-3">
            <input
              type="checkbox"
              name="sale"
              checked={sale}
              onChange={(e) => setSale(e.target.checked)}
            />
            Sale Product
          </label>

          <input
            name="discountPercent"
            type="number"
            placeholder="Discount Percent"
            disabled={!sale}
            className={`rounded border p-3 ${!sale ? "cursor-not-allowed bg-gray-100 text-gray-400" : ""
              }`}
          />

          <div className="col-span-2">
            <input
              name="images"
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="w-full rounded border p-3"
            />
          </div>

          {previewImages.length > 0 && (
            <div className="col-span-2 grid grid-cols-5 gap-3">
              {previewImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="preview"
                  className="h-28 w-full rounded object-cover"
                />
              ))}
            </div>
          )}

          <button
            disabled={loading}
            className="col-span-2 rounded bg-black py-3 font-semibold text-white"
          >
            {loading ? "Creating..." : "Create Product"}
          </button>
        </form>
      </div>
    </div>
  );
}