import React, { useState, useEffect } from 'react';

const INITIAL_PRODUCTS_ADMIN = [
  {
    id: 1,
    name: 'Rey de las Burgers',
    category: 'Especiales del Rey',
    price: 16.90,
    stock: 45,
    specialty_level: '👑 Especialidad Suprema',
    badge_color: '#B45309',
    badge_bg: '#FEF3C7',
    rating: 4.95,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80',
    description: 'Triple medallón de carne Angus 100% certificada flameada al carbón de roble, triple queso cheddar madurado, tocineta ahumada al maple caramelizada.'
  },
  {
    id: 2,
    name: 'Burger Real Clásica',
    category: 'Clásicas',
    price: 10.50,
    stock: 65,
    specialty_level: '⭐ Clásica de Oro',
    badge_color: '#1D4ED8',
    badge_bg: '#DBEAFE',
    rating: 4.88,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=80',
    description: 'Medallón de res seleccionada a la plancha de hierro fundido, queso cheddar americano fundido, pepinillos dulces encurtidos y salsa Real.'
  },
  {
    id: 3,
    name: 'Burger Real Doble',
    category: 'Dobles',
    price: 13.90,
    stock: 50,
    specialty_level: '🔥 Doble Parrilla',
    badge_color: '#B91C1C',
    badge_bg: '#FEE2E2',
    rating: 4.91,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=80',
    description: 'Doble impacto a la brasa con 360g de pura carne vacuna seleccionada, cuatro láminas de queso cheddar y salsa barbacoa ahumada.'
  },
  {
    id: 4,
    name: 'Burger Doble Especial',
    category: 'Dobles',
    price: 14.90,
    stock: 38,
    specialty_level: '💎 Edición Especial',
    badge_color: '#6D28D9',
    badge_bg: '#EDE9FE',
    rating: 4.93,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500&auto=format&fit=crop&q=80',
    description: 'Doble smash caramelizado al hierro ardiente, queso Monterrey Jack derretido, huevo campero de corral frito y tocineta glaseada en miel.'
  },
  {
    id: 5,
    name: 'Burger Trufada Imperial',
    category: 'Gourmet',
    price: 17.50,
    stock: 30,
    specialty_level: '✨ Alta Cocina Gourmet',
    badge_color: '#92400E',
    badge_bg: '#FEF3C7',
    rating: 4.97,
    image: 'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3e99?w=500&auto=format&fit=crop&q=80',
    description: 'Carne Angus madurada en seco por 21 días, queso brie fundido, champiñones salteados al romero y mayonesa de trufa negra.'
  },
  {
    id: 6,
    name: 'Burger Crispy BBQ Bacon',
    category: 'Especiales',
    price: 12.80,
    stock: 42,
    specialty_level: '🥓 Ahumado Intenso',
    badge_color: '#991B1B',
    badge_bg: '#FEE2E2',
    rating: 4.86,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&auto=format&fit=crop&q=80',
    description: 'Medallón jugoso glaseado en salsa barbacoa al bourbon con tocineta extra crujiente, cheddar fundido y cebolla frita crispy.'
  },
  {
    id: 7,
    name: 'Burger Royal Cheddar & Jalapeño',
    category: 'Especiales',
    price: 12.50,
    stock: 40,
    specialty_level: '🌶️ Toque Spicy Supremo',
    badge_color: '#C2410C',
    badge_bg: '#FFEDD5',
    rating: 4.84,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&auto=format&fit=crop&q=80',
    description: 'Medallón sellado a fuego vivo, bañado en salsa cuatro quesos cheddar caliente, jalapeños tatemados y alioli de chipotle.'
  },
  {
    id: 8,
    name: 'Burger Smash Supreme',
    category: 'Clásicas',
    price: 11.90,
    stock: 55,
    specialty_level: '⚡ Súper Crujiente Smash',
    badge_color: '#0369A1',
    badge_bg: '#E0F2FE',
    rating: 4.89,
    image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&auto=format&fit=crop&q=80',
    description: 'Costra maillard caramelizada en plancha al rojo vivo, queso gouda fundido, cebolla confitada y relish con mostaza dijon.'
  },
  {
    id: 9,
    name: 'Burger Crispy Chicken Deluxe',
    category: 'Pollo & Veggie',
    price: 11.75,
    stock: 48,
    specialty_level: '🍗 Pollo Extra Crocante',
    badge_color: '#15803D',
    badge_bg: '#DCFCE7',
    rating: 4.87,
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=500&auto=format&fit=crop&q=80',
    description: 'Pechuga marinada en buttermilk y hierbas provenzales, doble empanizado de maíz, ensalada coleslaw fresca y salsa miel-mostaza.'
  },
  {
    id: 10,
    name: 'Burger Portobello & Queso Suizo',
    category: 'Pollo & Veggie',
    price: 13.20,
    stock: 35,
    specialty_level: '🌱 Gourmet Veggie',
    badge_color: '#065F46',
    badge_bg: '#D1FAE5',
    rating: 4.92,
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=500&auto=format&fit=crop&q=80',
    description: 'Hongo Portobello entero a la parrilla, queso suizo Emmental fundido, cebolla caramelizada al vino tinto y rúcula silvestre.'
  }
];

const INITIAL_CUSTOMERS_ADMIN = [
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
    lastOrder: 'Hoy, 20:15',
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
    lastOrder: 'Hoy, 19:40',
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
    lastOrder: 'Ayer, 21:10',
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
    lastOrder: '27 Oct, 18:25',
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
    lastOrder: '26 Oct, 21:45',
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
    lastOrder: '25 Oct, 14:15',
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
    lastOrder: '20 Oct, 20:00',
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
    lastOrder: '18 Oct, 13:30',
    loyaltyPoints: 260
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'burgers' | 'customers' | 'database' | 'orders'
  const [products, setProducts] = useState(INITIAL_PRODUCTS_ADMIN);
  const [customers, setCustomers] = useState(INITIAL_CUSTOMERS_ADMIN);
  const [orders, setOrders] = useState([]);
  const [serverHealth, setServerHealth] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  // Filters
  const [burgerSearch, setBurgerSearch] = useState('');
  const [burgerCategoryFilter, setBurgerCategoryFilter] = useState('all');
  const [customerSegmentFilter, setCustomerSegmentFilter] = useState('all');
  const [customerSearch, setCustomerSearch] = useState('');

  // Fetch data on load
  const loadDashboardData = async () => {
    setIsLoading(true);
    try {
      // 1. Health & Database status
      const healthRes = await fetch('/api/health');
      if (healthRes.ok) {
        const healthData = await healthRes.json();
        setServerHealth(healthData);
      }

      // 2. Products
      const prodRes = await fetch('/api/products');
      if (prodRes.ok) {
        const prodData = await prodRes.json();
        if (prodData.success && prodData.data?.length > 0) {
          setProducts(prodData.data);
        }
      }

      // 3. Customers
      const custRes = await fetch('/api/customers');
      if (custRes.ok) {
        const custData = await custRes.json();
        if (custData.success && custData.data?.length > 0) {
          setCustomers(custData.data);
        }
      }

      // 4. Orders
      const orderRes = await fetch('/api/orders');
      if (orderRes.ok) {
        const orderData = await orderRes.json();
        if (orderData.success && orderData.data) {
          setOrders(orderData.data);
        }
      }
    } catch (err) {
      console.log('Modo local / fallback activo:', err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadDashboardData();
  }, []);

  const showToast = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  // Adjust burger stock
  const handleStockChange = async (id, delta) => {
    setProducts(prev => prev.map(p => {
      if (p.id === id) {
        const newStock = Math.max(0, p.stock + delta);
        // Persist to API
        fetch(`/api/products/${id}/stock`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ stock: newStock })
        }).catch(() => {});
        return { ...p, stock: newStock };
      }
      return p;
    }));
    showToast('Stock actualizado correctamente');
  };

  // Reset menu data
  const handleResetDemoData = async () => {
    try {
      await fetch('/api/reset', { method: 'POST' });
      await loadDashboardData();
      showToast('Menú y datos restablecidos con éxito');
    } catch {
      setProducts(INITIAL_PRODUCTS_ADMIN);
      setCustomers(INITIAL_CUSTOMERS_ADMIN);
      showToast('Datos locales reestablecidos');
    }
  };

  // Metrics calculation
  const totalRevenue = customers.reduce((sum, c) => sum + c.totalSpent, 0);
  const totalOrdersCount = customers.reduce((sum, c) => sum + c.orderCount, 0);
  const avgTicket = totalOrdersCount > 0 ? (totalRevenue / totalOrdersCount).toFixed(2) : '0.00';
  const totalBurgersInCatalog = products.length;
  const availableBurgersCount = products.filter(p => p.stock > 0).length;

  // Segment metrics
  const vipCustomers = customers.filter(c => c.totalSpent >= 150);
  const frecuenteCustomers = customers.filter(c => c.totalSpent >= 50 && c.totalSpent < 150);
  const ocasionalCustomers = customers.filter(c => c.totalSpent < 50);

  const vipRevenue = vipCustomers.reduce((sum, c) => sum + c.totalSpent, 0);
  const frecuenteRevenue = frecuenteCustomers.reduce((sum, c) => sum + c.totalSpent, 0);
  const ocasionalRevenue = ocasionalCustomers.reduce((sum, c) => sum + c.totalSpent, 0);

  // Filtered lists
  const filteredBurgers = products.filter(b => {
    const matchesSearch = b.name.toLowerCase().includes(burgerSearch.toLowerCase()) ||
                          (b.category && b.category.toLowerCase().includes(burgerSearch.toLowerCase()));
    const matchesCat = burgerCategoryFilter === 'all' || b.category === burgerCategoryFilter;
    return matchesSearch && matchesCat;
  });

  const filteredCustomers = customers.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(customerSearch.toLowerCase()) ||
                          c.email.toLowerCase().includes(customerSearch.toLowerCase());
    const matchesSeg = customerSegmentFilter === 'all' || c.segment === customerSegmentFilter;
    return matchesSearch && matchesSeg;
  });

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F8FAFC', color: '#0F172A' }}>
      
      {/* Toast Notification */}
      {notification && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '24px',
          background: '#0F172A',
          color: '#FFFFFF',
          padding: '12px 20px',
          borderRadius: '10px',
          fontSize: '0.88rem',
          fontWeight: '700',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span>✓</span> {notification}
        </div>
      )}

      {/* Sidebar Navigation */}
      <aside style={{
        width: '260px',
        background: '#FFFFFF',
        borderRight: '1px solid #E2E8F0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '24px 16px',
        flexShrink: 0
      }}>
        <div>
          {/* Logo Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px', padding: '0 8px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #DC2626, #B91C1C)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.4rem',
              color: 'white',
              boxShadow: '0 4px 10px rgba(220, 38, 38, 0.25)'
            }}>
              🍔
            </div>
            <div>
              <div style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0F172A', lineHeight: '1.1' }}>
                Hamburger <span style={{ color: '#DC2626' }}>Rapid</span>
              </div>
              <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Admin Portal v1.0
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {[
              { id: 'overview', label: 'Resumen & Métricas', icon: '📊' },
              { id: 'burgers', label: 'Catálogo de Burgers (10)', icon: '🍔' },
              { id: 'customers', label: 'Consumidores / Clientes', icon: '👥' },
              { id: 'database', label: 'Estado de la Base de Datos', icon: '🗄️' },
              { id: 'orders', label: 'Órdenes en Tiempo Real', icon: '📋' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '11px 14px',
                  borderRadius: '10px',
                  border: 'none',
                  fontSize: '0.88rem',
                  fontWeight: activeTab === tab.id ? '800' : '600',
                  background: activeTab === tab.id ? '#FEE2E2' : 'transparent',
                  color: activeTab === tab.id ? '#DC2626' : '#475569',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.15s'
                }}
              >
                <span style={{ fontSize: '1.15rem' }}>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Scaffold Quick Links Bottom */}
        <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '16px' }}>
          <div style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: '700', textTransform: 'uppercase', padding: '0 8px', marginBottom: '8px' }}>
            Navegación Rápida
          </div>
          <a
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 10px',
              borderRadius: '8px',
              color: '#0F172A',
              textDecoration: 'none',
              fontSize: '0.82rem',
              fontWeight: '700'
            }}
          >
            <span>🌐</span> Ver E-commerce
          </a>
          <a
            href="/app"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 10px',
              borderRadius: '8px',
              color: '#0F172A',
              textDecoration: 'none',
              fontSize: '0.82rem',
              fontWeight: '700'
            }}
          >
            <span>📱</span> Abrir PWA Mobile
          </a>
        </div>
      </aside>

      {/* Main Content Dashboard */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto' }}>
        
        {/* Top Header */}
        <header style={{
          background: '#FFFFFF',
          borderBottom: '1px solid #E2E8F0',
          padding: '16px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 10
        }}>
          <div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: '800', color: '#0F172A' }}>
              {activeTab === 'overview' && '📊 Resumen Ejecutivo del Negocio'}
              {activeTab === 'burgers' && '🍔 Gestión de Menú e Inventario'}
              {activeTab === 'customers' && '👥 Métricas de Consumidores por Nivel de Consumo'}
              {activeTab === 'database' && '🗄️ Monitor de Base de Datos y Servidor'}
              {activeTab === 'orders' && '📋 Órdenes de Hamburguesas en Vivo'}
            </h2>
            <div style={{ fontSize: '0.78rem', color: '#64748B' }}>
              Plataforma Comercial Hamburger Rapid &bull; Monitoreo en tiempo real
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Database mode pill */}
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: serverHealth?.database?.connected ? '#ECFDF5' : '#FEF3C7',
              color: serverHealth?.database?.connected ? '#059669' : '#B45309',
              padding: '6px 14px',
              borderRadius: '9999px',
              fontSize: '0.78rem',
              fontWeight: '800',
              border: '1px solid',
              borderColor: serverHealth?.database?.connected ? '#A7F3D0' : '#FDE68A'
            }}>
              <span style={{ fontSize: '0.65rem' }}>●</span>
              {serverHealth?.database?.mode === 'mysql' ? '🐬 MySQL 8.0 Activo' : '⚡ Motor In-Memory Resiliente'}
            </span>

            <button
              onClick={loadDashboardData}
              disabled={isLoading}
              style={{
                background: '#FFFFFF',
                border: '1px solid #CBD5E1',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '0.8rem',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>🔄</span> {isLoading ? 'Actualizando...' : 'Refrescar'}
            </button>
          </div>
        </header>

        {/* Dashboard Body */}
        <div style={{ padding: '28px 32px' }}>
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="fade-in">
              {/* 4 Metric Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px', marginBottom: '24px' }}>
                <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '20px', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>
                    Ingresos Totales
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#0F172A', marginTop: '6px' }}>
                    ${totalRevenue.toFixed(2)}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#059669', fontWeight: '700', marginTop: '4px' }}>
                    ↑ +18.4% vs semana previa
                  </div>
                </div>

                <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '20px', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>
                    Clientes Registrados
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#0F172A', marginTop: '6px' }}>
                    {customers.length}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#2563EB', fontWeight: '700', marginTop: '4px' }}>
                    {vipCustomers.length} Clientes VIP (&gt; $150)
                  </div>
                </div>

                <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '20px', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>
                    Ticket Promedio
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#0F172A', marginTop: '6px' }}>
                    ${avgTicket}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: '600', marginTop: '4px' }}>
                    Por orden completada
                  </div>
                </div>

                <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '20px', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#64748B', textTransform: 'uppercase' }}>
                    Burgers en Menú
                  </div>
                  <div style={{ fontSize: '2rem', fontWeight: '800', color: '#DC2626', marginTop: '6px' }}>
                    {totalBurgersInCatalog}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#059669', fontWeight: '700', marginTop: '4px' }}>
                    {availableBurgersCount} disponibles con stock
                  </div>
                </div>
              </div>

              {/* Consumption Segment Analysis Banner */}
              <div style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: 'var(--shadow-sm)',
                marginBottom: '24px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0F172A' }}>
                      Métricas de Consumidores Según Volumen de Consumo
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: '#64748B' }}>
                      Segmentación estratégica de la base de clientes y su contribución a las ventas globales.
                    </p>
                  </div>
                  <button
                    onClick={() => setActiveTab('customers')}
                    style={{
                      background: '#F1F5F9',
                      border: '1px solid #CBD5E1',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      cursor: 'pointer'
                    }}
                  >
                    Ver Detalle Clientes &rarr;
                  </button>
                </div>

                {/* Visual Proportion Bars */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                  {/* VIP */}
                  <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '12px', padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#B45309', background: '#FEF3C7', padding: '2px 8px', borderRadius: '4px' }}>
                        👑 VIP / CONSUMO ALTO
                      </span>
                      <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#B45309' }}>
                        {vipCustomers.length} clientes ({((vipCustomers.length / customers.length) * 100).toFixed(0)}%)
                      </span>
                    </div>
                    <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#92400E', margin: '10px 0 4px' }}>
                      ${vipRevenue.toFixed(2)}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#B45309' }}>
                      Representa el {((vipRevenue / totalRevenue) * 100).toFixed(0)}% de los ingresos totales.
                    </div>
                  </div>

                  {/* FRECUENTE */}
                  <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '12px', padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#1D4ED8', background: '#DBEAFE', padding: '2px 8px', borderRadius: '4px' }}>
                        ⭐ FRECUENTES / MEDIO
                      </span>
                      <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#1D4ED8' }}>
                        {frecuenteCustomers.length} clientes ({((frecuenteCustomers.length / customers.length) * 100).toFixed(0)}%)
                      </span>
                    </div>
                    <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#1E40AF', margin: '10px 0 4px' }}>
                      ${frecuenteRevenue.toFixed(2)}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#1D4ED8' }}>
                      Representa el {((frecuenteRevenue / totalRevenue) * 100).toFixed(0)}% de los ingresos totales.
                    </div>
                  </div>

                  {/* OCASIONAL */}
                  <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '12px', padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#047857', background: '#D1FAE5', padding: '2px 8px', borderRadius: '4px' }}>
                        🌱 OCASIONALES / NUEVOS
                      </span>
                      <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#047857' }}>
                        {ocasionalCustomers.length} clientes ({((ocasionalCustomers.length / customers.length) * 100).toFixed(0)}%)
                      </span>
                    </div>
                    <div style={{ fontSize: '1.6rem', fontWeight: '800', color: '#065F46', margin: '10px 0 4px' }}>
                      ${ocasionalRevenue.toFixed(2)}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#047857' }}>
                      Representa el {((ocasionalRevenue / totalRevenue) * 100).toFixed(0)}% de los ingresos totales.
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Table of Top Burgers */}
              <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0F172A' }}>
                    Top Hamburguesas Disponibles &bull; Nivel de Especialidad
                  </h3>
                  <button
                    onClick={() => setActiveTab('burgers')}
                    style={{
                      background: '#DC2626',
                      color: 'white',
                      border: 'none',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      cursor: 'pointer'
                    }}
                  >
                    Ver las 10 Hamburguesas &rarr;
                  </button>
                </div>

                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid #E2E8F0', color: '#64748B' }}>
                        <th style={{ padding: '10px 12px' }}>Hamburguesa</th>
                        <th style={{ padding: '10px 12px' }}>Especialidad</th>
                        <th style={{ padding: '10px 12px' }}>Precio</th>
                        <th style={{ padding: '10px 12px' }}>Stock</th>
                        <th style={{ padding: '10px 12px' }}>Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.slice(0, 5).map(b => (
                        <tr key={b.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                          <td style={{ padding: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <img src={b.image} alt={b.name} style={{ width: '38px', height: '38px', borderRadius: '8px', objectFit: 'cover' }} />
                            <div>
                              <div style={{ fontWeight: '800', color: '#0F172A' }}>{b.name}</div>
                              <div style={{ fontSize: '0.72rem', color: '#64748B' }}>{b.category}</div>
                            </div>
                          </td>
                          <td style={{ padding: '12px' }}>
                            <span style={{
                              background: b.badge_bg || '#FEF3C7',
                              color: b.badge_color || '#B45309',
                              padding: '3px 8px',
                              borderRadius: '6px',
                              fontSize: '0.75rem',
                              fontWeight: '800'
                            }}>
                              {b.specialty_level}
                            </span>
                          </td>
                          <td style={{ padding: '12px', fontWeight: '800', color: '#DC2626' }}>
                            ${b.price.toFixed(2)}
                          </td>
                          <td style={{ padding: '12px', fontWeight: '700' }}>
                            {b.stock} unidades
                          </td>
                          <td style={{ padding: '12px' }}>
                            <span style={{
                              background: b.stock > 0 ? '#ECFDF5' : '#FEE2E2',
                              color: b.stock > 0 ? '#059669' : '#DC2626',
                              padding: '3px 8px',
                              borderRadius: '6px',
                              fontSize: '0.72rem',
                              fontWeight: '800'
                            }}>
                              {b.stock > 0 ? '✓ Disponible' : 'Agotado'}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: BURGERS CATALOG (10 ITEMS) */}
          {activeTab === 'burgers' && (
            <div className="fade-in">
              {/* Filter & Search Bar */}
              <div style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '16px',
                padding: '16px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px',
                flexWrap: 'wrap'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: '240px' }}>
                  <span style={{ color: '#94A3B8' }}>🔍</span>
                  <input
                    type="text"
                    placeholder="Buscar hamburguesa por nombre o categoría..."
                    value={burgerSearch}
                    onChange={(e) => setBurgerSearch(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  {['all', 'Especiales del Rey', 'Clásicas', 'Dobles', 'Gourmet', 'Pollo & Veggie'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setBurgerCategoryFilter(cat)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '8px',
                        border: '1px solid',
                        borderColor: burgerCategoryFilter === cat ? '#DC2626' : '#CBD5E1',
                        background: burgerCategoryFilter === cat ? '#DC2626' : '#FFFFFF',
                        color: burgerCategoryFilter === cat ? '#FFFFFF' : '#475569',
                        fontSize: '0.78rem',
                        fontWeight: '700',
                        cursor: 'pointer'
                      }}
                    >
                      {cat === 'all' ? 'Todas' : cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Burgers Table */}
              <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#64748B' }}>
                      <th style={{ padding: '14px 16px' }}>#</th>
                      <th style={{ padding: '14px 16px' }}>Hamburguesa</th>
                      <th style={{ padding: '14px 16px' }}>Nivel de Especialidad</th>
                      <th style={{ padding: '14px 16px' }}>Precio</th>
                      <th style={{ padding: '14px 16px' }}>Stock Actual</th>
                      <th style={{ padding: '14px 16px' }}>Disponibilidad</th>
                      <th style={{ padding: '14px 16px', textAlign: 'right' }}>Ajustar Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredBurgers.map((b, idx) => (
                      <tr key={b.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                        <td style={{ padding: '14px 16px', color: '#94A3B8', fontWeight: '700' }}>
                          {idx + 1}
                        </td>
                        <td style={{ padding: '14px 16px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <img src={b.image} alt={b.name} style={{ width: '48px', height: '48px', borderRadius: '10px', objectFit: 'cover' }} />
                            <div>
                              <div style={{ fontWeight: '800', color: '#0F172A', fontSize: '0.92rem' }}>{b.name}</div>
                              <div style={{ fontSize: '0.74rem', color: '#64748B' }}>{b.category} &bull; ★ {b.rating || 4.9}</div>
                            </div>
                          </div>
                        </td>
                        <td style={{ padding: '14px 16px' }}>
                          <span style={{
                            background: b.badge_bg || '#FEF3C7',
                            color: b.badge_color || '#B45309',
                            padding: '4px 10px',
                            borderRadius: '9999px',
                            fontSize: '0.78rem',
                            fontWeight: '800'
                          }}>
                            {b.specialty_level}
                          </span>
                        </td>
                        <td style={{ padding: '14px 16px', fontWeight: '800', color: '#DC2626', fontSize: '1rem' }}>
                          ${b.price.toFixed(2)}
                        </td>
                        <td style={{ padding: '14px 16px' }}>
                          <span style={{
                            fontSize: '0.9rem',
                            fontWeight: '800',
                            color: b.stock < 10 ? '#DC2626' : '#0F172A'
                          }}>
                            {b.stock} unidades
                          </span>
                          {b.stock < 10 && b.stock > 0 && (
                            <span style={{ display: 'block', fontSize: '0.7rem', color: '#DC2626', fontWeight: '700' }}>
                              ⚠️ Stock bajo
                            </span>
                          )}
                        </td>
                        <td style={{ padding: '14px 16px' }}>
                          <span style={{
                            background: b.stock > 0 ? '#ECFDF5' : '#FEE2E2',
                            color: b.stock > 0 ? '#059669' : '#DC2626',
                            padding: '4px 10px',
                            borderRadius: '9999px',
                            fontSize: '0.74rem',
                            fontWeight: '800'
                          }}>
                            {b.stock > 0 ? '🟢 Disponible' : '🔴 Agotado'}
                          </span>
                        </td>
                        <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                          <div style={{ display: 'inline-flex', gap: '6px' }}>
                            <button
                              onClick={() => handleStockChange(b.id, -1)}
                              disabled={b.stock <= 0}
                              style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '6px',
                                border: '1px solid #CBD5E1',
                                background: '#FFFFFF',
                                fontWeight: '800',
                                cursor: 'pointer'
                              }}
                            >
                              -
                            </button>
                            <button
                              onClick={() => handleStockChange(b.id, 5)}
                              style={{
                                padding: '4px 8px',
                                borderRadius: '6px',
                                border: '1px solid #CBD5E1',
                                background: '#F1F5F9',
                                fontSize: '0.75rem',
                                fontWeight: '700',
                                cursor: 'pointer'
                              }}
                            >
                              +5 Stock
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: CUSTOMERS & CONSUMPTION METRICS */}
          {activeTab === 'customers' && (
            <div className="fade-in">
              {/* Segment Summary Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '24px' }}>
                <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '20px', borderLeft: '5px solid #F59E0B' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#B45309' }}>
                    👑 SEGMENTO VIP (&gt; $150)
                  </div>
                  <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0F172A', marginTop: '6px' }}>
                    {vipCustomers.length} Clientes VIP
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '4px' }}>
                    Consumo acumulado: <strong>${vipRevenue.toFixed(2)}</strong> &bull; LTV más alto
                  </div>
                </div>

                <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '20px', borderLeft: '5px solid #2563EB' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#1D4ED8' }}>
                    ⭐ FRECUENTES ($50 - $150)
                  </div>
                  <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0F172A', marginTop: '6px' }}>
                    {frecuenteCustomers.length} Clientes Frecuentes
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '4px' }}>
                    Consumo acumulado: <strong>${frecuenteRevenue.toFixed(2)}</strong> &bull; Pedidos semanales
                  </div>
                </div>

                <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '20px', borderLeft: '5px solid #10B981' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '800', color: '#047857' }}>
                    🌱 OCASIONALES (&lt; $50)
                  </div>
                  <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#0F172A', marginTop: '6px' }}>
                    {ocasionalCustomers.length} Clientes Nuevos
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '4px' }}>
                    Consumo acumulado: <strong>${ocasionalRevenue.toFixed(2)}</strong> &bull; En conversión
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '16px',
                padding: '16px 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px',
                flexWrap: 'wrap'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1, minWidth: '240px' }}>
                  <span style={{ color: '#94A3B8' }}>🔍</span>
                  <input
                    type="text"
                    placeholder="Buscar cliente por nombre o email..."
                    value={customerSearch}
                    onChange={(e) => setCustomerSearch(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      border: '1px solid #CBD5E1',
                      fontSize: '0.85rem'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  {[
                    { id: 'all', label: 'Todos' },
                    { id: 'VIP', label: '👑 Solo VIP' },
                    { id: 'Frecuente', label: '⭐ Solo Frecuentes' },
                    { id: 'Ocasional', label: '🌱 Solo Ocasionales' }
                  ].map(seg => (
                    <button
                      key={seg.id}
                      onClick={() => setCustomerSegmentFilter(seg.id)}
                      style={{
                        padding: '6px 12px',
                        borderRadius: '8px',
                        border: '1px solid',
                        borderColor: customerSegmentFilter === seg.id ? '#DC2626' : '#CBD5E1',
                        background: customerSegmentFilter === seg.id ? '#DC2626' : '#FFFFFF',
                        color: customerSegmentFilter === seg.id ? '#FFFFFF' : '#475569',
                        fontSize: '0.78rem',
                        fontWeight: '700',
                        cursor: 'pointer'
                      }}
                    >
                      {seg.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Customers Table */}
              <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0', color: '#64748B' }}>
                      <th style={{ padding: '14px 16px' }}>Consumidor</th>
                      <th style={{ padding: '14px 16px' }}>Segmento de Consumo</th>
                      <th style={{ padding: '14px 16px' }}>Gasto Acumulado</th>
                      <th style={{ padding: '14px 16px' }}>N° Pedidos</th>
                      <th style={{ padding: '14px 16px' }}>Hamburguesa Favorita</th>
                      <th style={{ padding: '14px 16px' }}>Puntos Club</th>
                      <th style={{ padding: '14px 16px' }}>Última Actividad</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredCustomers.map(c => (
                      <tr key={c.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                        <td style={{ padding: '14px 16px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <img src={c.avatar} alt={c.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                            <div>
                              <div style={{ fontWeight: '800', color: '#0F172A' }}>{c.name}</div>
                              <div style={{ fontSize: '0.74rem', color: '#64748B' }}>{c.email}</div>
                            </div>
                          </div>
                        </td>
                        <td style={{ padding: '14px 16px' }}>
                          <span style={{
                            padding: '4px 10px',
                            borderRadius: '9999px',
                            fontSize: '0.75rem',
                            fontWeight: '800',
                            background: c.segment === 'VIP' ? '#FEF3C7' : c.segment === 'Frecuente' ? '#DBEAFE' : '#DCFCE7',
                            color: c.segment === 'VIP' ? '#B45309' : c.segment === 'Frecuente' ? '#1D4ED8' : '#15803D'
                          }}>
                            {c.segmentLabel || c.segment}
                          </span>
                        </td>
                        <td style={{ padding: '14px 16px', fontWeight: '800', fontSize: '1rem', color: '#0F172A' }}>
                          ${c.totalSpent.toFixed(2)}
                        </td>
                        <td style={{ padding: '14px 16px', fontWeight: '700' }}>
                          {c.orderCount} compras
                        </td>
                        <td style={{ padding: '14px 16px', color: '#B45309', fontWeight: '700' }}>
                          🍔 {c.favoriteBurger}
                        </td>
                        <td style={{ padding: '14px 16px', fontWeight: '700', color: '#D97706' }}>
                          {c.loyaltyPoints} pts
                        </td>
                        <td style={{ padding: '14px 16px', color: '#64748B', fontSize: '0.78rem' }}>
                          {c.lastOrder}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: DATABASE & SERVER STATUS */}
          {activeTab === 'database' && (
            <div className="fade-in">
              <div style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: 'var(--shadow-sm)',
                marginBottom: '24px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0F172A' }}>
                      Estado del Motor de Base de Datos
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: '#64748B' }}>
                      Diagnóstico de persistencia y conexión en Dokploy / Entorno Local.
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={loadDashboardData}
                      style={{
                        background: '#0F172A',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        cursor: 'pointer'
                      }}
                    >
                      🩺 Probar Conexión (Ping)
                    </button>
                    <button
                      onClick={handleResetDemoData}
                      style={{
                        background: '#DC2626',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '8px',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        cursor: 'pointer'
                      }}
                    >
                      ↺ Restablecer Datos Menú
                    </button>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: '700', textTransform: 'uppercase' }}>
                      Modo Operacional
                    </div>
                    <div style={{ fontSize: '1.25rem', fontWeight: '800', color: serverHealth?.database?.connected ? '#059669' : '#D97706', marginTop: '4px' }}>
                      {serverHealth?.database?.mode === 'mysql' ? '🐬 Conectado a Servidor MySQL' : '⚡ Motor In-Memory con Resiliencia'}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#64748B', marginTop: '4px' }}>
                      {serverHealth?.database?.mode === 'mysql' 
                        ? 'Las transacciones y pedidos se persisten en tablas MySQL.' 
                        : 'El sistema funciona en memoria asegurando 100% de disponibilidad sin caídas.'}
                    </div>
                  </div>

                  <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '16px' }}>
                    <div style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: '700', textTransform: 'uppercase' }}>
                      Parámetros de Red & Host
                    </div>
                    <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#0F172A', marginTop: '6px' }}>
                      Host: <code>{serverHealth?.database?.host || 'Auto-discovery Local'}</code>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#64748B', marginTop: '2px' }}>
                      Base de Datos: <strong>{serverHealth?.database?.database || 'hamburger_rapid'}</strong> &bull; Usuario: <strong>{serverHealth?.database?.user || 'root'}</strong>
                    </div>
                  </div>
                </div>

                {/* Database Metrics Table */}
                <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '16px' }}>
                  <h4 style={{ fontSize: '0.92rem', fontWeight: '800', color: '#0F172A', marginBottom: '12px' }}>
                    Resumen de Tablas y Entidades
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                    <div style={{ padding: '12px', background: '#F1F5F9', borderRadius: '8px' }}>
                      <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Tabla <code>products</code></div>
                      <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#0F172A' }}>{products.length} hamburguesas</div>
                    </div>
                    <div style={{ padding: '12px', background: '#F1F5F9', borderRadius: '8px' }}>
                      <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Tabla <code>customers</code></div>
                      <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#0F172A' }}>{customers.length} consumidores</div>
                    </div>
                    <div style={{ padding: '12px', background: '#F1F5F9', borderRadius: '8px' }}>
                      <div style={{ fontSize: '0.75rem', color: '#64748B' }}>Tabla <code>orders</code></div>
                      <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#0F172A' }}>{orders.length > 0 ? orders.length : '4 órdenes activas'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: ORDERS */}
          {activeTab === 'orders' && (
            <div className="fade-in">
              <div style={{
                background: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: '#0F172A' }}>
                      Monitoreo de Órdenes Recibidas desde la PWA
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: '#64748B' }}>
                      Visualiza en tiempo real las compras simuladas o realizadas por los usuarios en la aplicación móvil.
                    </p>
                  </div>
                  <a
                    href="/app"
                    style={{
                      background: '#DC2626',
                      color: 'white',
                      textDecoration: 'none',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: '700'
                    }}
                  >
                    + Simular Compra en PWA &rarr;
                  </a>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {(orders.length > 0 ? orders : [
                    {
                      id: 'HR-1089',
                      customerName: 'Carlos Mendoza',
                      items: [{ name: 'Rey de las Burgers', quantity: 2, price: 16.90 }, { name: 'Burger Real Doble', quantity: 1, price: 13.90 }],
                      total: 47.70,
                      status: 'En la Parrilla 🔥',
                      deliveryType: 'Delivery Express',
                      createdAt: 'Hace 10 min'
                    },
                    {
                      id: 'HR-1088',
                      customerName: 'Valentina Silva',
                      items: [{ name: 'Burger Trufada Imperial', quantity: 1, price: 17.50 }],
                      total: 28.00,
                      status: 'En camino 🛵',
                      deliveryType: 'Delivery Express',
                      createdAt: 'Hace 25 min'
                    },
                    {
                      id: 'HR-1087',
                      customerName: 'Alejandro Morales',
                      items: [{ name: 'Burger Doble Especial', quantity: 2, price: 14.90 }],
                      total: 29.80,
                      status: 'Entregado ✅',
                      deliveryType: 'Retiro en Local',
                      createdAt: 'Hace 1 hora'
                    }
                  ]).map((order, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: '#F8FAFC',
                        border: '1px solid #E2E8F0',
                        borderRadius: '12px',
                        padding: '16px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontWeight: '800', color: '#0F172A', fontSize: '0.95rem' }}>
                            {order.id}
                          </span>
                          <span style={{ fontSize: '0.75rem', color: '#64748B' }}>&bull; {order.customerName}</span>
                          <span style={{
                            fontSize: '0.72rem',
                            fontWeight: '800',
                            padding: '2px 8px',
                            borderRadius: '6px',
                            background: order.status.includes('Parrilla') ? '#FEF3C7' : order.status.includes('camino') ? '#DBEAFE' : '#DCFCE7',
                            color: order.status.includes('Parrilla') ? '#B45309' : order.status.includes('camino') ? '#1D4ED8' : '#15803D'
                          }}>
                            {order.status}
                          </span>
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#475569', marginTop: '4px' }}>
                          {order.items?.map(i => `${i.quantity || 1}x ${i.name}`).join(', ')}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '2px' }}>
                          {order.deliveryType} &bull; {order.createdAt}
                        </div>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#DC2626' }}>
                          ${order.total?.toFixed(2) || order.total}
                        </div>
                        <span style={{ fontSize: '0.72rem', color: '#059669', fontWeight: '700' }}>
                          Procesado
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
