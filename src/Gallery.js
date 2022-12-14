const Gallery = ({ gallery }) => {
  return (
    <div className="gallery-area">
      {gallery.map(img => (
        <div className="gallery-item" key={img.id}>
          <img src={img.url} alt={img.alt} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
