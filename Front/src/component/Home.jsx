import React, { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:3001/items')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => setItems(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Liste des Voitures</h1>

      {error && (
        <div className="text-red-500 text-center">Erreur: {error}</div>
      )}

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">id</th>
              <th className="px-4 py-2">nom</th>
              <th className="px-4 py-2">description</th>
              <th className="px-4 py-2">prix</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.marque}</td>
                <td className="px-4 py-2">{item.modele}</td>
                <td className="px-4 py-2">{item.prix}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {items.length === 0 && !error && (
          <div className="text-center p-4">Aucune voiture trouvée.</div>
        )}
      </div>
    </div>
  );
}

export default App;
