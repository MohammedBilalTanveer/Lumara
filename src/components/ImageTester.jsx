import React, { useState } from 'react';

export function ImageTester() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageStatus, setImageStatus] = useState('Loading...');

  const imageUrls = [
    {
      name: "Google Drive (uc format)",
      url: "https://drive.google.com/uc?export=view&id=1pEtFz9swlB571j9DhGOzw01g5qRSgZUc"
    },
    {
      name: "Google Drive (thumbnail format)",
      url: "https://drive.google.com/thumbnail?id=1pEtFz9swlB571j9DhGOzw01g5qRSgZUc&sz=w1080"
    },
    {
      name: "Unsplash Professional (Fallback)",
      url: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc1NzUyOTI4N3ww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const handleImageLoad = () => {
    setImageStatus('✅ Loaded successfully');
  };

  const handleImageError = () => {
    setImageStatus('❌ Failed to load');
  };

  const tryNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageUrls.length);
    setImageStatus('Loading...');
  };

  const currentImage = imageUrls[currentImageIndex];

  return (
    <div className="max-w-md mx-auto p-6 bg-card rounded-lg shadow-lg">
      <h3 className="mb-4">Image Loading Test</h3>
      
      <div className="mb-4">
        <p><strong>Testing:</strong> {currentImage.name}</p>
        <p><strong>Status:</strong> {imageStatus}</p>
      </div>
      
      <div className="mb-4">
        <img
          src={currentImage.url}
          alt="Test image"
          className="w-full h-48 object-cover rounded-lg border"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      </div>
      
      <div className="space-y-2">
        <button
          onClick={tryNextImage}
          className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Try Next Image Format
        </button>
        
        <div className="text-sm text-muted-foreground">
          <p><strong>Current URL:</strong></p>
          <p className="break-all font-mono text-xs bg-muted p-2 rounded">
            {currentImage.url}
          </p>
        </div>
      </div>
    </div>
  );
}