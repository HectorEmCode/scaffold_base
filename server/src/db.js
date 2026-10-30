const mysql = require('mysql2/promise');

// 10 VARIANTES DESTACADAS DE HAMBURGER RAPID
const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: 'Rey de las Burgers',
    category: 'Especiales del Rey',
    price: 16.90,
    stock: 45,
    specialty_level: '👑 Especialidad Suprema',
    badge_color: '#F59E0B',
    rating: 4.95,
    prep_time: '12-14 min',
    calories: '920 kcal',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&auto=format&fit=crop&q=80',
    description: 'La joya de la corona: triple medallón de carne Angus 100% certificada flameada al carbón de roble, triple queso cheddar madurado, tocineta ahumada al maple caramelizada, aros de cebolla crocantes y emulsión secreta King Rapid.',
    ingredients: 'Triple medallón Angus (300g), Queso Cheddar 12 meses, Tocineta ahumada al maple, Aros de cebolla tempura, Emulsión King Secreta, Pan brioche tostado con mantequilla clarificada.'
  },
  {
    id: 2,
    name: 'Burger Real Clásica',
    category: 'Clásicas',
    price: 10.50,
    stock: 65,
    specialty_level: '⭐ Clásica de Oro',
    badge_color: '#3B82F6',
    rating: 4.88,
    prep_time: '8-10 min',
    calories: '680 kcal',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=700&auto=format&fit=crop&q=80',
    description: 'La insignia original de Hamburger Rapid: medallón de res seleccionada a la plancha de hierro, queso cheddar americano fundido, pepinillos dulces encurtidos, lechuga romana crocante, tomate de huerto y salsa Real artesanal.',
    ingredients: 'Medallón de res (180g), Queso americano fundido, Pepinillos encurtidos finos, Tomate de huerta, Lechuga romana fresca, Salsa Real de autor, Pan brioche artesanal con sésamo.'
  },
  {
    id: 3,
    name: 'Burger Real Doble',
    category: 'Dobles',
    price: 13.90,
    stock: 50,
    specialty_level: '🔥 Doble Parrilla',
    badge_color: '#EF4444',
    rating: 4.91,
    prep_time: '10-12 min',
    calories: '890 kcal',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=700&auto=format&fit=crop&q=80',
    description: 'Doble impacto a la brasa con 360g de pura carne vacuna seleccionada, cuatro láminas de queso cheddar derretido, aros de cebolla morada fresca, pepinillos agridulces y salsa barbacoa ahumada artesanal.',
    ingredients: 'Doble medallón de res (360g), Cuatro lonchas de queso cheddar, Cebolla morada en pluma, Pepinillos agridulces, Salsa barbacoa ahumada al nogal, Pan brioche suave.'
  },
  {
    id: 4,
    name: 'Burger Doble Especial',
    category: 'Dobles',
    price: 14.90,
    stock: 38,
    specialty_level: '💎 Edición Especial',
    badge_color: '#8B5CF6',
    rating: 4.93,
    prep_time: '11-13 min',
    calories: '910 kcal',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=700&auto=format&fit=crop&q=80',
    description: 'Doble medallón smash con bordes crocantes caramelizados al hierro ardiente, queso Monterrey Jack derretido, huevo campero de corral frito a la plancha con yema tierna y tocineta glaseada en miel de caña.',
    ingredients: 'Doble carne smash (300g), Queso Monterrey Jack fundido, Huevo campero frito a la plancha, Tocineta glaseada en miel, Alioli suave de ajo asado, Pan de papa rústico.'
  },
  {
    id: 5,
    name: 'Burger Trufada Imperial',
    category: 'Gourmet',
    price: 17.50,
    stock: 30,
    specialty_level: '✨ Alta Cocina Gourmet',
    badge_color: '#D97706',
    rating: 4.97,
    prep_time: '12-15 min',
    calories: '790 kcal',
    image: 'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3e99?w=700&auto=format&fit=crop&q=80',
    description: 'Exclusiva carne Angus madurada en seco por 21 días, queso brie fundido, champiñones portobello y cremini salteados al romero fresco, rúcula silvestre y abundante mayonesa de trufa negra de verano.',
    ingredients: 'Carne Angus madurada Dry-Aged (200g), Queso brie francés de denominación, Salteado de setas al romero, Reducción de balsámico de Módena, Mayonesa de trufa negra, Rúcula.'
  },
  {
    id: 6,
    name: 'Burger Crispy BBQ Bacon',
    category: 'Especiales',
    price: 12.80,
    stock: 42,
    specialty_level: '🥓 Ahumado Intenso',
    badge_color: '#DC2626',
    rating: 4.86,
    prep_time: '9-11 min',
    calories: '810 kcal',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=700&auto=format&fit=crop&q=80',
    description: 'Medallón jugoso glaseado en salsa barbacoa dulce al bourbon, cubierto con una cascada de tocineta extra crujiente, queso cheddar fundido y cebolla frita crujiente estilo crispy.',
    ingredients: 'Carne de res vacuna (200g), Triple tocineta crujiente ahumada, Cebolla crispy frita, Queso cheddar madurado, Salsa BBQ artesanal con toque de bourbon, Pan brioche.'
  },
  {
    id: 7,
    name: 'Burger Royal Cheddar & Jalapeño',
    category: 'Especiales',
    price: 12.50,
    stock: 40,
    specialty_level: '🌶️ Toque Spicy Supremo',
    badge_color: '#EA580C',
    rating: 4.84,
    prep_time: '9-11 min',
    calories: '740 kcal',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=700&auto=format&fit=crop&q=80',
    description: 'Equilibrio perfecto de picante gourmet: medallón premium sellado a fuego vivo, bañado en salsa cheddar caliente artesanal, rodajas de jalapeños tostados y emulsión de chipotle ahumado.',
    ingredients: 'Carne de res seleccionada (190g), Baño de cheddar caliente casero, Rodajas de jalapeños tatemados al fuego, Alioli de chipotle dulce, Cebollines asados, Pan brioche.'
  },
  {
    id: 8,
    name: 'Burger Smash Supreme',
    category: 'Clásicas',
    price: 11.90,
    stock: 55,
    specialty_level: '⚡ Súper Crujiente Smash',
    badge_color: '#0284C7',
    rating: 4.89,
    prep_time: '7-9 min',
    calories: '690 kcal',
    image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=700&auto=format&fit=crop&q=80',
    description: 'Técnica smash clásica: carne prensada ultrafina sobre la plancha al rojo vivo para lograr la legendaria costra caramelizada Maillard, queso gouda fundido, cebolla confitada en la propia grasa y mostaza antigua.',
    ingredients: 'Doble smash ultrafino (2x100g), Queso gouda fundido, Cebolla en hilos caramelizada al hierro, Relish de pepinillos casero, Mostaza dijon en grano, Pan de papa suave.'
  },
  {
    id: 9,
    name: 'Burger Crispy Chicken Deluxe',
    category: 'Pollo & Veggie',
    price: 11.75,
    stock: 48,
    specialty_level: '🍗 Pollo Extra Crocante',
    badge_color: '#16A34A',
    rating: 4.87,
    prep_time: '10-12 min',
    calories: '730 kcal',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=700&auto=format&fit=crop&q=80',
    description: 'Pechuga entera de pollo campero marinada 24 horas en buttermilk y 11 hierbas provenzales, doble rebozado crujiente de maíz, ensalada coleslaw fresca con manzana verde y emulsión honey mustard.',
    ingredients: 'Pechuga de pollo campero (220g), Doble empanizado extracrujiente, Ensalada coleslaw fresca de col y manzana, Pepinillos dulces, Aderezo Honey Mustard artesanal, Pan brioche.'
  },
  {
    id: 10,
    name: 'Burger Portobello & Queso Suizo',
    category: 'Pollo & Veggie',
    price: 13.20,
    stock: 35,
    specialty_level: '🌱 Gourmet Veggie',
    badge_color: '#059669',
    rating: 4.92,
    prep_time: '10-12 min',
    calories: '580 kcal',
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=700&auto=format&fit=crop&q=80',
    description: 'La cumbre vegetariana: hongo Portobello entero marinado en reducción balsámica y asado al grill, fundido con queso suizo Emmental, cebolla pochada al vino tinto, tomates secos y rúcula salvaje.',
    ingredients: 'Hongo Portobello entero a la parrilla, Queso suizo Emmental fundido, Cebolla caramelizada al vino tinto, Tomates secados al sol, Hojas de rúcula selvática, Alioli de albahaca fresca.'
  }
];

// CLIENTES INICIALES SEGÚN CONSUMO
const INITIAL_CUSTOMERS = [
  {
    id: 'CUST-001',
    name: 'Carlos Mendoza',
    email: 'carlos.mendoza@email.com',
    phone: '+34 612 345 678',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    totalSpent: 342.80,
    orderCount: 19,
    segment: 'VIP',
    segmentLabel: 'Consumo Alto (VIP)',
    favoriteBurger: 'Rey de las Burgers',
    lastOrder: '2026-10-29T20:15:00Z',
    loyaltyPoints: 3420
  },
  {
    id: 'CUST-002',
    name: 'Valentina Silva',
    email: 'valentina.silva@email.com',
    phone: '+34 634 567 890',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
    totalSpent: 285.50,
    orderCount: 16,
    segment: 'VIP',
    segmentLabel: 'Consumo Alto (VIP)',
    favoriteBurger: 'Burger Trufada Imperial',
    lastOrder: '2026-10-29T19:40:00Z',
    loyaltyPoints: 2850
  },
  {
    id: 'CUST-003',
    name: 'Alejandro Morales',
    email: 'alejandro.morales@email.com',
    phone: '+34 645 678 901',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    totalSpent: 194.20,
    orderCount: 11,
    segment: 'VIP',
    segmentLabel: 'Consumo Alto (VIP)',
    favoriteBurger: 'Burger Doble Especial',
    lastOrder: '2026-10-28T21:10:00Z',
    loyaltyPoints: 1940
  },
  {
    id: 'CUST-004',
    name: 'Sofía Navarro',
    email: 'sofia.navarro@email.com',
    phone: '+34 656 789 012',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
    totalSpent: 118.40,
    orderCount: 7,
    segment: 'Frecuente',
    segmentLabel: 'Consumo Medio (Frecuente)',
    favoriteBurger: 'Burger Real Doble',
    lastOrder: '2026-10-27T18:25:00Z',
    loyaltyPoints: 1180
  },
  {
    id: 'CUST-005',
    name: 'Diego Hernández',
    email: 'diego.h@email.com',
    phone: '+34 667 890 123',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    totalSpent: 89.90,
    orderCount: 5,
    segment: 'Frecuente',
    segmentLabel: 'Consumo Medio (Frecuente)',
    favoriteBurger: 'Burger Crispy BBQ Bacon',
    lastOrder: '2026-10-26T21:45:00Z',
    loyaltyPoints: 890
  },
  {
    id: 'CUST-006',
    name: 'Lucía Fernández',
    email: 'lucia.f@email.com',
    phone: '+34 678 901 234',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    totalSpent: 74.50,
    orderCount: 4,
    segment: 'Frecuente',
    segmentLabel: 'Consumo Medio (Frecuente)',
    favoriteBurger: 'Burger Real Clásica',
    lastOrder: '2026-10-25T14:15:00Z',
    loyaltyPoints: 740
  },
  {
    id: 'CUST-007',
    name: 'Javier Castillo',
    email: 'javier.castillo@email.com',
    phone: '+34 689 012 345',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&auto=format&fit=crop&q=80',
    totalSpent: 37.80,
    orderCount: 2,
    segment: 'Ocasional',
    segmentLabel: 'Consumo Bajo (Ocasional)',
    favoriteBurger: 'Burger Smash Supreme',
    lastOrder: '2026-10-20T20:00:00Z',
    loyaltyPoints: 370
  },
  {
    id: 'CUST-008',
    name: 'Mariana Gómez',
    email: 'mariana.g@email.com',
    phone: '+34 690 123 456',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80',
    totalSpent: 26.40,
    orderCount: 1,
    segment: 'Ocasional',
    segmentLabel: 'Consumo Bajo (Ocasional)',
    favoriteBurger: 'Burger Portobello & Queso Suizo',
    lastOrder: '2026-10-18T13:30:00Z',
    loyaltyPoints: 260
  }
];

// ÓRDENES INICIALES
const INITIAL_ORDERS = [
  {
    id: 'HR-1089',
    customerName: 'Carlos Mendoza',
    items: [
      { id: 1, name: 'Rey de las Burgers', quantity: 2, price: 16.90 },
      { id: 3, name: 'Burger Real Doble', quantity: 1, price: 13.90 }
    ],
    total: 47.70,
    status: 'En la Parrilla 🔥',
    deliveryType: 'Delivery Express',
    address: 'Av. Libertador 1420, Piso 5',
    createdAt: new Date(Date.now() - 12 * 60 * 1000).toISOString()
  },
  {
    id: 'HR-1088',
    customerName: 'Valentina Silva',
    items: [
      { id: 5, name: 'Burger Trufada Imperial', quantity: 1, price: 17.50 },
      { id: 2, name: 'Burger Real Clásica', quantity: 1, price: 10.50 }
    ],
    total: 28.00,
    status: 'En camino 🛵',
    deliveryType: 'Delivery Express',
    address: 'Calle Mayor 58, 2B',
    createdAt: new Date(Date.now() - 25 * 60 * 1000).toISOString()
  },
  {
    id: 'HR-1087',
    customerName: 'Alejandro Morales',
    items: [
      { id: 4, name: 'Burger Doble Especial', quantity: 2, price: 14.90 }
    ],
    total: 29.80,
    status: 'Entregado ✅',
    deliveryType: 'Retiro en Local',
    address: 'Sucursal Central Gourmet',
    createdAt: new Date(Date.now() - 75 * 60 * 1000).toISOString()
  },
  {
    id: 'HR-1086',
    customerName: 'Sofía Navarro',
    items: [
      { id: 1, name: 'Rey de las Burgers', quantity: 1, price: 16.90 },
      { id: 9, name: 'Burger Crispy Chicken Deluxe', quantity: 1, price: 11.75 }
    ],
    total: 28.65,
    status: 'Entregado ✅',
    deliveryType: 'Delivery Express',
    address: 'Paseo de la Castellana 210',
    createdAt: new Date(Date.now() - 140 * 60 * 1000).toISOString()
  }
];

// In-Memory state
let inMemoryProducts = [...INITIAL_PRODUCTS];
let inMemoryCustomers = [...INITIAL_CUSTOMERS];
let inMemoryOrders = [...INITIAL_ORDERS];
let isConnectedToMySQL = false;
let pool = null;
let lastDbError = null;

async function initDB() {
  const host = process.env.DB_HOST || (process.env.DATABASE_URL ? 'via-database-url' : null);
  const user = process.env.DB_USER || 'root';
  const password = process.env.DB_PASSWORD || '';
  const database = process.env.DB_NAME || 'hamburger_rapid';

  if (!host && !process.env.DATABASE_URL) {
    console.log('ℹ️ [DB] DB_HOST no configurado. Iniciando en modo In-Memory con 10 hamburguesas gourmet.');
    isConnectedToMySQL = false;
    return;
  }

  try {
    const config = process.env.DATABASE_URL
      ? process.env.DATABASE_URL
      : { host, user, password, database, port: parseInt(process.env.DB_PORT, 10) || 3306, connectTimeout: 3000 };

    pool = mysql.createPool(config);
    const conn = await pool.getConnection();
    console.log(`✅ [DB] Conexión establecida exitosamente con MySQL en ${host || 'DATABASE_URL'}`);

    // Create products table
    await conn.query(`
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(100) NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        stock INT NOT NULL DEFAULT 0,
        specialty_level VARCHAR(100),
        badge_color VARCHAR(50),
        rating DECIMAL(3,2),
        prep_time VARCHAR(50),
        calories VARCHAR(50),
        image VARCHAR(500),
        description TEXT,
        ingredients TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create orders table
    await conn.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id VARCHAR(50) PRIMARY KEY,
        customer_name VARCHAR(255) NOT NULL,
        total DECIMAL(10,2) NOT NULL,
        status VARCHAR(50) NOT NULL,
        delivery_type VARCHAR(100),
        address VARCHAR(255),
        items_json JSON,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Check if products exist, seed if empty
    const [rows] = await conn.query('SELECT COUNT(*) as count FROM products');
    if (rows[0].count === 0) {
      console.log('🌱 [DB] Sembrando las 10 hamburguesas maestras en MySQL...');
      for (const p of INITIAL_PRODUCTS) {
        await conn.query(
          `INSERT INTO products (name, category, price, stock, specialty_level, badge_color, rating, prep_time, calories, image, description, ingredients)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [p.name, p.category, p.price, p.stock, p.specialty_level, p.badge_color, p.rating, p.prep_time, p.calories, p.image, p.description, p.ingredients]
        );
      }
    }

    conn.release();
    isConnectedToMySQL = true;
    lastDbError = null;
  } catch (error) {
    console.warn(`⚠️ [DB] No se pudo conectar a MySQL: ${error.message}. Operando en modo In-Memory resiliente.`);
    isConnectedToMySQL = false;
    lastDbError = error.message;
  }
}

// PRODUCT METHODS
async function getProducts() {
  if (isConnectedToMySQL && pool) {
    try {
      const [rows] = await pool.query('SELECT * FROM products ORDER BY id ASC');
      return rows;
    } catch (err) {
      console.error('Error consultando MySQL, recurriendo a memoria:', err.message);
      lastDbError = err.message;
    }
  }
  return inMemoryProducts;
}

async function getProductById(id) {
  const numId = parseInt(id, 10);
  const products = await getProducts();
  return products.find(p => p.id === numId) || null;
}

async function addProduct({ name, category, price, stock, specialty_level, badge_color, rating, prep_time, calories, image, description, ingredients }) {
  const newProduct = {
    id: Date.now(),
    name,
    category: category || 'Especiales',
    price: parseFloat(price) || 0,
    stock: parseInt(stock, 10) || 0,
    specialty_level: specialty_level || '⭐ Especialidad de la Casa',
    badge_color: badge_color || '#F59E0B',
    rating: parseFloat(rating) || 4.9,
    prep_time: prep_time || '10-12 min',
    calories: calories || '750 kcal',
    image: image || 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&auto=format&fit=crop&q=80',
    description: description || 'Hamburguesa artesanal preparada con carne fresca a la brasa.',
    ingredients: ingredients || 'Carne 100% Angus, queso cheddar fundido, pan brioche artesanal.'
  };

  if (isConnectedToMySQL && pool) {
    try {
      const [result] = await pool.query(
        `INSERT INTO products (name, category, price, stock, specialty_level, badge_color, rating, prep_time, calories, image, description, ingredients)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [newProduct.name, newProduct.category, newProduct.price, newProduct.stock, newProduct.specialty_level, newProduct.badge_color, newProduct.rating, newProduct.prep_time, newProduct.calories, newProduct.image, newProduct.description, newProduct.ingredients]
      );
      newProduct.id = result.insertId;
      return newProduct;
    } catch (err) {
      console.error('Error insertando en MySQL, guardando en memoria:', err.message);
    }
  }

  inMemoryProducts.unshift(newProduct);
  return newProduct;
}

async function updateProductStock(id, newStock) {
  const numId = parseInt(id, 10);
  if (isConnectedToMySQL && pool) {
    try {
      await pool.query('UPDATE products SET stock = ? WHERE id = ?', [newStock, numId]);
    } catch (err) {
      console.error('Error actualizando stock en MySQL:', err.message);
    }
  }
  const item = inMemoryProducts.find(p => p.id === numId);
  if (item) item.stock = newStock;
  return item;
}

async function deleteProduct(id) {
  const numId = parseInt(id, 10);
  if (isConnectedToMySQL && pool) {
    try {
      await pool.query('DELETE FROM products WHERE id = ?', [numId]);
    } catch (err) {
      console.error('Error eliminando en MySQL:', err.message);
    }
  }
  inMemoryProducts = inMemoryProducts.filter(p => p.id !== numId);
  return true;
}

async function resetProducts() {
  if (isConnectedToMySQL && pool) {
    try {
      await pool.query('TRUNCATE TABLE products');
      for (const p of INITIAL_PRODUCTS) {
        await pool.query(
          `INSERT INTO products (name, category, price, stock, specialty_level, badge_color, rating, prep_time, calories, image, description, ingredients)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [p.name, p.category, p.price, p.stock, p.specialty_level, p.badge_color, p.rating, p.prep_time, p.calories, p.image, p.description, p.ingredients]
        );
      }
    } catch (err) {
      console.error('Error reseteando MySQL:', err.message);
    }
  }
  inMemoryProducts = JSON.parse(JSON.stringify(INITIAL_PRODUCTS));
  inMemoryOrders = JSON.parse(JSON.stringify(INITIAL_ORDERS));
  inMemoryCustomers = JSON.parse(JSON.stringify(INITIAL_CUSTOMERS));
}

// CUSTOMERS & ANALYTICS METHODS
async function getCustomers() {
  return inMemoryCustomers;
}

async function getCustomerAnalytics() {
  const customers = inMemoryCustomers;
  const totalRevenue = customers.reduce((sum, c) => sum + c.totalSpent, 0);
  const totalOrders = customers.reduce((sum, c) => sum + c.orderCount, 0);
  const avgTicket = totalOrders > 0 ? (totalRevenue / totalOrders).toFixed(2) : 0;

  // Segment breakdown
  const segments = {
    vip: { count: 0, totalRevenue: 0, label: 'VIP / Alto Consumo (> $150)', color: '#D97706', badge: '👑 VIP' },
    frecuente: { count: 0, totalRevenue: 0, label: 'Frecuente / Consumo Medio ($50 - $150)', color: '#2563EB', badge: '⭐ Frecuente' },
    ocasional: { count: 0, totalRevenue: 0, label: 'Ocasional / Nuevo (< $50)', color: '#10B981', badge: '🌱 Ocasional' }
  };

  customers.forEach(c => {
    if (c.totalSpent >= 150) {
      segments.vip.count++;
      segments.vip.totalRevenue += c.totalSpent;
    } else if (c.totalSpent >= 50) {
      segments.frecuente.count++;
      segments.frecuente.totalRevenue += c.totalSpent;
    } else {
      segments.ocasional.count++;
      segments.ocasional.totalRevenue += c.totalSpent;
    }
  });

  return {
    totalCustomers: customers.length,
    totalRevenue: totalRevenue.toFixed(2),
    totalOrders,
    avgTicket,
    segments,
    topCustomers: [...customers].sort((a, b) => b.totalSpent - a.totalSpent).slice(0, 5)
  };
}

// ORDERS METHODS
async function getOrders() {
  return inMemoryOrders;
}

async function addOrder({ customerName, items, total, deliveryType, address }) {
  const newOrder = {
    id: `HR-${Math.floor(1000 + Math.random() * 9000)}`,
    customerName: customerName || 'Cliente Gourmet',
    items: items || [],
    total: parseFloat(total) || 0,
    status: 'Recibido ➔ En la Parrilla 🔥',
    deliveryType: deliveryType || 'Delivery Express',
    address: address || 'Dirección de Entrega',
    createdAt: new Date().toISOString()
  };

  inMemoryOrders.unshift(newOrder);

  // Update customer spend stats if matching customer or add to Carlos Mendoza (default demo)
  const cust = inMemoryCustomers.find(c => c.name.toLowerCase() === (customerName || '').toLowerCase()) || inMemoryCustomers[0];
  if (cust) {
    cust.totalSpent = parseFloat((cust.totalSpent + newOrder.total).toFixed(2));
    cust.orderCount += 1;
    cust.loyaltyPoints += Math.floor(newOrder.total * 10);
    cust.lastOrder = newOrder.createdAt;
    if (cust.totalSpent >= 150) {
      cust.segment = 'VIP';
      cust.segmentLabel = 'Consumo Alto (VIP)';
    } else if (cust.totalSpent >= 50) {
      cust.segment = 'Frecuente';
      cust.segmentLabel = 'Consumo Medio (Frecuente)';
    }
  }

  // Deduct stock
  if (items && items.length > 0) {
    items.forEach(item => {
      const prod = inMemoryProducts.find(p => p.id === item.id || p.name === item.name);
      if (prod && prod.stock > 0) {
        prod.stock = Math.max(0, prod.stock - (item.quantity || 1));
      }
    });
  }

  return newOrder;
}

// STATUS
function getDbStatus() {
  return {
    mode: isConnectedToMySQL ? 'mysql' : 'in-memory',
    connected: isConnectedToMySQL,
    brand: 'Hamburger Rapid Commercial Platform',
    host: process.env.DB_HOST || (process.env.DATABASE_URL ? 'via-database-url' : 'In-Memory Local Engine'),
    database: process.env.DB_NAME || 'hamburger_rapid',
    user: process.env.DB_USER || 'pablovaldivia',
    totalProducts: inMemoryProducts.length,
    totalOrders: inMemoryOrders.length,
    totalCustomers: inMemoryCustomers.length,
    error: lastDbError
  };
}

module.exports = {
  initDB,
  getProducts,
  getProductById,
  addProduct,
  updateProductStock,
  deleteProduct,
  resetProducts,
  getCustomers,
  getCustomerAnalytics,
  getOrders,
  addOrder,
  getDbStatus,
  INITIAL_PRODUCTS
};
