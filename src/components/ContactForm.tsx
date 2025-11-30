export default function ContactForm() {
  return (
    <section id="contact" className="container mx-auto px-4 sm:px-6 py-12">
      <h3 className="text-3xl font-serif">Contact <span className="text-neon">Me!</span></h3>
      <div className="mt-2 w-16 h-0.5 bg-neon"></div>
      
      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-mute mb-6">
            Ready to work together? Drop me a message and let's create something amazing!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-neon/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-neon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <span className="text-ink">satdinu08@gmail.com</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-neon/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-neon" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span className="text-ink">+91 76049 40354</span>
            </div>
          </div>
        </div>
        
        <form className="space-y-4">
          <input 
            className="w-full card p-3 bg-charcoal2 focus:ring-2 focus:ring-neon outline-none transition" 
            placeholder="Your Name"
          />
          <input 
            className="w-full card p-3 bg-charcoal2 focus:ring-2 focus:ring-neon outline-none transition" 
            placeholder="Email"
          />
          <input 
            className="w-full card p-3 bg-charcoal2 focus:ring-2 focus:ring-neon outline-none transition" 
            placeholder="Subject"
          />
          <textarea 
            rows={5} 
            className="w-full card p-3 bg-charcoal2 focus:ring-2 focus:ring-neon outline-none transition resize-none" 
            placeholder="Message"
          />
          <button type="submit" className="btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}