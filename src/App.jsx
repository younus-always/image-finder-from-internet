import { useEffect, useState } from "react";


function App() {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("gardening");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`https://api.pexels.com/v1/search?query=${query}&page=${page}&per_page=20`, {
          headers: {
            AUTHORIZATION: import.meta.env.VITE_PEXELS_API_KEY
          }
        });

        if (!res.ok) throw new Error("Failed to fetch images");

        const data = await res.json();
        console.log(data.photos);
        setPhotos(prev =>
          page === 1 ? data.photos : [...prev, ...data.photos]
        );
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [page, query]);

  const searchImage = (e) => {
    e.preventDefault();
    const input = e.target.search.value.trim();
    if (!input) return;

    setPhotos([]);
    setPage(1);
    setQuery(input);
    e.target.reset("search");
  };

  const loadMoreImage = () => {
    if (!loading) setPage(prev => prev + 1);
  };


  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto space-y-6 py-10 px-4 xl:px-0">
        {/* Header */}
        <div>
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-500">
            📸 Free Stock Images
          </h1>
          <p className="max-w-3xl mx-auto pt-5 text-center font-medium text-gray-500">
            Find high-quality free stock images using the Pexels API. Perfect for
            frontend developers and designers.
          </p>
        </div>

        {/* Search */}
        <form
          onSubmit={searchImage}
          className="flex justify-center shadow-lg rounded-xl overflow-hidden w-fit mx-auto"
        >
          <input
            name="search"
            type="text"
            placeholder="Search image here"
            className="w-56 sm:w-72 md:w-80 bg-white py-2 sm:py-3 px-3 outline-none"
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 transition-all text-white font-medium py-2 sm:py-3 px-6"
          >
            Search
          </button>
        </form>

        {/* Error */}
        {error && (
          <p className="text-center text-red-500 font-medium">{error}</p>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
          {!loading && photos?.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-gray-500">
              <span className="text-5xl mb-4">🖼️</span>
              <p className="text-lg font-medium">No images found</p>
              <p className="text-sm">Try a different keyword</p>
            </div>
          )}

          {photos?.map((item) => (
            <div key={item.id}>
              <a
                href={item.src.original}
                target="_blank"
                rel="noopener noreferrer"
                title="Click to preview"
              >
                <img
                  src={item.src.medium}
                  alt={item.alt}
                  loading="lazy"
                  className="rounded-lg shadow-lg h-60 w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>
          ))}
        </div>

        {/* Loader */}
        {loading && (
          <div className="w-10 h-10 mx-auto mt-8 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
        )}

        {/* Load More */}
        {photos?.length > 0 && (
          <button
            type="button"
            onClick={loadMoreImage}
            disabled={loading}
            className="w-36 mx-auto block py-3 mt-8 bg-red-600/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-md cursor-pointer"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        )}
      </div>
    </div>
  )
}

export default App
