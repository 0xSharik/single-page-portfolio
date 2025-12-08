import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Terms', path: '/terms' },
    { name: 'Privacy', path: '/privacy' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub />, url: '#' },
    { name: 'Twitter', icon: <FaTwitter />, url: '#' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: '#' },
  ];

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-tertiary/50 backdrop-blur-sm border-t border-accent1/10"
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-secondary mb-4">DevProjects</h2>
            <p className="text-accent1 text-sm">
              A modern marketplace for academic projects. Connect with developers,
              showcase your work, and find your next project collaboration.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent1 hover:text-secondary transition-colors duration-300 text-xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-accent2 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-accent1 hover:text-secondary transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-accent2 uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <address className="not-italic text-sm text-accent1">
              <p className="mb-2">123 Project Street</p>
              <p className="mb-2">Tech City, TC 12345</p>
              <p className="mb-2">Email: contact@devprojects.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-accent1/10 text-center">
          <p className="text-xs text-accent1">
            &copy; {currentYear} DevProjects. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
