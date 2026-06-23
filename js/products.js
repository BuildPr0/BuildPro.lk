// BuildPro.lk - Products Data
// Product database for BuildPro.lk website

const products = [
  // ===== CPUs =====
  {
    id: 1,
    name: "Intel Core i5-13600K",
    category: "CPU",
    price: 53500,
    image: "images/products/cpu-01.jpg",
    description: "13th Gen Intel Core i5 processor with 14 cores and 20 threads. Excellent for gaming and productivity tasks.",
    specs: [
      { label: "Cores", value: "14 (6P + 8E)" },
      { label: "Threads", value: "20" },
      { label: "Base Clock", value: "3.5 GHz" },
      { label: "Boost Clock", value: "5.1 GHz" },
      { label: "Socket", value: "LGA 1700" },
      { label: "TDP", value: "125W" }
    ]
  },
  {
    id: 2,
    name: "AMD Ryzen 7 7800X3D",
    category: "CPU",
    price: 72500,
    image: "images/products/cpu-02.jpg",
    description: "AMD's flagship gaming processor with 3D V-Cache technology. Delivers exceptional gaming performance.",
    specs: [
      { label: "Cores", value: "8" },
      { label: "Threads", value: "16" },
      { label: "Base Clock", value: "4.2 GHz" },
      { label: "Boost Clock", value: "5.0 GHz" },
      { label: "Socket", value: "AM5" },
      { label: "TDP", value: "120W" }
    ]
  },

  // ===== GPUs =====
  {
    id: 3,
    name: "NVIDIA GeForce RTX 4060",
    category: "GPU",
    price: 98500,
    image: "images/products/gpu-01.jpg",
    description: "NVIDIA RTX 4060 graphics card with Ada Lovelace architecture. Perfect for 1080p and 1440p gaming.",
    specs: [
      { label: "VRAM", value: "8GB GDDR6" },
      { label: "CUDA Cores", value: "3072" },
      { label: "Boost Clock", value: "2.46 GHz" },
      { label: "Memory Bus", value: "128-bit" },
      { label: "TDP", value: "115W" }
    ]
  },
  {
    id: 4,
    name: "AMD Radeon RX 7800 XT",
    category: "GPU",
    price: 142000,
    image: "images/products/gpu-02.jpg",
    description: "AMD Radeon RX 7800 XT graphics card for high-performance 1440p gaming and content creation.",
    specs: [
      { label: "VRAM", value: "16GB GDDR6" },
      { label: "Stream Processors", value: "3840" },
      { label: "Boost Clock", value: "2.43 GHz" },
      { label: "Memory Bus", value: "256-bit" },
      { label: "TDP", value: "263W" }
    ]
  },

  // ===== RAM =====
  {
    id: 5,
    name: "Corsair Vengeance 32GB DDR5",
    category: "RAM",
    price: 28500,
    image: "images/products/ram-01.jpg",
    description: "High-performance DDR5 RAM kit for gaming and intensive multitasking. 32GB (2x16GB) kit.",
    specs: [
      { label: "Capacity", value: "32GB (2x16GB)" },
      { label: "Type", value: "DDR5" },
      { label: "Speed", value: "5600MHz" },
      { label: "Latency", value: "CL36" },
      { label: "Voltage", value: "1.25V" }
    ]
  },
  {
    id: 6,
    name: "G.Skill Trident Z5 64GB DDR5",
    category: "RAM",
    price: 52000,
    image: "images/products/ram-02.jpg",
    description: "Premium DDR5 RAM kit for enthusiasts and professionals. 64GB (2x32GB) high-speed kit.",
    specs: [
      { label: "Capacity", value: "64GB (2x32GB)" },
      { label: "Type", value: "DDR5" },
      { label: "Speed", value: "6000MHz" },
      { label: "Latency", value: "CL30" },
      { label: "RGB", value: "Yes" }
    ]
  },

  // ===== SSDs =====
  {
    id: 7,
    name: "Samsung 990 Pro 1TB NVMe",
    category: "SSD",
    price: 32500,
    image: "images/products/ssd-01.jpg",
    description: "Samsung's flagship NVMe SSD with blazing fast read/write speeds. PCIe 4.0 interface.",
    specs: [
      { label: "Capacity", value: "1TB" },
      { label: "Interface", value: "NVMe PCIe 4.0" },
      { label: "Read Speed", value: "7,450 MB/s" },
      { label: "Write Speed", value: "6,900 MB/s" },
      { label: "Form Factor", value: "M.2 2280" }
    ]
  },
  {
    id: 8,
    name: "WD Black SN850X 2TB",
    category: "SSD",
    price: 58000,
    image: "images/products/ssd-02.jpg",
    description: "High-capacity NVMe SSD for gamers and creators. Exceptional performance for demanding workloads.",
    specs: [
      { label: "Capacity", value: "2TB" },
      { label: "Interface", value: "NVMe PCIe 4.0" },
      { label: "Read Speed", value: "7,300 MB/s" },
      { label: "Write Speed", value: "6,600 MB/s" },
      { label: "Form Factor", value: "M.2 2280" }
    ]
  },

  // ===== Motherboards =====
  {
    id: 9,
    name: "ASUS ROG Strix Z790-E",
    category: "Motherboard",
    price: 85000,
    image: "images/products/motherboard-01.jpg",
    description: "Premium Z790 motherboard for Intel 13th/14th Gen CPUs. Features DDR5 support and PCIe 5.0.",
    specs: [
      { label: "Socket", value: "LGA 1700" },
      { label: "Chipset", value: "Z790" },
      { label: "Form Factor", value: "ATX" },
      { label: "RAM Slots", value: "4x DDR5" },
      { label: "PCIe Slots", value: "2x PCIe 5.0 x16" },
      { label: "WiFi", value: "WiFi 6E" }
    ]
  },
  {
    id: 10,
    name: "MSI MAG B650 Tomahawk",
    category: "Motherboard",
    price: 55000,
    image: "images/products/motherboard-02.jpg",
    description: "Feature-rich B650 motherboard for AMD Ryzen 7000 series. Great value for gaming builds.",
    specs: [
      { label: "Socket", value: "AM5" },
      { label: "Chipset", value: "B650" },
      { label: "Form Factor", value: "ATX" },
      { label: "RAM Slots", value: "4x DDR5" },
      { label: "PCIe Slots", value: "1x PCIe 4.0 x16" },
      { label: "WiFi", value: "WiFi 6E" }
    ]
  },

  // ===== Power Supplies =====
  {
    id: 11,
    name: "Corsair RM850x 850W",
    category: "Power Supply",
    price: 35000,
    image: "images/products/psu-01.jpg",
    description: "Fully modular 80+ Gold power supply with quiet operation. Perfect for mid to high-end builds.",
    specs: [
      { label: "Wattage", value: "850W" },
      { label: "Rating", value: "80+ Gold" },
      { label: "Modular", value: "Fully Modular" },
      { label: "Fan Size", value: "135mm" },
      { label: "Warranty", value: "10 Years" }
    ]
  },
  {
    id: 12,
    name: "Seasonic Focus GX-1000",
    category: "Power Supply",
    price: 48000,
    image: "images/products/psu-02.jpg",
    description: "High-wattage 80+ Gold power supply for high-end gaming and workstation builds.",
    specs: [
      { label: "Wattage", value: "1000W" },
      { label: "Rating", value: "80+ Gold" },
      { label: "Modular", value: "Fully Modular" },
      { label: "Fan Size", value: "140mm" },
      { label: "Warranty", value: "12 Years" }
    ]
  },

  // ===== Casings =====
  {
    id: 13,
    name: "Corsair 4000D Airflow",
    category: "Casing",
    price: 28500,
    image: "images/products/casing-01.jpg",
    description: "Mid-tower case with excellent airflow design. Steel construction with tempered glass panel.",
    specs: [
      { label: "Form Factor", value: "Mid Tower" },
      { label: "Motherboard Support", value: "ATX, mATX, Mini-ITX" },
      { label: "Fan Support", value: "Up to 10 fans" },
      { label: "GPU Clearance", value: "360mm" },
      { label: "Panel", value: "Tempered Glass" }
    ]
  },
  {
    id: 14,
    name: "Lian Li O11 Dynamic EVO",
    category: "Casing",
    price: 62000,
    image: "images/products/casing-02.jpg",
    description: "Premium dual-chamber case with outstanding thermal performance and modular design.",
    specs: [
      { label: "Form Factor", value: "Mid Tower" },
      { label: "Motherboard Support", value: "ATX, mATX, Mini-ITX" },
      { label: "Fan Support", value: "Up to 13 fans" },
      { label: "GPU Clearance", value: "422mm" },
      { label: "Panel", value: "Tempered Glass" }
    ]
  },

  // ===== Monitors =====
  {
    id: 15,
    name: "Samsung Odyssey G7 27\"",
    category: "Monitor",
    price: 85000,
    image: "images/products/monitor-01.jpg",
    description: "27-inch curved gaming monitor with 240Hz refresh rate and 1ms response time.",
    specs: [
      { label: "Size", value: "27 inches" },
      { label: "Resolution", value: "2560x1440 (QHD)" },
      { label: "Refresh Rate", value: "240Hz" },
      { label: "Response Time", value: "1ms" },
      { label: "Panel Type", value: "VA Curved" }
    ]
  },
  {
    id: 16,
    name: "LG UltraGear 32\" 4K",
    category: "Monitor",
    price: 125000,
    image: "images/products/monitor-02.jpg",
    description: "32-inch 4K gaming monitor with Nano IPS technology and 144Hz refresh rate.",
    specs: [
      { label: "Size", value: "32 inches" },
      { label: "Resolution", value: "3840x2160 (4K UHD)" },
      { label: "Refresh Rate", value: "144Hz" },
      { label: "Response Time", value: "1ms" },
      { label: "Panel Type", value: "Nano IPS" }
    ]
  },

  // ===== Accessories =====
  {
    id: 17,
    name: "Logitech G Pro X Superlight",
    category: "Accessories",
    price: 28500,
    image: "images/products/accessory-01.jpg",
    description: "Ultra-lightweight wireless gaming mouse at just 63g. Hero 25K sensor for precision gaming.",
    specs: [
      { label: "Weight", value: "63g" },
      { label: "Sensor", value: "HERO 25K" },
      { label: "Connection", value: "Wireless (Lightspeed)" },
      { label: "Battery Life", value: "70 Hours" },
      { label: "Buttons", value: "5 Programmable" }
    ]
  },
  {
    id: 18,
    name: "SteelSeries Apex Pro TKL",
    category: "Accessories",
    price: 45000,
    image: "images/products/accessory-02.jpg",
    description: "Mechanical gaming keyboard with adjustable actuation switches. OmniPoint 2.0 technology.",
    specs: [
      { label: "Switch Type", value: "OmniPoint 2.0 Adjustable" },
      { label: "Form Factor", value: "Tenkeyless (TKL)" },
      { label: "Backlight", value: "RGB Per-Key" },
      { label: "Connection", value: "USB-C" },
      { label: "Keycaps", value: "PBT Double-shot" }
    ]
  }
];

// Helper function to format price in LKR
function formatPrice(price) {
  return 'Rs. ' + price.toLocaleString('en-LK');
}

// Helper function to get product by ID
function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}

// Helper function to get products by category
function getProductsByCategory(category) {
  if (category === 'All') return products;
  return products.filter(p => p.category === category);
}

// Get all unique categories
function getCategories() {
  const cats = products.map(p => p.category);
  return ['All', ...new Set(cats)];
}