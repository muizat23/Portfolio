import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const MEALS = [
  {
    id: 1,
    name: "Jollof Rice",
    category: "Rice",
    image: "https://images.unsplash.com/photo-1664993101841-036f189719b6?w=400&h=300&fit=crop",
    ingredients: ["Long grain rice", "Tomatoes", "Red bell pepper", "Scotch bonnet", "Onions", "Tomato paste", "Chicken stock", "Vegetable oil", "Seasoning cubes", "Bay leaves", "Salt"],
    instructions: "Blend tomatoes, peppers, and half the onions. Fry tomato paste in hot oil, add blended mixture and cook for 20 mins. Add stock, bring to boil, add washed rice. Cover and cook on low heat for 30 mins until rice is done.",
  },
  {
    id: 2,
    name: "Egusi Soup",
    category: "Soup",
    image: "https://images.unsplash.com/photo-1763048443535-1243379234e2?w=400&h=300&fit=crop",
    ingredients: ["Egusi (melon seeds)", "Assorted meat", "Palm oil", "Crayfish", "Onions", "Scotch bonnet", "Stockfish", "Ugu leaves", "Seasoning cubes", "Salt"],
    instructions: "Fry ground egusi in palm oil until golden. Add blended pepper, crayfish, and stock. Add cooked meat and stockfish. Season to taste and cook for 20 mins. Add ugu leaves and simmer for 5 mins.",
  },
  {
    id: 3,
    name: "Puff Puff",
    category: "Snack",
    image: "https://images.unsplash.com/photo-1682263167429-0dbcf2c1e127?w=400&h=300&fit=crop",
    ingredients: ["Flour", "Yeast", "Sugar", "Warm water", "Salt", "Nutmeg", "Vegetable oil (for frying)"],
    instructions: "Mix flour, sugar, yeast, salt, and nutmeg. Add warm water gradually to form a thick batter. Leave to rise for 45 mins. Heat oil, scoop batter into hot oil using your hand or spoon. Fry until golden brown.",
  },
  {
    id: 4,
    name: "Suya",
    category: "Meat",
    image: "https://images.unsplash.com/photo-1765584830134-12d879ad13bd?w=400&h=300&fit=crop",
    ingredients: ["Beef (thinly sliced)", "Groundnut powder", "Ginger powder", "Garlic powder", "Paprika", "Cayenne pepper", "Onion powder", "Salt", "Vegetable oil"],
    instructions: "Mix groundnut powder with all spices. Coat thinly sliced beef with the spice mix. Thread onto skewers and brush with oil. Grill on high heat for 5-7 mins each side until charred. Serve with sliced onions and tomatoes.",
  },
  {
    id: 5,
    name: "Moi Moi",
    category: "Snack",
    image: "https://images.unsplash.com/photo-1661588669110-81142a5b9e57?w=400&h=300&fit=crop",
    ingredients: ["Black-eyed beans", "Red bell pepper", "Scotch bonnet", "Onions", "Vegetable oil", "Crayfish", "Eggs (boiled)", "Fish", "Seasoning cubes", "Salt"],
    instructions: "Soak and peel beans. Blend with peppers, onions, and crayfish. Add oil and seasoning. Pour into containers, add egg and fish pieces. Steam for 45-60 mins until firm.",
  },
  {
    id: 6,
    name: "Pounded Yam & Egusi",
    category: "Main",
    image: "https://images.unsplash.com/photo-1673465580365-b96bef916770?w=400&h=300&fit=crop",
    ingredients: ["Yam", "Egusi (melon seeds)", "Palm oil", "Assorted meat", "Crayfish", "Onions", "Stockfish", "Ugu leaves", "Seasoning", "Salt"],
    instructions: "Boil yam until soft, pound in a mortar until smooth and stretchy. For egusi, fry in palm oil, add blended peppers and crayfish, cook meat in. Add ugu leaves last. Serve pounded yam with egusi soup.",
  },
  {
    id: 7,
    name: "Ewa Agoyin",
    category: "Main",
    image: "https://images.unsplash.com/photo-1586993966545-a56595567034?w=400&h=300&fit=crop",
    ingredients: ["Black-eyed beans or honey beans", "Palm oil", "Dried pepper blend", "Onions", "Crayfish", "Seasoning cubes", "Salt"],
    instructions: "Cook beans until very soft and mushy. Fry dried pepper in plenty of palm oil until the oil turns dark red. Add onions and crayfish. Season well. Pour the sauce over the mashed beans and serve with agege bread.",
  },
  {
    id: 8,
    name: "Pepper Soup",
    category: "Soup",
    image: "https://images.unsplash.com/photo-1708782344137-21c48d98dfcc?w=400&h=300&fit=crop",
    ingredients: ["Goat meat or catfish", "Pepper soup spice", "Scotch bonnet", "Ehuru", "Uziza leaves", "Crayfish", "Onions", "Seasoning cubes", "Salt"],
    instructions: "Parboil meat with onions and seasoning. Add pepper soup spice, ground scotch bonnet, and crayfish. Add water and cook until meat is tender. Add uziza leaves and adjust seasoning. Serve hot.",
  },
  {
    id: 9,
    name: "Akara",
    category: "Snack",
    image: "https://images.unsplash.com/photo-1647162264554-5f60af27f052?w=400&h=300&fit=crop",
    ingredients: ["Black-eyed beans", "Onions", "Scotch bonnet", "Salt", "Vegetable oil (for frying)"],
    instructions: "Soak and peel beans. Blend with onions and pepper to a smooth paste. Add salt and beat vigorously until fluffy. Heat oil in pan. Scoop batter into hot oil and fry until golden brown on both sides.",
  },
  {
    id: 10,
    name: "Ogbono Soup",
    category: "Soup",
    image: "https://images.unsplash.com/photo-1665332561290-cc6757172890?w=400&h=300&fit=crop",
    ingredients: ["Ogbono seeds (ground)", "Palm oil", "Assorted meat", "Stockfish", "Crayfish", "Onions", "Scotch bonnet", "Ugu or spinach", "Seasoning cubes", "Salt"],
    instructions: "Dissolve ground ogbono in palm oil. Heat on medium until it draws. Add meat stock, cooked meat, and stockfish. Add blended pepper and crayfish. Cook for 20 mins, add vegetables last and simmer for 5 mins.",
  },
  {
    id: 11,
    name: "Ofada Rice & Ayamase",
    category: "Rice",
    image: "https://images.unsplash.com/photo-1665332195309-9d75071138f0?w=400&h=300&fit=crop",
    ingredients: ["Ofada rice", "Green bell pepper", "Scotch bonnet", "Tatashe", "Palm oil", "Assorted meats", "Onions", "Crayfish", "Seasoning cubes", "Salt"],
    instructions: "Cook ofada rice in salted water. For ayamase, blend green peppers. Fry the bleached palm oil, add peppers and cook until oil floats. Add crayfish, cooked assorted meat and season. Serve with rice wrapped in banana leaf.",
  },
  {
    id: 12,
    name: "Amala & Ewedu",
    category: "Main",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&h=300&fit=crop",
    ingredients: ["Yam flour (elubo)", "Ewedu leaves", "Locust beans (iru)", "Crayfish", "Potash (kaun)", "Gbegiri (bean soup)", "Assorted meat", "Seasoning cubes", "Salt"],
    instructions: "Boil water, gradually whisk in yam flour until smooth and stretchy — amala should be dark and elastic. For ewedu, blend or mash boiled ewedu leaves with potash and crayfish. Cook gbegiri separately. Serve amala with ewedu and gbegiri (abula) poured over it, with assorted meats on the side.",
  },
  {
    id: 13,
    name: "Banga Soup",
    category: "Soup",
    image: "https://images.unsplash.com/photo-1730112696140-19e61bb43d36?w=400&h=300&fit=crop",
    ingredients: ["Palm fruit", "Catfish or assorted meat", "Banga spice", "Onions", "Crayfish", "Oburunbebe stick", "Scotch bonnet", "Seasoning cubes", "Salt"],
    instructions: "Cook palm fruits until soft, pound to extract juice. Boil extracted juice with fish/meat. Add banga spice, crayfish, and oburunbebe stick. Season to taste and cook until oil rises to top. Serve with starch or pounded yam.",
  },
];

const CATEGORIES = ["All", "Rice", "Soup", "Snack", "Meat", "Main"];

function MealModal({ meal, onClose }) {
  if (!meal) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900 border border-gray-800 rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto"
      >
        <img src={meal.image} alt={meal.name} className="w-full h-56 object-cover rounded-t-2xl" />
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-white mb-1">{meal.name}</h2>
              <span className="text-xs text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full">
                🇳🇬 {meal.category}
              </span>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-white transition text-xl">✕</button>
          </div>

          <div className="mb-5">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">Ingredients</h3>
            <div className="flex flex-wrap gap-2">
              {meal.ingredients.map((ing, i) => (
                <span key={i} className="text-xs px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-gray-300">
                  {ing}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">Instructions</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{meal.instructions}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FoodApp() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = MEALS.filter((m) => {
    const matchCat = category === "All" || m.category === category;
    const matchQuery = m.name.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <AnimatePresence>
        {selected && <MealModal meal={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>

      {/* Header */}
      <div className="sticky top-0 bg-gray-950/90 backdrop-blur-md border-b border-gray-800 z-40 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <h1 className="text-xl font-bold text-green-400">🇳🇬 Naija Foods</h1>
          <input
            type="text"
            placeholder="Search Nigerian meals..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 max-w-sm bg-gray-900 border border-gray-700 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-green-500"
          />
          <Link to="/" className="text-sm text-gray-400 hover:text-purple-400 transition border border-gray-700 hover:border-purple-500 px-4 py-1.5 rounded-full">
            ← Back
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Categories */}
        <div className="flex gap-2 flex-wrap mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm transition ${
                category === cat
                  ? "bg-green-600 text-white"
                  : "bg-gray-900 border border-gray-800 text-gray-400 hover:border-green-500 hover:text-green-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Meals Grid */}
        {filtered.length === 0 ? (
          <p className="text-gray-600 text-center py-20">No meals found.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filtered.map((meal, i) => (
              <motion.div
                key={meal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onClick={() => setSelected(meal)}
                className="bg-gray-900 border border-gray-800 hover:border-green-500/50 rounded-2xl overflow-hidden cursor-pointer group transition duration-300 hover:scale-105"
              >
                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-full h-36 object-cover group-hover:brightness-110 transition duration-300"
                />
                <div className="p-3">
                  <p className="text-sm font-medium text-white line-clamp-2 leading-snug">{meal.name}</p>
                  <p className="text-xs text-green-400 mt-1">{meal.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
