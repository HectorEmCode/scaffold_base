# 🍔 Hamburger Rapid &bull; Plataforma Comercial Fast Gourmet

Primera versión comercial completa de **Hamburger Rapid**, desarrollada con arquitectura Full-Stack moderna, alto rendimiento y soporte multi-capa para despliegues rápidos en contenedores o infraestructura en la nube.

---

## 🏗️ Arquitectura de la Solución

El monorepo contiene 3 aplicaciones front-end especializadas con **estilo de paleta clara premium** y un servidor backend centralizado en Node.js + Express:

| Aplicación | Tecnología | Ruta de Acceso | Descripción |
| :--- | :--- | :--- | :--- |
| **Landing E-commerce** | **Astro 4** | `http://localhost:3000/` | Landing comercial de alto impacto con catálogo de 10 variantes destacadas, filtros, badges de especialidad y modal de recetas. |
| **PWA Mobile** | **React 18 + Vite** | `http://localhost:3000/app` | Aplicación móvil PWA con 4 pestañas (`Menú`, `Ofertas`, `Órdenes`, `Perfil`), carrito y simulación de compra en vivo. |
| **Dashboard Admin** | **React 18 + Vite** | `http://localhost:3000/admin` | Panel de control gerencial con catálogo de burgers, métricas de consumidores según consumo (VIP, Frecuente, Ocasional) y estado de la base de datos. |
| **Backend & API** | **Node.js + Express** | `http://localhost:3000/api` | API RESTful con persistencia dual: MySQL 8.0 y motor In-Memory resiliente. |

---

## 🍔 Catálogo de las 10 Variantes Destacadas

1. **👑 Rey de las Burgers** &bull; *Especialidad Suprema* &bull; `$16.90` (Triple medallón Angus 300g, cheddar curado, tocineta maple, salsa King).
2. **⭐ Burger Real Clásica** &bull; *Clásica de Oro* &bull; `$10.50` (Medallón 180g a la plancha de hierro, queso americano fundido, pepinillos dulces).
3. **🔥 Burger Real Doble** &bull; *Doble Parrilla* &bull; `$13.90` (Doble impacto 360g a la brasa, 4 láminas de cheddar, BBQ ahumada).
4. **💎 Burger Doble Especial** &bull; *Edición Especial* &bull; `$14.90` (Doble smash caramelizado, huevo campero frito a la plancha, tocineta en miel).
5. **✨ Burger Trufada Imperial** &bull; *Alta Cocina Gourmet* &bull; `$17.50` (Res Angus madurada 21 días, queso brie, emulsión de trufa negra).
6. **🥓 Burger Crispy BBQ Bacon** &bull; *Ahumado Intenso* &bull; `$12.80` (Glaseada en BBQ al bourbon, montaña de tocineta y cebolla crispy).
7. **🌶️ Burger Royal Cheddar & Jalapeño** &bull; *Toque Spicy Supremo* &bull; `$12.50` (Cascada de 4 quesos cheddar, jalapeños asados y chipotle).
8. **⚡ Burger Smash Supreme** &bull; *Súper Crujiente Smash* &bull; `$11.90` (Costra Maillard al hierro ardiente, queso gouda, relish de mostaza).
9. **🍗 Burger Crispy Chicken Deluxe** &bull; *Pollo Extra Crocante* &bull; `$11.75` (Pechuga marinada 24h en buttermilk, doble rebozado crujiente).
10. **🌱 Burger Portobello & Queso Suizo** &bull; *Gourmet Veggie* &bull; `$13.20` (Portobello gigante a la brasa, queso Emmental suizo, cebolla al vino).

---

## 👥 Métricas de Consumidores Según Volumen de Consumo

El panel administrativo segmenta automáticamente a los clientes según su volumen de gasto histórico:

- **👑 VIP / Consumo Alto (> $150)**: Clientes con mayor LTV, pedidos recurrentes y membresía *RapidClub Gold*.
- **⭐ Frecuentes / Consumo Medio ($50 - $150)**: Clientes habituales semanales en fase de fidelización.
- **🌱 Ocasionales / Nuevos (< $50)**: Primeros pedidos y clientes en proceso de conversión.

---

## 🚀 Comandos de Construcción y Ejecución

```bash
# Compilar todas las aplicaciones y sincronizar con server/public
npm run build:all

# Iniciar servidor backend
npm start
```

### URLs de Acceso Local
- **Landing Comercial:** [http://localhost:3000/](http://localhost:3000/)
- **PWA Mobile App:** [http://localhost:3000/app](http://localhost:3000/app)
- **Panel Administrativo:** [http://localhost:3000/admin](http://localhost:3000/admin)
- **Health Check API:** [http://localhost:3000/api/health](http://localhost:3000/api/health)
