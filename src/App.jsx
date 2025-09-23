function App() {
  return (
    <div className="font-sans bg-black text-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800 sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <h2 className="text-yellow-400 font-bold text-xl hover:scale-110 transition-transform">💰 MinerCoins</h2>
        <nav className="space-x-6">
          <a href="#features" className="hover:text-yellow-400 transition">Features</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-6 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          🚀 Welcome to <span className="text-yellow-400 drop-shadow-lg">MinerCoins</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 animate-pulse">
          The next-generation mining platform — fast, secure, and built for everyone.  
          Start mining smarter today!
        </p>
        <a
          href="#features"
          className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 hover:scale-105 transform transition"
        >
          Get Started
        </a>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <h2 className="text-3xl font-bold text-center mb-12">🔥 Features</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "⚡ Fast Mining", desc: "Experience lightning-fast mining with optimized performance." },
            { title: "🔒 Secure", desc: "Your assets and data are protected with industry-leading security." },
            { title: "🌍 Global Access", desc: "Mine from anywhere in the world with our decentralized network." },
          ].map((f, i) => (
            <div
              key={i}
              className="p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-yellow-400/30 transform hover:-translate-y-2 transition-all"
            >
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 animate-fade-in">
        <h2 className="text-3xl font-bold text-center mb-8">📖 About MinerCoins</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-center leading-relaxed">
          MinerCoins is a revolutionary platform designed to make cryptocurrency mining 
          easy, efficient, and accessible for everyone. Whether you're a beginner or a pro, 
          we’ve got the tools to maximize your mining potential.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-3xl font-bold text-center mb-8">📩 Contact Us</h2>
        <form className="max-w-lg mx-auto space-y-4 animate-fade-in-up">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-400 transition"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-yellow-400 transition"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-300 hover:scale-105 transform transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        © {new Date().getFullYear()} MinerCoins. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
