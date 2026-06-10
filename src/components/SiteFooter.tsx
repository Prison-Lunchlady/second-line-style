import { Instagram } from "lucide-react";
import slMonogramWhite from "@/assets/SL_logo_white.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={slMonogramWhite} alt="Second Line Clothing" style={{ height: "48px", width: "auto" }} />
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/second_line_clothing?igsh=MXE3YXFxc3F1MHFnaQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
          <a href="https://www.facebook.com/profile.php?id=61590223002408" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 hover:text-primary transition-colors">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="https://www.tiktok.com/@second.line.cloth?_r=1&_t=ZP-96p7n3aqZR9" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="p-2 hover:text-primary transition-colors">
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true"><path d="M19.6 6.3a5.4 5.4 0 0 1-3.3-1.1 5.4 5.4 0 0 1-2-3.2H11v13.2a2.8 2.8 0 1 1-2-2.7V9.3a5.9 5.9 0 1 0 5 5.9V9.7a8.3 8.3 0 0 0 5 1.6V8.1a5.5 5.5 0 0 1-1.4-1.8z"/></svg>
          </a>
        </div>
        <p className="text-xs text-muted-foreground tracking-wide">© {new Date().getFullYear()} Second Line Clothing. All rights reserved.</p>
      </div>
    </footer>
  );
}