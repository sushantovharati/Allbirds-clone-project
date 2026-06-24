"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cartContext";

export default function CheckoutPage() {
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [sameBilling, setSameBilling] = useState(true);
    const router = useRouter();
    const { items, total } = useCart();

    const shipping = total >= 100 ? 0 : 5;
    const finalTotal = total + shipping;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (items.length === 0) {
            alert("Your cart is empty");
            return;
        }

        const formData = new FormData(e.currentTarget);

        const orderData = {
            email: formData.get("email"),
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            phone: formData.get("phone"),
            country: formData.get("country"),
            address: formData.get("address"),
            apartment: formData.get("apartment"),
            city: formData.get("city"),
            state: formData.get("state"),
            zipCode: formData.get("zipCode"),
            paymentMethod,
            subtotal: total,
            shipping,
            total: finalTotal,
            items,
        };

        const res = await fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData),
        });

        if (!res.ok) {
            alert("Order failed");
            return;
        }

        router.push("/order-success");
    };

    return (
        <main className="min-h-screen bg-white pt-[100px]">
            <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-[1fr_480px]">
                <section className="px-5 py-8 lg:px-16">
                    <Link href="/" className="mb-8 block text-2xl font-semibold">
                        Allbirds Checkout
                    </Link>

                    <div className="mb-8 rounded-lg border p-4">
                        <h2 className="mb-4 text-center text-sm font-semibold">
                            Express checkout
                        </h2>

                        <div className="grid grid-cols-3 gap-3">
                            <button className="rounded bg-[#5a31f4] py-3 text-sm font-bold text-white">
                                Shop Pay
                            </button>
                            <button className="rounded bg-[#ffc439] py-3 text-sm font-bold">
                                PayPal
                            </button>
                            <button className="rounded bg-black py-3 text-sm font-bold text-white">
                                G Pay
                            </button>
                        </div>
                    </div>

                    <div className="mb-8 flex items-center gap-4">
                        <div className="h-px flex-1 bg-gray-300" />
                        <span className="text-sm text-gray-500">OR</span>
                        <div className="h-px flex-1 bg-gray-300" />
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <section>
                            <div className="mb-3 flex items-center justify-between">
                                <h2 className="text-xl font-semibold">Contact</h2>

                                <button
                                    type="button"
                                    className="text-sm text-gray-600 underline"
                                >
                                    Sign in
                                </button>
                            </div>

                            <input
                                name="email"
                                required
                                type="email"
                                placeholder="Email"
                                className="w-full rounded border border-gray-400 p-4"
                            />

                            <label className="mt-3 flex items-center gap-2 text-sm">
                                <input
                                    name="marketingOptIn"
                                    type="checkbox"
                                    defaultChecked
                                />
                                Email me with news and offers
                            </label>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold">Delivery</h2>

                            <div className="space-y-3">
                                <select
                                    name="country"
                                    required
                                    className="w-full rounded border border-gray-400 p-4"
                                >
                                    <option value="United States">United States</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Australia">Australia</option>
                                </select>

                                <div className="grid gap-3 md:grid-cols-2">
                                    <input
                                        name="firstName"
                                        required
                                        placeholder="First name"
                                        className="rounded border border-gray-400 p-4"
                                    />

                                    <input
                                        name="lastName"
                                        required
                                        placeholder="Last name"
                                        className="rounded border border-gray-400 p-4"
                                    />
                                </div>

                                <input
                                    name="company"
                                    placeholder="Company (optional)"
                                    className="w-full rounded border border-gray-400 p-4"
                                />

                                <input
                                    name="address"
                                    required
                                    placeholder="Address"
                                    className="w-full rounded border border-gray-400 p-4"
                                />

                                <input
                                    name="apartment"
                                    placeholder="Apartment, suite, etc. (optional)"
                                    className="w-full rounded border border-gray-400 p-4"
                                />

                                <div className="grid gap-3 md:grid-cols-3">
                                    <input
                                        name="city"
                                        required
                                        placeholder="City"
                                        className="rounded border border-gray-400 p-4"
                                    />

                                    <input
                                        name="state"
                                        required
                                        placeholder="State"
                                        className="rounded border border-gray-400 p-4"
                                    />

                                    <input
                                        name="zipCode"
                                        required
                                        placeholder="ZIP code"
                                        className="rounded border border-gray-400 p-4"
                                    />
                                </div>

                                <input
                                    name="phone"
                                    placeholder="Phone Number"
                                    className="w-full rounded border border-gray-400 p-4"
                                />

                                <label className="flex items-center gap-2 text-sm">
                                    <input
                                        name="smsMarketing"
                                        type="checkbox"
                                    />
                                    Text me with news and offers
                                </label>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-4 text-xl font-semibold">Shipping method</h2>

                            <div className="overflow-hidden rounded border border-gray-300">
                                <label className="flex cursor-pointer items-center justify-between border-b bg-[#f4f8fa] p-4">
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            name="shippingMethod"
                                            value="standard"
                                            defaultChecked
                                        />
                                        <span>Standard Shipping</span>
                                    </div>

                                    <span>
                                        {shipping === 0 ? "Free" : `$${shipping}`}
                                    </span>
                                </label>

                                <label className="flex cursor-pointer items-center justify-between p-4">
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            name="shippingMethod"
                                            value="express"
                                        />
                                        <span>Express Shipping</span>
                                    </div>

                                    <span>$15</span>
                                </label>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-1 text-2xl font-semibold">Payment</h2>
                            <p className="mb-5 text-gray-500">
                                All transactions are secure and encrypted.
                            </p>

                            <div className="overflow-hidden border border-gray-300">
                                <label
                                    className={`flex cursor-pointer items-center justify-between border-b p-4 ${paymentMethod === "card" ? "border-black bg-[#f4f8fa]" : "bg-white"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            name="payment"
                                            checked={paymentMethod === "card"}
                                            onChange={() => setPaymentMethod("card")}
                                            className="size-5 accent-[#202a2f]"
                                        />
                                        <span className="font-bold">Credit card</span>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span className="rounded bg-blue-700 px-2 py-1 text-xs font-bold text-white">
                                            VISA
                                        </span>
                                        <span className="rounded bg-white px-2 py-1 text-xs font-bold text-red-500 shadow">
                                            ●●
                                        </span>
                                        <span className="rounded bg-blue-600 px-2 py-1 text-xs font-bold text-white">
                                            AMEX
                                        </span>
                                        <span className="rounded border px-2 py-1 text-xs">+5</span>
                                    </div>
                                </label>

                                {paymentMethod === "card" && (
                                    <div className="space-y-3 bg-[#f4f4f4] p-4">
                                        <input
                                            placeholder="Card number"
                                            className="w-full border border-gray-300 bg-white p-4"
                                        />

                                        <div className="grid gap-3 md:grid-cols-2">
                                            <input
                                                placeholder="Expiration date (MM / YY)"
                                                className="border border-gray-300 bg-white p-4"
                                            />
                                            <input
                                                placeholder="Security code"
                                                className="border border-gray-300 bg-white p-4"
                                            />
                                        </div>

                                        <input
                                            placeholder="Name on card"
                                            className="w-full border border-gray-300 bg-white p-4"
                                        />

                                        <label className="flex items-center gap-3 font-medium">
                                            <input
                                                type="checkbox"
                                                checked={sameBilling}
                                                onChange={() => setSameBilling(!sameBilling)}
                                                className="size-5 accent-[#202a2f]"
                                            />
                                            Use shipping address as billing address
                                        </label>

                                        {!sameBilling && (
                                            <div className="space-y-3 pt-4">
                                                <h3 className="text-xl font-bold">Billing address</h3>

                                                <select className="w-full border border-gray-300 bg-white p-4">
                                                    <option>United States</option>
                                                    <option>Bangladesh</option>
                                                    <option>Canada</option>
                                                    <option>Australia</option>
                                                </select>

                                                <div className="grid gap-3 md:grid-cols-2">
                                                    <input placeholder="First name" className="border border-gray-300 bg-white p-4" />
                                                    <input placeholder="Last name" className="border border-gray-300 bg-white p-4" />
                                                </div>

                                                <input placeholder="Company (optional)" className="w-full border border-gray-300 bg-white p-4" />
                                                <input placeholder="Address" className="w-full border border-gray-300 bg-white p-4" />
                                                <input placeholder="Apartment, suite, etc. (optional)" className="w-full border border-gray-300 bg-white p-4" />

                                                <div className="grid gap-3 md:grid-cols-3">
                                                    <input placeholder="City" className="border border-gray-300 bg-white p-4" />
                                                    <input placeholder="State" className="border border-gray-300 bg-white p-4" />
                                                    <input placeholder="ZIP code" className="border border-gray-300 bg-white p-4" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )}

                                <label
                                    className={`flex cursor-pointer items-center justify-between border-b p-4 ${paymentMethod === "shop" ? "border-black bg-[#f4f8fa]" : "bg-white"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            name="payment"
                                            checked={paymentMethod === "shop"}
                                            onChange={() => setPaymentMethod("shop")}
                                            className="size-5 accent-[#202a2f]"
                                        />
                                        <span className="font-bold">
                                            Shop Pay <span className="font-normal text-gray-500">• Pay in full or in installments</span>
                                        </span>
                                    </div>

                                    <span className="text-xl font-bold text-[#5a31f4]">shop</span>
                                </label>

                                <label
                                    className={`flex cursor-pointer items-center justify-between p-4 ${paymentMethod === "paypal" ? "border border-black bg-[#f4f8fa]" : "bg-white"
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            name="payment"
                                            checked={paymentMethod === "paypal"}
                                            onChange={() => setPaymentMethod("paypal")}
                                            className="size-5 accent-[#202a2f]"
                                        />
                                        <span className="font-bold">PayPal</span>
                                    </div>

                                    <span className="text-xl font-bold italic text-[#183b7a]">PayPal</span>
                                </label>

                                {paymentMethod === "paypal" && (
                                    <div className="border-t bg-[#f4f4f4] p-5 text-center font-medium">
                                        You'll be redirected to PayPal to complete your purchase
                                    </div>
                                )}
                            </div>

                            {paymentMethod !== "card" && (
                                <div className="mt-6">
                                    <h3 className="mb-4 text-2xl font-semibold">Billing address</h3>

                                    <div className="overflow-hidden border border-gray-300">
                                        <label
                                            className={`flex cursor-pointer items-center gap-3 border-b p-4 font-medium ${sameBilling ? "border-black bg-[#f4f8fa]" : "bg-white"
                                                }`}
                                        >
                                            <input
                                                type="radio"
                                                name="billing"
                                                checked={sameBilling}
                                                onChange={() => setSameBilling(true)}
                                                className="size-5 accent-[#202a2f]"
                                            />
                                            Same as shipping address
                                        </label>

                                        <label
                                            className={`flex cursor-pointer items-center gap-3 p-4 font-medium ${!sameBilling ? "border border-black bg-[#f4f8fa]" : "bg-white"
                                                }`}
                                        >
                                            <input
                                                type="radio"
                                                name="billing"
                                                checked={!sameBilling}
                                                onChange={() => setSameBilling(false)}
                                                className="size-5 accent-[#202a2f]"
                                            />
                                            Use a different billing address
                                        </label>

                                        {!sameBilling && (
                                            <div className="space-y-3 bg-[#f4f4f4] p-4">
                                                <select className="w-full border border-gray-300 bg-white p-4">
                                                    <option>United States</option>
                                                    <option>Bangladesh</option>
                                                    <option>Canada</option>
                                                    <option>Australia</option>
                                                </select>

                                                <div className="grid gap-3 md:grid-cols-2">
                                                    <input
                                                        placeholder="First name"
                                                        className="border border-gray-300 bg-white p-4"
                                                    />
                                                    <input
                                                        placeholder="Last name"
                                                        className="border border-gray-300 bg-white p-4"
                                                    />
                                                </div>

                                                <input
                                                    placeholder="Company (optional)"
                                                    className="w-full border border-gray-300 bg-white p-4"
                                                />

                                                <input
                                                    placeholder="Address"
                                                    className="w-full border border-gray-300 bg-white p-4"
                                                />

                                                <input
                                                    placeholder="Apartment, suite, etc. (optional)"
                                                    className="w-full border border-gray-300 bg-white p-4"
                                                />

                                                <div className="grid gap-3 md:grid-cols-3">
                                                    <input
                                                        placeholder="City"
                                                        className="border border-gray-300 bg-white p-4"
                                                    />

                                                    <select className="border border-gray-300 bg-white p-4">
                                                        <option>State</option>
                                                        <option>California</option>
                                                        <option>New York</option>
                                                        <option>Texas</option>
                                                    </select>

                                                    <input
                                                        placeholder="ZIP code"
                                                        className="border border-gray-300 bg-white p-4"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            <div className="mt-8 flex items-start justify-between gap-6">
                                <div>
                                    <p className="font-medium">Save my information for a faster checkout</p>
                                    <p className="text-sm text-gray-500">
                                        By paying, you agree to create a Shop account subject to Shop's{" "}
                                        <span className="underline">Terms</span> and{" "}
                                        <span className="underline">Privacy Policy</span>.
                                    </p>
                                </div>

                                <button type="button" className="whitespace-nowrap font-medium">
                                    Not now
                                </button>
                            </div>

                            <button className={`mt-8 w-full rounded py-5 text-lg font-bold text-white ${paymentMethod === "paypal" ? "bg-[#0070ba]" : "bg-[#202a2f]"
                                }`}>
                                {paymentMethod === "paypal" ? "Pay with PayPal" : "Pay now"}
                            </button>
                        </section>
                    </form>
                </section>

                <aside className="border-l bg-[#f7f7f7] px-5 py-8 lg:px-10">
                    <div className="sticky top-8">
                        <div className="space-y-5">
                            {items.map((item) => (
                                <div key={`${item.id}-${item.color}-${item.size}`} className="flex gap-4">
                                    <div className="relative h-16 w-16 rounded border bg-white">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-contain"
                                        />
                                        <span className="absolute -right-2 -top-2 rounded-full bg-gray-700 px-2 text-xs text-white">
                                            {item.quantity}
                                        </span>
                                    </div>

                                    <div className="flex flex-1 justify-between gap-3">
                                        <div>
                                            <p className="text-sm font-medium">{item.name}</p>
                                            <p className="text-xs text-gray-500">
                                                {item.color} / {item.size}
                                            </p>
                                        </div>

                                        <p className="text-sm font-medium">
                                            ${item.price * item.quantity}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex gap-2">
                            <input
                                placeholder="Discount code"
                                className="flex-1 rounded border border-gray-400 p-3"
                            />
                            <button className="rounded bg-gray-700 px-5 text-white">
                                Apply
                            </button>
                        </div>

                        <div className="mt-6 space-y-3 border-t pt-5 text-sm">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>${total}</span>
                            </div>

                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
                            </div>

                            <div className="flex justify-between border-t pt-4 text-lg font-semibold">
                                <span>Total</span>
                                <span>USD ${finalTotal}</span>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}