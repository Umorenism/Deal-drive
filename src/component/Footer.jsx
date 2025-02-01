const Footer = () => {
    return (
      <footer className="bg-[#E7F2F0] text-slate-500 py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-4 gap-10">
          
          {/* Company Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Careers</a></li>
              <li><a href="#" className="hover:text-gray-400">Press</a></li>
            </ul>
          </div>
  
          {/* Support Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            </ul>
          </div>
  
          {/* Socials Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Socials</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-400">LinkedIn</a></li>
            </ul>
          </div>
  
          {/* Socials Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Socials</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-400">Twitter</a></li>
              <li><a href="#" className="hover:text-gray-400">LinkedIn</a></li>
            </ul>
          </div>
  
        </div>
  
        {/* Footer Bottom */}
        <div className="text-center text-gray-500 text-sm mt-6">
          &copy; {new Date().getFullYear()} YourCompany. All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  