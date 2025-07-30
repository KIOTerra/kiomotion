const ScrollingGifs = () => {
  // Placeholder gif URLs - you can replace these with your actual motion design gifs
  const gifs = [
    "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1469041797191-50ace28483c3?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=300&h=200&fit=crop",
  ];

  // Duplicate the array to create seamless loop
  const duplicatedGifs = [...gifs, ...gifs];

  return (
    <section className="py-8 bg-gradient-to-r from-primary/5 to-primary/10 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll space-x-6">
          {duplicatedGifs.map((gif, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 h-48 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={gif}
                alt={`Motion design work ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollingGifs;