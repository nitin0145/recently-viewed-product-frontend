import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import apiService from '../services/apiService';

const CarouselComponent = ({ userId }) => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecentlyViewed = async () => {
      try {
        const data = await apiService.getRecentlyViewed(userId);
        setRecentlyViewed(data);
      } catch (error) {
        console.error('Error loading recently viewed products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentlyViewed();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Recently Viewed Products</h2>
      {recentlyViewed.length > 0 ? (
        <Carousel showThumbs={false} showIndicators={true}>
          {recentlyViewed.map((product) => (
            <div key={product.id}>
              <img src={product.image} alt={product.name} />
              <p className="legend">{product.name}</p>
            </div>
          ))}
        </Carousel>
      ) : (
        <p>No recently viewed products found.</p>
      )}
    </div>
  );
};

export default CarouselComponent;
