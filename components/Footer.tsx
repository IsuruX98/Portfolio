'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-white/[0.03] backdrop-blur-md">
      <div className="section-wrapper py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--muted-foreground)]">
            © {year} Isuru Madusanka. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="https://github.com/IsuruX98"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/isuru-madusanka-1b9210218/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="mt-4 text-center sm:text-left">
          <Link
            href="#hero"
            className="text-xs text-[var(--muted-foreground)] hover:text-[var(--accent)] transition-colors"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
