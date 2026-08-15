export const products = [
  {
    id: 'aurora-watch',
    name: 'Aurora Smart Watch',
    category: 'Wearables',
    price: 249,
    rating: 4.9,
    stock: 18,
    image:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Aurora Smart Watch product image',
    shortDescription: 'Advanced health tracking in a premium lightweight frame.',
    description:
      'The Aurora Smart Watch brings together performance tracking, wellness insights, and sleek design for people who want to stay connected without sacrificing comfort.',
    features: [
      'AMOLED display with always-on visibility',
      'Heart rate, sleep, and recovery monitoring',
      'Up to 7 days of battery life',
      'Water-resistant for daily use',
    ],
    details: [
      'Premium stainless-steel finish with interchangeable straps',
      'Bluetooth calling and app notifications',
      'Fitness coaching and guided breathing sessions',
    ],
  },
  {
    id: 'luma-laptop',
    name: 'Luma Pro Laptop',
    category: 'Computing',
    price: 1499,
    rating: 4.8,
    stock: 12,
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Luma Pro Laptop product image',
    shortDescription: 'Powerful performance for focused work and creative projects.',
    description:
      'Built for productivity, the Luma Pro Laptop combines portability, speed, and all-day battery power so your team can work seamlessly whether they are in the office or on the move.',
    features: [
      '13th Gen Intel Core processor',
      '14-inch 2.8K display with low-glare finish',
      'Up to 18 hours battery life',
      'Lightweight aluminum chassis',
    ],
    details: [
      'Fast SSD storage and responsive multitasking',
      'Secure biometric login and enterprise-grade encryption',
      'Designed for hybrid teams and creative workflows',
    ],
  },
  {
    id: 'nexa-speaker',
    name: 'Nexa Audio Speaker',
    category: 'Audio',
    price: 399,
    rating: 4.7,
    stock: 24,
    image:
      'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Nexa Audio Speaker product image',
    shortDescription: 'Balanced sound and room-filling audio for homes and studios.',
    description:
      'The Nexa Audio Speaker delivers rich sound with immersive stereo output, helping spaces feel more alive with premium listening quality and modern control.',
    features: [
      '360° room-filling acoustics',
      'Multi-room sync and app control',
      'Voice assistant compatibility',
      'High-fidelity sound profile',
    ],
    details: [
      'Wireless streaming with lossless quality',
      'Elegant fabric finish and compact profile',
      'Optimized for focused work, relaxation, and gatherings',
    ],
  },
  {
    id: 'pixel-camera',
    name: 'Pixel Pro Camera',
    category: 'Photography',
    price: 899,
    rating: 4.9,
    stock: 9,
    image:
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Pixel Pro Camera product image',
    shortDescription: 'Captures detail-rich images with cinematic clarity.',
    description:
      'The Pixel Pro Camera brings professional-grade imaging to everyday creators, combining sharp optics, intelligent image processing, and intuitive controls for better shots every time.',
    features: [
      '48MP primary sensor with hybrid zoom',
      'Advanced low-light photography',
      '4K cinematic video recording',
      'Built-in stabilization and AI enhancements',
    ],
    details: [
      'Compact body with tactile controls',
      'Fast autofocus and dual-speaker recording',
      'Ideal for travel, content creation, and product photography',
    ],
  },
]

export const getProductById = (productId) =>
  products.find((product) => product.id === productId)
