const products = [
    {
        id: "101",
        name: "Madhubani Printed Cotton Kurta",
        brand: "Mithila Looms",
        price: 1499,
        originalPrice: 2999,
        discount: 50,
        category: "men",
        fabric: "Cotton",
        sizes: ["S", "M", "L", "XL"],
        colors: ["Red", "Black"],
        images: [
            "https://images.unsplash.com/photo-1597983073453-ef90a7668664?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2000&auto=format&fit=crop"
        ],
        description: "Handcrafted Madhubani art design kurta with premium cotton fabric.",
        stock: 20,
        rating: 4.5,
        reviews: 120,
        createdAt: new Date().toISOString()
    },
    {
        id: "102",
        name: "Emerald Green Georgette Saree",
        brand: "Sangria",
        price: 8999,
        originalPrice: 12999,
        discount: 30,
        category: "women",
        fabric: "Georgette",
        sizes: ["Free Size"],
        colors: ["Green"],
        images: [
            "https://images.unsplash.com/photo-1583391733956-6c708724d08e?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2000&auto=format&fit=crop"
        ],
        description: "Elegant georgette saree in emerald green with a delicate pearls border.",
        stock: 15,
        rating: 4.8,
        reviews: 85,
        createdAt: new Date().toISOString()
    },
    {
        id: "103",
        name: "Royal Crimson Bridal Lehenga",
        brand: "Ritu Kumar",
        price: 35000,
        originalPrice: 55000,
        discount: 36,
        category: "women",
        fabric: "Silk",
        sizes: ["S", "M", "L"],
        colors: ["Crimson Red"],
        images: [
            "https://images.unsplash.com/photo-1610030469611-098522303584?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1610189014166-50a3ecba55f2?q=80&w=2000&auto=format&fit=crop"
        ],
        description: "A traditional crimson red velvet lehenga adorned with heavy golden work.",
        stock: 5,
        rating: 4.9,
        reviews: 42,
        createdAt: new Date().toISOString()
    },
    {
        id: "104",
        name: "Classic White Cotton Kurta Set",
        brand: "Peter England",
        price: 2499,
        originalPrice: 4299,
        discount: 42,
        category: "men",
        fabric: "Cotton",
        sizes: ["M", "L", "XL", "XXL"],
        colors: ["White"],
        images: [
            "https://images.unsplash.com/photo-1596783060281-9b16ea98442a?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1589156229555-d368e7af558f?q=80&w=2000&auto=format&fit=crop"
        ],
        description: "Comfortable and classic white cotton kurta pyjama set for daily wear.",
        stock: 30,
        rating: 4.4,
        reviews: 150,
        createdAt: new Date().toISOString()
    },
    {
        id: "105",
        name: "Indigo Block Print Kurta",
        brand: "FabIndia",
        price: 1899,
        originalPrice: 2499,
        discount: 24,
        category: "men",
        fabric: "Cotton",
        sizes: ["M", "L", "XL", "XXL"],
        colors: ["Indigo"],
        images: [
            "https://images.unsplash.com/photo-1589156229555-d368e7af558f?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=2000&auto=format&fit=crop"
        ],
        description: "Casual indigo block printed cotton kurta for elegant everyday ethnic wear.",
        stock: 25,
        rating: 4.6,
        reviews: 95,
        createdAt: new Date().toISOString()
    },
    {
        id: "106",
        name: "Midnight Blue Silk Sherwani",
        brand: "Manyavar",
        price: 15999,
        originalPrice: 24999,
        discount: 36,
        category: "men",
        fabric: "Silk",
        sizes: ["M", "L", "XL"],
        colors: ["Blue"],
        images: [
            "https://images.unsplash.com/photo-1617130863154-964ff3b35f44?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1617130863154-964ff3b35f44?q=80&w=2000&auto=format&fit=crop"
        ],
        description: "Royal midnight blue silk sherwani perfect for wedding receptions.",
        stock: 12,
        rating: 4.7,
        reviews: 78,
        createdAt: new Date().toISOString()
    },
    {
        id: "107",
        name: "Pastel Pink Anarkali Set",
        brand: "Aura",
        price: 4999,
        originalPrice: 7999,
        discount: 37,
        category: "women",
        fabric: "Georgette",
        sizes: ["S", "M", "L"],
        colors: ["Pink"],
        images: [
            "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=2000&auto=format&fit=crop"
        ],
        description: "Elegant pastel pink anarkali suit with heavy embroidery.",
        stock: 18,
        rating: 4.4,
        reviews: 56,
        createdAt: new Date().toISOString()
    },
    {
        id: "108",
        name: "Kids' Festive Dhoti Kurta",
        brand: "FabIndia Kids",
        price: 999,
        originalPrice: 1999,
        discount: 50,
        category: "kids",
        fabric: "Cotton",
        sizes: ["2Y", "4Y", "6Y"],
        colors: ["Yellow"],
        images: [
            "https://images.unsplash.com/photo-1596783048935-849319e7314d?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596783048935-849319e7314d?q=80&w=2000&auto=format&fit=crop"
        ],
        description: "Soft cotton yellow dhoti kurta set for young boys.",
        stock: 50,
        rating: 4.3,
        reviews: 210,
        createdAt: new Date().toISOString()
    },
    {
        id: "109",
        name: "Banarasi Silk Saree",
        brand: "Heritage India",
        price: 12500,
        originalPrice: 18000,
        discount: 30,
        category: "women",
        fabric: "Silk",
        sizes: ["Free Size"],
        colors: ["Gold", "Red"],
        images: [
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=2000&auto=format&fit=crop"
        ],
        description: "Classic hand-woven Banarasi silk saree with authentic zari work.",
        stock: 8,
        rating: 4.9,
        reviews: 34,
        createdAt: new Date().toISOString()
    },
    {
        id: "110",
        name: "Floral Print Cotton Lehenga",
        brand: "Sangria",
        price: 3499,
        originalPrice: 5999,
        discount: 41,
        category: "kids",
        fabric: "Cotton",
        sizes: ["4Y", "6Y", "8Y"],
        colors: ["White", "Floral"],
        images: [
            "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=2000&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=2000&auto=format&fit=crop"
        ],
        description: "Cute floral printed cotton lehenga choli set for girls.",
        stock: 22,
        rating: 4.2,
        reviews: 145,
        createdAt: new Date().toISOString()
    }
];

module.exports = products;
