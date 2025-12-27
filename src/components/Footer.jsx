const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
              Tickets
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Fan pit standing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Platinum Seating
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  General standing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
              Events
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  All Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Music Shows
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Comedy Shows
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
              Help
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wide uppercase mb-4">
              Social
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + Bottom Section */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-xs text-gray-500">
            &copy; 2025 BookMyConcert. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
