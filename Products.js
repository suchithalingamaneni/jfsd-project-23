import React from 'react';
import ProductCard from '../components/ProductCard';
import productImage1 from '../assets/p1.png'; // Import product image 1
import productImage2 from '../assets/p2.png'; // Import product image 2
import bagImage1 from '../assets/p7.png'; // Replace with your actual image paths
import bagImage2 from '../assets/p9.png'; // Replace with your actual image paths
import rajkot from '../assets/rajkot.png';
import banaras from '../assets/banaras.png';
import tussor1 from '../assets/tussor1.png';
import madhubhani from '../assets/madhubhani.png';
import crepe from '../assets/crepe.png';
import kanchipuram from '../assets/kanchipuram.png';
import jaipurcotton from '../assets/jaipurcotton.png';

const Products = () => {
  // Sample data for products
  const products = [
    {
      id: 1,
      name: 'Pure Kanchi Silk Saree',
      price: 13995,
      description: 'A beautiful handloom silk saree.',
      imageUrl: productImage1, // Use imported image
    },
    {
      id: 2,
      name: 'Pure Kanchi Silk Saree',
      price: 12995,
      description: 'A beautiful handloom silk saree.',
      imageUrl: productImage2, // Use imported image
    },
    {
      id: 3,
      name: 'Kalamkari Cotton',
      price: 850,
      description: 'Timeless Kalamkari cotton printed saree',
      imageUrl: bagImage1, // Use imported image
    },
    {
      id: 4,
      name: 'Kalamkari Cotton',
      price: 850,
      description: 'Timeless Kalamkari cotton printed saree',
      imageUrl: bagImage2, // Use imported image
    },
    {
      id: 5,
      name: 'Rajkot',
      price: 850,
      description: 'Timeless Kalamkari cotton printed saree',
      imageUrl: rajkot, // Use imported image
    },
    {
      id: 6,
      name: 'Banaras',
      price: 850,
      description: 'Timeless Kalamkari cotton printed saree',
      imageUrl: banaras, // Use imported image
    },
    {
      id: 7,
      name: 'Tussar Silk',
      price: 850,
      description: 'Timeless Kalamkari cotton printed saree',
      imageUrl: tussor1, // Use imported image
    },
    {
      id: 8,
      name: 'Madhubani Silk',
      price: 850,
      description: 'Timeless Kalamkari cotton printed saree',
      imageUrl: madhubhani, // Use imported image
    },
    {
      id: 9,
      name: 'Crepe',
      price: 850,
      description: 'Timeless Kalamkari cotton printed saree',
      imageUrl: crepe, // Use imported image
    },
    {
      id: 10,
      name: 'Kanchipuram',
      price: 850,
      description: 'Timeless Kalamkari cotton printed saree',
      imageUrl: kanchipuram, // Use imported image
    },
    {
      id: 11,
      name: 'Jaipur Cotton',
      price: 850,
      description: 'Timeless Kalamkari cotton printed saree',
      imageUrl: jaipurcotton, // Use imported image
    },



    
    // Add more products as needed
  ];

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
