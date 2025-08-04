import { useEffect, useState } from "react";

export default function AdminPage() {
  const [msg, setMsg] = useState("");
  const [products, setProducts] = useState([]);

  // DB test message
  useEffect(() => {
    fetch("/api/test")
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch((err) => console.error(err));
  }, []);

 
  useEffect(() => {
    setProducts([
      { id: 1, name: "Laptop", price: 800 },
      { id: 2, name: "Smartphone", price: 500 },
      { id: 3, name: "Headphones", price: 150 },
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Admin Dashboard
      </h1>
      <p className="mb-6 text-green-600 font-medium">{msg}</p>

      {/* Products Table */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">📦 Product List</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3 border">ID</th>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Price ($)</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-gray-100">
                <td className="p-3 border">{p.id}</td>
                <td className="p-3 border">{p.name}</td>
                <td className="p-3 border">{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
