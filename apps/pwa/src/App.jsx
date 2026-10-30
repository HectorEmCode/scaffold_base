import React, { useState, useEffect } from 'react';

const INITIAL_MENU = [
  {
    id: 1,
    name: 'Rey de las Burgers',
    category: 'Especiales',
    price: 16.90,
    specialtyLevel: '👑 Suprema',
    badgeColor: '#B45309',
    badgeBg: '#FEF3C7',
    rating: 4.95,
    prepTime: '12-14 min',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&auto=format&fit=crop&q=80',
    description: 'Triple medallón de Angus 300g, cheddar curado, tocineta al maple caramelizada y salsa secreta King.'
  },
  {
    id: 2,
    name: 'Burger Real Clásica',
    category: 'Clasicas',
    price: 10.50,
    specialtyLevel: '⭐ Clásica',
    badgeColor: '#1D4ED8',
    badgeBg: '#DBEAFE',
    rating: 4.88,
    prepTime: '8-10 min',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&auto=format&fit=crop&q=80',
    description: 'Medallón 180g de res a la plancha, queso americano fundido, pepinillos encurtidos y salsa Real.'
  },
  {
    id: 3,
    name: 'Burger Real Doble',
    category: 'Dobles',
    price: 13.90,
    specialtyLevel: '🔥 Doble',
    badgeColor: '#B91C1C',
    badgeBg: '#FEE2E2',
    rating: 4.91,
    prepTime: '10-12 min',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=80',
    description: 'Doble carne a la brasa (360g), cuatro quesos cheddar, cebolla morada y salsa barbacoa ahumada.'
  },
  {
    id: 4,
    name: 'Burger Doble Especial',
    category: 'Dobles',
    price: 14.90,
    specialtyLevel: '💎 Especial',
    badgeColor: '#6D28D9',
    badgeBg: '#EDE9FE',
    rating: 4.93,
    prepTime: '11-13 min',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&auto=format&fit=crop&q=80',
    description: 'Doble smash caramelizado, huevo campero frito a la plancha, tocineta glaseada y alioli suave.'
  },
  {
    id: 5,
    name: 'Burger Trufada Imperial',
    category: 'Gourmet',
    price: 17.50,
    specialtyLevel: '✨ Gourmet',
    badgeColor: '#92400E',
    badgeBg: '#FEF3C7',
    rating: 4.97,
    prepTime: '12-15 min',
    image: 'https://images.unsplash.com/photo-1582196016295-f8c8bd4b3e99?w=600&auto=format&fit=crop&q=80',
    description: 'Res madurada 21 días, queso brie fundido, champiñones salteados al romero y mayonesa de trufa.'
  },
  {
    id: 6,
    name: 'Burger Crispy BBQ Bacon',
    category: 'Especiales',
    price: 12.80,
    specialtyLevel: '🥓 Ahumada',
    badgeColor: '#991B1B',
    badgeBg: '#FEE2E2',
    rating: 4.86,
    prepTime: '9-11 min',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&auto=format&fit=crop&q=80',
    description: 'Glaseada en BBQ al bourbon con tocineta extra crujiente, queso cheddar y cebolla crispy.'
  },
  {
    id: 7,
    name: 'Burger Royal Cheddar & Jalapeño',
    category: 'Especiales',
    price: 12.50,
    specialtyLevel: '🌶️ Spicy',
    badgeColor: '#C2410C',
    badgeBg: '#FFEDD5',
    rating: 4.84,
    prepTime: '9-11 min',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&auto=format&fit=crop&q=80',
    description: 'Baño de queso cheddar líquido artesanal, jalapeños tatemados al fuego y alioli chipotle.'
  },
  {
    id: 8,
    name: 'Burger Smash Supreme',
    category: 'Clasicas',
    price: 11.90,
    specialtyLevel: '⚡ Smash',
    badgeColor: '#0369A1',
    badgeBg: '#E0F2FE',
    rating: 4.89,
    prepTime: '7-9 min',
    image: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=600&auto=format&fit=crop&q=80',
    description: 'Costra maillard caramelizada, queso gouda fundido, cebolla confitada y relish con mostaza dijon.'
  },
  {
    id: 9,
    name: 'Burger Crispy Chicken Deluxe',
    category: 'Pollo',
    price: 11.75,
    specialtyLevel: '🍗 Pollo',
    badgeColor: '#15803D',
    badgeBg: '#DCFCE7',
    rating: 4.87,
    prepTime: '10-12 min',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=600&auto=format&fit=crop&q=80',
    description: 'Pollo campero marinado en buttermilk, doble rebozado crujiente, coleslaw fresca y salsa miel-mostaza.'
  },
  {
    id: 10,
    name: 'Burger Portobello & Queso Suizo',
    category: 'Veggie',
    price: 13.20,
    specialtyLevel: '🌱 Veggie',
    badgeColor: '#065F46',
    badgeBg: '#D1FAE5',
    rating: 4.92,
    prepTime: '10-12 min',
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&auto=format&fit=crop&q=80',
    description: 'Portobello gigante a la brasa, queso suizo Emmental fundido, cebolla al vino tinto y rúcula silvestre.'
  }
];

const OFFERS = [
  {
    code: 'RAPID20',
    title: '20% de Descuento Especial',
    discount: 0.20,
    description: 'Válido en cualquier pedido mayor a $20.00.',
    tag: '👑 EXCLUSIVO PWA',
    badgeColor: '#DC2626'
  },
  {
    code: 'REYREAL',
    title: 'Papas Trufadas + Bebida Gratis',
    discount: 5.50,
    fixedDiscount: true,
    description: 'En la compra de tu "Rey de las Burgers".',
    tag: '🍟 FAVORITO',
    badgeColor: '#D97706'
  },
  {
    code: 'DUOFLASH',
    title: 'Cupón Bienvenida $4.00 OFF',
    discount: 4.00,
    fixedDiscount: true,
    description: 'Para tu primer pedido comercial en Hamburger Rapid.',
    tag: '⚡ NUEVO CLIENTE',
    badgeColor: '#2563EB'
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('menu'); // 'menu' | 'ofertas' | 'ordenes' | 'perfil'
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  // Menu & Search
  const [menuItems, setMenuItems] = useState(INITIAL_MENU);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Cart
  const [cart, setCart] = useState([
    { ...INITIAL_MENU[0], quantity: 1 } // pre-populate with Rey de las Burgers
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponCodeInput, setCouponCodeInput] = useState('');
  const [deliveryType, setDeliveryType] = useState('Delivery Express');

  // Orders State
  const [activeOrder, setActiveOrder] = useState({
    id: 'HR-1095',
    customerName: 'Carlos Mendoza',
    items: [{ id: 1, name: 'Rey de las Burgers', quantity: 1, price: 16.90 }],
    total: 16.90,
    step: 2, // 1: Recibido, 2: En la Parrilla, 3: En camino, 4: Entregado
    stepName: 'En la Parrilla 🔥',
    timeRemaining: '14 min',
    createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    deliveryType: 'Delivery Express',
    address: 'Av. Libertador 1420, Depto 5B'
  });

  const [orderHistory, setOrderHistory] = useState([
    {
      id: 'HR-1082',
      date: 'Ayer, 20:45',
      itemsSummary: '1x Burger Real Doble, 1x Papas Rústicas',
      total: 17.40,
      status: 'Entregado ✅'
    },
    {
      id: 'HR-1075',
      date: '26 Octubre',
      itemsSummary: '2x Burger Real Clásica, 2x Bebidas',
      total: 25.00,
      status: 'Entregado ✅'
    }
  ]);

  // Order Success Modal
  const [showOrderSuccessModal, setShowOrderSuccessModal] = useState(false);
  const [justPlacedOrder, setJustPlacedOrder] = useState(null);

  // Network & Install listeners
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    const handleInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleInstallPrompt);

    // Fetch initial products from backend API if available
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data && data.data.length > 0) {
          setMenuItems(data.data);
        }
      })
      .catch(() => {
        // Fallback to INITIAL_MENU
      });

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      window.removeEventListener('beforeinstallprompt', handleInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      alert('Para instalar: en tu navegador selecciona "Agregar a la pantalla de inicio" o "Instalar App".');
      return;
    }
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
  };

  // Cart operations
  const addToCart = (burger) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === burger.id);
      if (existing) {
        return prev.map(item => item.id === burger.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...burger, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const cartSubtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  let discountAmount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.fixedDiscount) {
      discountAmount = appliedCoupon.discount;
    } else {
      discountAmount = cartSubtotal * appliedCoupon.discount;
    }
  }
  discountAmount = Math.min(cartSubtotal, discountAmount);

  const deliveryFee = cartSubtotal > 25 || cart.length === 0 ? 0 : 2.50;
  const cartTotal = Math.max(0, cartSubtotal - discountAmount + deliveryFee);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const applyCouponCode = (code) => {
    const offer = OFFERS.find(o => o.code.toUpperCase() === code.trim().toUpperCase());
    if (offer) {
      setAppliedCoupon(offer);
      setCouponCodeInput(offer.code);
    } else {
      alert('Cupón no válido. Prueba RAPID20 o REYREAL.');
    }
  };

  // Simulation: Place Order
  const handleSimulatePurchase = async () => {
    if (cart.length === 0) return;

    const newOrderData = {
      customerName: 'Carlos Mendoza',
      items: cart.map(i => ({ id: i.id, name: i.name, quantity: i.quantity, price: i.price })),
      total: parseFloat(cartTotal.toFixed(2)),
      deliveryType,
      address: 'Av. Libertador 1420, Depto 5B'
    };

    // Try sending to backend API
    try {
      await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newOrderData)
      });
    } catch (e) {
      console.log('Modo simulación offline activo:', e.message);
    }

    const createdOrder = {
      id: `HR-${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: 'Carlos Mendoza',
      items: [...cart],
      total: parseFloat(cartTotal.toFixed(2)),
      step: 2, // 'En la Parrilla 🔥'
      stepName: 'En la Parrilla 🔥',
      timeRemaining: '18 min',
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      deliveryType,
      address: 'Av. Libertador 1420, Depto 5B'
    };

    setActiveOrder(createdOrder);
    setJustPlacedOrder(createdOrder);
    setCart([]);
    setIsCartOpen(false);
    setShowOrderSuccessModal(true);
  };

  // Simulation: Advance Order Step
  const advanceOrderStep = () => {
    if (!activeOrder) return;
    const nextStep = activeOrder.step < 4 ? activeOrder.step + 1 : 1;
    const stepNames = {
      1: 'Recibido ✅',
      2: 'En la Parrilla 🔥',
      3: 'En camino 🛵',
      4: 'Entregado 🎉'
    };
    const times = {
      1: '24 min',
      2: '16 min',
      3: '7 min',
      4: 'Entregado'
    };

    const updated = {
      ...activeOrder,
      step: nextStep,
      stepName: stepNames[nextStep],
      timeRemaining: times[nextStep]
    };

    setActiveOrder(updated);

    if (nextStep === 4) {
      setOrderHistory(prev => [
        {
          id: updated.id,
          date: 'Hoy, hace instantes',
          itemsSummary: updated.items.map(i => `${i.quantity}x ${i.name}`).join(', '),
          total: updated.total,
          status: 'Entregado ✅'
        },
        ...prev
      ]);
    }
  };

  // Filtered menu
  const filteredMenu = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
      
      {/* Top Mobile Bar */}
      <header style={{
        background: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        padding: '12px 16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 20
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            background: 'linear-gradient(135deg, #DC2626, #B91C1C)',
            color: 'white',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem'
          }}>
            🍔
          </div>
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0F172A', lineHeight: '1.1' }}>
              Hamburger <span style={{ color: '#DC2626' }}>Rapid</span>
            </div>
            <div style={{ fontSize: '0.68rem', color: '#64748B', fontWeight: '600' }}>
              📍 Sucursal Central &bull; 20-30 min
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            fontSize: '0.7rem',
            padding: '3px 8px',
            borderRadius: '12px',
            fontWeight: '700',
            background: isOnline ? '#ECFDF5' : '#FEE2E2',
            color: isOnline ? '#059669' : '#DC2626'
          }}>
            {isOnline ? '🟢 En Línea' : '🔴 Offline'}
          </span>

          {deferredPrompt && (
            <button
              onClick={handleInstallClick}
              style={{
                background: '#FEF3C7',
                border: '1px solid #FDE68A',
                color: '#B45309',
                padding: '4px 8px',
                borderRadius: '8px',
                fontSize: '0.7rem',
                fontWeight: '700',
                cursor: 'pointer'
              }}
            >
              📲 Instalar
            </button>
          )}

          {/* Cart Icon in Header */}
          <button
            onClick={() => setIsCartOpen(true)}
            style={{
              position: 'relative',
              background: '#F1F5F9',
              border: 'none',
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.15rem',
              cursor: 'pointer'
            }}
          >
            🛒
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                background: '#DC2626',
                color: 'white',
                fontSize: '0.65rem',
                fontWeight: '800',
                borderRadius: '9999px',
                minWidth: '18px',
                height: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 4px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Main Content Area (Scrollable) */}
      <main style={{ flex: 1, overflowY: 'auto', padding: '16px 14px 80px', background: '#F8FAFC' }}>
        
        {/* TAB 1: MENÚ */}
        {activeTab === 'menu' && (
          <div className="fade-in">
            {/* Search Input */}
            <div style={{ position: 'relative', marginBottom: '14px' }}>
              <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontSize: '0.95rem', color: '#94A3B8' }}>
                🔍
              </span>
              <input
                type="text"
                placeholder="Buscar tu burger favorita..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px 10px 38px',
                  borderRadius: '12px',
                  border: '1px solid #E2E8F0',
                  fontSize: '0.88rem',
                  outline: 'none',
                  background: '#FFFFFF',
                  color: '#0F172A',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.03)'
                }}
              />
            </div>

            {/* Quick Hero Banner in Menu */}
            <div style={{
              background: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
              border: '1px solid #FDE68A',
              borderRadius: '14px',
              padding: '14px 16px',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 2px 5px rgba(245, 158, 11, 0.08)'
            }}>
              <div>
                <span style={{ fontSize: '0.7rem', fontWeight: '800', background: '#DC2626', color: 'white', padding: '2px 6px', borderRadius: '4px' }}>
                  PROMO HOY
                </span>
                <div style={{ fontSize: '1rem', fontWeight: '800', color: '#92400E', marginTop: '4px' }}>
                  Rey de las Burgers
                </div>
                <div style={{ fontSize: '0.75rem', color: '#B45309' }}>
                  Triple Angus + Papas trufadas
                </div>
              </div>
              <button
                onClick={() => {
                  addToCart(INITIAL_MENU[0]);
                  setIsCartOpen(true);
                }}
                style={{
                  background: '#DC2626',
                  color: 'white',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  cursor: 'pointer'
                }}
              >
                + Agregar $16.90
              </button>
            </div>

            {/* Category Filter Pills */}
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '8px', marginBottom: '14px' }}>
              {[
                { id: 'all', label: 'Todas' },
                { id: 'Especiales', label: '👑 Especiales' },
                { id: 'Dobles', label: '🔥 Dobles' },
                { id: 'Clasicas', label: '⭐ Clásicas' },
                { id: 'Gourmet', label: '✨ Gourmet' },
                { id: 'Pollo', label: '🍗 Pollo' },
                { id: 'Veggie', label: '🌱 Veggie' }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    whiteSpace: 'nowrap',
                    border: '1px solid',
                    borderColor: selectedCategory === cat.id ? '#DC2626' : '#E2E8F0',
                    background: selectedCategory === cat.id ? '#DC2626' : '#FFFFFF',
                    color: selectedCategory === cat.id ? '#FFFFFF' : '#64748B',
                    cursor: 'pointer',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Burgers List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {filteredMenu.map(burger => (
                <div
                  key={burger.id}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '14px',
                    border: '1px solid #E2E8F0',
                    overflow: 'hidden',
                    display: 'flex',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                    position: 'relative'
                  }}
                >
                  <div style={{ width: '115px', position: 'relative', flexShrink: 0 }}>
                    <img
                      src={burger.image}
                      alt={burger.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      loading="lazy"
                    />
                    <span style={{
                      position: 'absolute',
                      top: '6px',
                      left: '6px',
                      background: burger.badgeBg || '#FEF3C7',
                      color: burger.badgeColor || '#B45309',
                      fontSize: '0.62rem',
                      fontWeight: '800',
                      padding: '2px 6px',
                      borderRadius: '6px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                      {burger.specialtyLevel || '⭐ Especial'}
                    </span>
                  </div>

                  <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h4 style={{ fontSize: '0.92rem', fontWeight: '800', color: '#0F172A', lineHeight: '1.2' }}>
                          {burger.name}
                        </h4>
                        <span style={{ fontSize: '0.72rem', fontWeight: '700', color: '#D97706' }}>
                          ★ {burger.rating || 4.9}
                        </span>
                      </div>
                      <p style={{
                        fontSize: '0.74rem',
                        color: '#64748B',
                        lineHeight: '1.4',
                        marginTop: '4px',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {burger.description}
                      </p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                      <span style={{ fontSize: '1.05rem', fontWeight: '800', color: '#DC2626' }}>
                        ${burger.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => addToCart(burger)}
                        style={{
                          background: '#FEE2E2',
                          color: '#DC2626',
                          border: 'none',
                          padding: '6px 12px',
                          borderRadius: '8px',
                          fontSize: '0.78rem',
                          fontWeight: '800',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        + Agregar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: OFERTAS */}
        {activeTab === 'ofertas' && (
          <div className="fade-in">
            <div style={{ marginBottom: '14px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0F172A' }}>
                🏷️ Cupones & Promociones
              </h3>
              <p style={{ fontSize: '0.8rem', color: '#64748B' }}>
                Aplica cualquiera de nuestras ofertas con un toque y simula el descuento en tu compra.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {OFFERS.map(offer => (
                <div
                  key={offer.code}
                  style={{
                    background: '#FFFFFF',
                    border: '1px dashed #CBD5E1',
                    borderRadius: '16px',
                    padding: '16px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: '800',
                      background: '#FEF3C7',
                      color: offer.badgeColor,
                      padding: '3px 8px',
                      borderRadius: '6px'
                    }}>
                      {offer.tag}
                    </span>
                    <span style={{ fontSize: '0.85rem', fontWeight: '800', color: '#0F172A', fontFamily: 'monospace' }}>
                      Código: {offer.code}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: '#0F172A', marginBottom: '4px' }}>
                    {offer.title}
                  </h4>
                  <p style={{ fontSize: '0.78rem', color: '#64748B', marginBottom: '14px' }}>
                    {offer.description}
                  </p>

                  <button
                    onClick={() => {
                      applyCouponCode(offer.code);
                      setIsCartOpen(true);
                    }}
                    style={{
                      width: '100%',
                      background: appliedCoupon?.code === offer.code ? '#10B981' : '#DC2626',
                      color: 'white',
                      border: 'none',
                      padding: '10px',
                      borderRadius: '10px',
                      fontSize: '0.82rem',
                      fontWeight: '800',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px'
                    }}
                  >
                    {appliedCoupon?.code === offer.code ? '✅ Cupón Aplicado en Carrito' : '🎁 Canjear Oferta'}
                  </button>
                </div>
              ))}
            </div>

            {/* Combo card highlight */}
            <div style={{
              marginTop: '18px',
              background: 'linear-gradient(135deg, #18181B 0%, #27272A 100%)',
              color: 'white',
              borderRadius: '16px',
              padding: '18px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.15)'
            }}>
              <span style={{ fontSize: '0.7rem', color: '#FBBF24', fontWeight: '800', textTransform: 'uppercase' }}>
                Combo Rey Real 2026
              </span>
              <h4 style={{ fontSize: '1.15rem', fontWeight: '800', margin: '4px 0 8px' }}>
                Rey de las Burgers + Bebida + Papas
              </h4>
              <p style={{ fontSize: '0.78rem', color: '#A1A1AA', marginBottom: '14px' }}>
                Ahorra $4.50 comprando el pack oficial insignia.
              </p>
              <button
                onClick={() => {
                  addToCart(INITIAL_MENU[0]);
                  setIsCartOpen(true);
                }}
                style={{
                  background: '#DC2626',
                  color: 'white',
                  border: 'none',
                  padding: '9px 16px',
                  borderRadius: '8px',
                  fontSize: '0.8rem',
                  fontWeight: '800',
                  cursor: 'pointer'
                }}
              >
                Pedir Combo por $18.90
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: ÓRDENES (Simulación y Seguimiento) */}
        {activeTab === 'ordenes' && (
          <div className="fade-in">
            <div style={{ marginBottom: '14px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0F172A' }}>
                📦 Seguimiento de Pedidos
              </h3>
              <p style={{ fontSize: '0.8rem', color: '#64748B' }}>
                Simulación en tiempo real de tu orden desde la parrilla hasta tu puerta.
              </p>
            </div>

            {/* Active Order Card with Live Stepper */}
            {activeOrder && (
              <div style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                border: '1px solid #E2E8F0',
                padding: '16px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontWeight: '800', color: '#DC2626' }}>
                      ORDEN ACTIVA
                    </span>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: '#0F172A' }}>
                      {activeOrder.id}
                    </h4>
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    background: '#FEF3C7',
                    color: '#92400E',
                    padding: '4px 10px',
                    borderRadius: '12px',
                    fontWeight: '800'
                  }}>
                    ⏱️ {activeOrder.timeRemaining}
                  </span>
                </div>

                {/* Progress Bar (Stepper) */}
                <div style={{ margin: '18px 0 14px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    {[
                      { step: 1, label: 'Recibido' },
                      { step: 2, label: 'Parrilla 🔥' },
                      { step: 3, label: 'En camino 🛵' },
                      { step: 4, label: 'Entregado' }
                    ].map(st => (
                      <div key={st.step} style={{ textAlign: 'center', flex: 1 }}>
                        <div style={{
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          margin: '0 auto 4px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.75rem',
                          fontWeight: '800',
                          background: activeOrder.step >= st.step ? '#DC2626' : '#E2E8F0',
                          color: activeOrder.step >= st.step ? 'white' : '#64748B'
                        }}>
                          {activeOrder.step > st.step ? '✓' : st.step}
                        </div>
                        <div style={{
                          fontSize: '0.65rem',
                          fontWeight: activeOrder.step === st.step ? '800' : '600',
                          color: activeOrder.step === st.step ? '#DC2626' : '#64748B'
                        }}>
                          {st.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Connecting Progress Line */}
                  <div style={{ height: '4px', background: '#E2E8F0', borderRadius: '2px', position: 'relative' }}>
                    <div style={{
                      height: '100%',
                      background: '#DC2626',
                      borderRadius: '2px',
                      width: `${((activeOrder.step - 1) / 3) * 100}%`,
                      transition: 'width 0.4s ease'
                    }} />
                  </div>
                </div>

                {/* Current Status Badge */}
                <div style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  borderRadius: '10px',
                  padding: '10px 12px',
                  fontSize: '0.8rem',
                  color: '#334155',
                  marginBottom: '12px'
                }}>
                  <div><strong>Estado:</strong> {activeOrder.stepName}</div>
                  <div><strong>Dirección:</strong> {activeOrder.address}</div>
                  <div><strong>Total:</strong> ${activeOrder.total.toFixed(2)}</div>
                </div>

                {/* Simulation Control Buttons */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={advanceOrderStep}
                    style={{
                      flex: 1,
                      background: '#0F172A',
                      color: 'white',
                      border: 'none',
                      padding: '9px',
                      borderRadius: '8px',
                      fontSize: '0.78rem',
                      fontWeight: '700',
                      cursor: 'pointer'
                    }}
                  >
                    ⏩ Simular Avance de Estado
                  </button>
                  <button
                    onClick={() => setActiveTab('menu')}
                    style={{
                      background: '#F1F5F9',
                      border: '1px solid #CBD5E1',
                      color: '#0F172A',
                      padding: '9px 12px',
                      borderRadius: '8px',
                      fontSize: '0.78rem',
                      fontWeight: '700',
                      cursor: 'pointer'
                    }}
                  >
                    + Pedir Más
                  </button>
                </div>
              </div>
            )}

            {/* Past Orders History */}
            <h4 style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0F172A', marginBottom: '10px' }}>
              Historial de Pedidos Recientes
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {orderHistory.map(hist => (
                <div
                  key={hist.id}
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E2E8F0',
                    borderRadius: '12px',
                    padding: '12px 14px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#0F172A' }}>
                      {hist.id} &bull; <span style={{ color: '#10B981' }}>{hist.status}</span>
                    </div>
                    <div style={{ fontSize: '0.74rem', color: '#64748B', marginTop: '2px' }}>
                      {hist.itemsSummary}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#94A3B8', marginTop: '2px' }}>
                      {hist.date}
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: '800', color: '#0F172A' }}>
                      ${hist.total.toFixed(2)}
                    </div>
                    <button
                      onClick={() => {
                        addToCart(INITIAL_MENU[0]);
                        setIsCartOpen(true);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#DC2626',
                        fontSize: '0.72rem',
                        fontWeight: '700',
                        cursor: 'pointer',
                        padding: '4px 0'
                      }}
                    >
                      Repetir ↺
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: PERFIL */}
        {activeTab === 'perfil' && (
          <div className="fade-in">
            {/* User Profile Card */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              padding: '18px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.04)',
              textAlign: 'center',
              marginBottom: '16px'
            }}>
              <div style={{
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                background: '#FEF3C7',
                border: '3px solid #F59E0B',
                margin: '0 auto 10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem'
              }}>
                👨‍💼
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0F172A' }}>
                Carlos Mendoza
              </h3>
              <div style={{ fontSize: '0.78rem', color: '#64748B', marginBottom: '8px' }}>
                carlos.mendoza@email.com
              </div>
              <span style={{
                display: 'inline-block',
                background: '#FEF3C7',
                color: '#B45309',
                fontSize: '0.75rem',
                fontWeight: '800',
                padding: '4px 12px',
                borderRadius: '9999px',
                border: '1px solid #FDE68A'
              }}>
                👑 Socio VIP &bull; RapidClub Gold
              </span>

              {/* RapidPoints Balance */}
              <div style={{
                marginTop: '16px',
                background: '#F8FAFC',
                borderRadius: '12px',
                padding: '12px',
                display: 'flex',
                justifyContent: 'space-around',
                border: '1px solid #E2E8F0'
              }}>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#DC2626' }}>
                    3,420
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#64748B' }}>Puntos Rapid</div>
                </div>
                <div style={{ width: '1px', background: '#E2E8F0' }} />
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#0F172A' }}>
                    19
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#64748B' }}>Pedidos Hechos</div>
                </div>
                <div style={{ width: '1px', background: '#E2E8F0' }} />
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: '800', color: '#10B981' }}>
                    $342.80
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#64748B' }}>Consumo Total</div>
                </div>
              </div>
            </div>

            {/* Quick Links Menu */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E2E8F0',
              overflow: 'hidden',
              marginBottom: '16px'
            }}>
              {[
                { icon: '📍', label: 'Mis Direcciones de Entrega', sub: 'Av. Libertador 1420, Piso 5B' },
                { icon: '💳', label: 'Métodos de Pago', sub: 'Tarjeta Rapid Gold •••• 4242' },
                { icon: '🔔', label: 'Notificaciones de Pedidos', sub: 'Push activadas' },
                { icon: '🍔', label: 'Hamburguesa Favorita', sub: 'Rey de las Burgers' }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '12px 16px',
                    borderBottom: idx < 3 ? '1px solid #F1F5F9' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#0F172A' }}>{item.label}</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748B' }}>{item.sub}</div>
                  </div>
                  <span style={{ color: '#CBD5E1', fontSize: '0.9rem' }}>&rarr;</span>
                </div>
              ))}
            </div>

            {/* Links to Other Scaffold Apps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a
                href="/"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  color: '#0F172A',
                  padding: '12px',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  textDecoration: 'none'
                }}
              >
                🌐 Ir a Landing E-commerce
              </a>
              <a
                href="/admin"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: '#1E293B',
                  color: 'white',
                  padding: '12px',
                  borderRadius: '12px',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  textDecoration: 'none'
                }}
              >
                ⚙️ Ir a Panel Administrativo
              </a>
            </div>
          </div>
        )}
      </main>

      {/* Floating Bottom Cart Trigger (If cart has items and modal is closed) */}
      {cartCount > 0 && !isCartOpen && (
        <div style={{
          position: 'absolute',
          bottom: '72px',
          left: '14px',
          right: '14px',
          zIndex: 30
        }}>
          <button
            onClick={() => setIsCartOpen(true)}
            style={{
              width: '100%',
              background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
              color: 'white',
              border: 'none',
              padding: '12px 18px',
              borderRadius: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              boxShadow: '0 8px 20px rgba(220, 38, 38, 0.4)',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                background: 'rgba(255,255,255,0.25)',
                padding: '2px 8px',
                borderRadius: '8px',
                fontSize: '0.78rem',
                fontWeight: '800'
              }}>
                {cartCount}
              </span>
              <span style={{ fontSize: '0.88rem', fontWeight: '800' }}>Ver Carrito</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '1rem', fontWeight: '800' }}>${cartTotal.toFixed(2)}</span>
              <span>&rarr;</span>
            </div>
          </button>
        </div>
      )}

      {/* Bottom Navigation Tabs */}
      <nav style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '64px',
        background: '#FFFFFF',
        borderTop: '1px solid #E2E8F0',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 20
      }}>
        {[
          { id: 'menu', label: 'Menú', icon: '🍔' },
          { id: 'ofertas', label: 'Ofertas', icon: '🏷️' },
          { id: 'ordenes', label: 'Órdenes', icon: '📦' },
          { id: 'perfil', label: 'Perfil', icon: '👤' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2px',
              cursor: 'pointer',
              color: activeTab === tab.id ? '#DC2626' : '#94A3B8',
              transition: 'all 0.2s'
            }}
          >
            <span style={{ fontSize: '1.25rem' }}>{tab.icon}</span>
            <span style={{
              fontSize: '0.68rem',
              fontWeight: activeTab === tab.id ? '800' : '600'
            }}>
              {tab.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Cart Modal / Drawer */}
      {isCartOpen && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.6)',
          zIndex: 50,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          backdropFilter: 'blur(3px)'
        }}>
          <div style={{
            background: '#FFFFFF',
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px',
            maxHeight: '85%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 -10px 30px rgba(0,0,0,0.15)'
          }}>
            {/* Cart Header */}
            <div style={{
              padding: '16px 20px',
              borderBottom: '1px solid #E2E8F0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#0F172A' }}>
                  🛒 Tu Carrito de Hamburguesas
                </h3>
                <span style={{ fontSize: '0.72rem', color: '#64748B' }}>
                  {cartCount} {cartCount === 1 ? 'producto' : 'productos'} seleccionados
                </span>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                style={{
                  background: '#F1F5F9',
                  border: 'none',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                &times;
              </button>
            </div>

            {/* Cart Items List */}
            <div style={{ padding: '16px 20px', overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '30px 10px', color: '#94A3B8' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🍔</div>
                  <p style={{ fontWeight: '700', fontSize: '0.9rem' }}>Tu carrito está vacío</p>
                  <p style={{ fontSize: '0.75rem' }}>Explora el menú y agrega tu burger favorita.</p>
                </div>
              ) : (
                cart.map(item => (
                  <div
                    key={item.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: '#F8FAFC',
                      padding: '10px 12px',
                      borderRadius: '12px',
                      border: '1px solid #E2E8F0'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: '45px', height: '45px', borderRadius: '8px', objectFit: 'cover' }}
                      />
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: '800', color: '#0F172A' }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#DC2626', fontWeight: '700' }}>
                          ${item.price.toFixed(2)}
                        </div>
                      </div>
                    </div>

                    {/* Quantity controls */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '6px',
                          border: '1px solid #CBD5E1',
                          background: '#FFFFFF',
                          fontSize: '0.9rem',
                          fontWeight: '800',
                          cursor: 'pointer'
                        }}
                      >
                        -
                      </button>
                      <span style={{ fontSize: '0.85rem', fontWeight: '800' }}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        style={{
                          width: '26px',
                          height: '26px',
                          borderRadius: '6px',
                          border: '1px solid #CBD5E1',
                          background: '#FFFFFF',
                          fontSize: '0.9rem',
                          fontWeight: '800',
                          cursor: 'pointer'
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              )}

              {/* Coupon input */}
              {cart.length > 0 && (
                <div style={{ marginTop: '8px' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#475569', marginBottom: '6px' }}>
                    Cupón de Descuento
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input
                      type="text"
                      placeholder="Ej: RAPID20 o REYREAL"
                      value={couponCodeInput}
                      onChange={(e) => setCouponCodeInput(e.target.value)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        borderRadius: '8px',
                        border: '1px solid #CBD5E1',
                        fontSize: '0.82rem',
                        textTransform: 'uppercase'
                      }}
                    />
                    <button
                      onClick={() => applyCouponCode(couponCodeInput)}
                      style={{
                        background: '#0F172A',
                        color: 'white',
                        border: 'none',
                        padding: '8px 14px',
                        borderRadius: '8px',
                        fontSize: '0.78rem',
                        fontWeight: '700',
                        cursor: 'pointer'
                      }}
                    >
                      Aplicar
                    </button>
                  </div>
                  {appliedCoupon && (
                    <div style={{ fontSize: '0.72rem', color: '#059669', fontWeight: '700', marginTop: '4px' }}>
                      ✓ Descuento de {appliedCoupon.title} aplicado correctamente.
                    </div>
                  )}
                </div>
              )}

              {/* Delivery method selector */}
              {cart.length > 0 && (
                <div style={{ marginTop: '4px' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: '700', color: '#475569', marginBottom: '6px' }}>
                    Método de Entrega
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {['Delivery Express', 'Retiro en Tienda'].map(type => (
                      <button
                        key={type}
                        onClick={() => setDeliveryType(type)}
                        style={{
                          flex: 1,
                          padding: '8px',
                          borderRadius: '8px',
                          fontSize: '0.75rem',
                          fontWeight: '700',
                          border: '1px solid',
                          borderColor: deliveryType === type ? '#DC2626' : '#CBD5E1',
                          background: deliveryType === type ? '#FEE2E2' : '#FFFFFF',
                          color: deliveryType === type ? '#DC2626' : '#475569',
                          cursor: 'pointer'
                        }}
                      >
                        {type === 'Delivery Express' ? '🛵 Delivery' : '🏪 Retiro'}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Cart Summary & Checkout Simulation */}
            {cart.length > 0 && (
              <div style={{
                padding: '16px 20px',
                borderTop: '1px solid #E2E8F0',
                background: '#F8FAFC'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#64748B', marginBottom: '4px' }}>
                  <span>Subtotal</span>
                  <span>${cartSubtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#059669', fontWeight: '700', marginBottom: '4px' }}>
                    <span>Descuento aplicado</span>
                    <span>-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#64748B', marginBottom: '10px' }}>
                  <span>Envío</span>
                  <span>{deliveryFee === 0 ? 'GRATIS' : `$${deliveryFee.toFixed(2)}`}</span>
                </div>

                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '1.2rem',
                  fontWeight: '800',
                  color: '#0F172A',
                  marginBottom: '14px',
                  borderTop: '1px dashed #CBD5E1',
                  paddingTop: '8px'
                }}>
                  <span>Total</span>
                  <span style={{ color: '#DC2626' }}>${cartTotal.toFixed(2)}</span>
                </div>

                <button
                  onClick={handleSimulatePurchase}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)',
                    color: 'white',
                    border: 'none',
                    padding: '14px',
                    borderRadius: '12px',
                    fontSize: '0.95rem',
                    fontWeight: '800',
                    cursor: 'pointer',
                    boxShadow: '0 8px 18px rgba(220, 38, 38, 0.35)'
                  }}
                >
                  🚀 Simular Compra y Confirmar Pedido
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Success Modal after Simulation */}
      {showOrderSuccessModal && justPlacedOrder && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(15, 23, 42, 0.75)',
          zIndex: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: '20px',
            padding: '28px 22px',
            textAlign: 'center',
            maxWidth: '360px',
            width: '100%',
            boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
            animation: 'fadeIn 0.3s ease-out'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: '#DCFCE7',
              color: '#15803D',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              margin: '0 auto 14px'
            }}>
              ✓
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#0F172A', marginBottom: '6px' }}>
              ¡Compra Simulada con Éxito!
            </h3>
            <p style={{ fontSize: '0.8rem', color: '#64748B', lineHeight: '1.5', marginBottom: '16px' }}>
              Tu pedido <strong>{justPlacedOrder.id}</strong> ha sido transmitido a la cocina y ya está <strong>En la Parrilla 🔥</strong>.
            </p>

            <div style={{
              background: '#F8FAFC',
              border: '1px solid #E2E8F0',
              borderRadius: '10px',
              padding: '10px',
              fontSize: '0.82rem',
              textAlign: 'left',
              marginBottom: '18px'
            }}>
              <div><strong>Monto Total:</strong> ${justPlacedOrder.total.toFixed(2)}</div>
              <div><strong>Entrega:</strong> {justPlacedOrder.deliveryType}</div>
              <div><strong>Puntos Ganados:</strong> +{Math.floor(justPlacedOrder.total * 10)} RapidPoints</div>
            </div>

            <button
              onClick={() => {
                setShowOrderSuccessModal(false);
                setActiveTab('ordenes');
              }}
              style={{
                width: '100%',
                background: '#DC2626',
                color: 'white',
                border: 'none',
                padding: '12px',
                borderRadius: '10px',
                fontSize: '0.88rem',
                fontWeight: '800',
                cursor: 'pointer'
              }}
            >
              📦 Ver Mi Pedido en Vivo
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
