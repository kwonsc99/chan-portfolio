// src/components/common/Footer.tsx
"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:your-email@example.com", label: "Email" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 브랜딩 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Portfolio</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              데이터 기반 의사결정과 혁신적인 솔루션으로 <br />
              비즈니스 가치를 창출합니다.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>DNA:</span>
              <span className="text-primary">Data analysis</span>
              <span>•</span>
              <span className="text-accent">Networking</span>
              <span>•</span>
              <span className="text-secondary-foreground">Actionable</span>
            </div>
          </div>

          {/* 빠른 링크 */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {["Home", "About", "Projects", "Contact"].map((link) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  whileHover={{ x: 5 }}
                  className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* 소셜 링크 */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-muted-foreground" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* 하단 구분선 및 저작권 */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Portfolio. All rights reserved.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-1 text-muted-foreground text-sm"
            >
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>using Next.js & Tailwind CSS</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
