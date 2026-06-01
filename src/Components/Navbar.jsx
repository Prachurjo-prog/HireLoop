"use client";

import logo from "@/assets/logo.png";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Left Aligned */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src={logo} alt="sdfd" />
            </Link>
          </div>

          {/* Desktop Navigation - Right Aligned */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8 text-sm font-medium text-white">
              <li>
                <Link
                  href="/jobs"
                  className="hover:text-purple-500 transition-colors"
                >
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/companies"
                  className="hover:text-purple-500 transition-colors"
                >
                  Companies
                </Link>
              </li>
              <li>
                <Link
                  href="/for-recruiters"
                  className="hover:text-purple-500 transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>

            {/* Vertical Divider */}
            <div className="h-6 w-px bg-gray-300" />

            {/* Auth Section */}
            <div className="flex items-center gap-4">
              <Link
                href="/signin"
                className="text-sm font-medium text-purple-500 hover:text-purple-600 transition-colors"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="px-5 py-2 text-sm font-medium bg-white text-black rounded-xl transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6h12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t  py-4 bg-black">
            <ul className="flex flex-col gap-4 text-base font-medium text-white px-2">
              <li>
                <Link
                  href="/jobs"
                  className="block py-2 px-4 hover:bg-gray-50 rounded-xl"
                >
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/companies"
                  className="block py-2 px-4 hover:bg-gray-50 rounded-xl"
                >
                  Companies
                </Link>
              </li>
              <li>
                <Link
                  href="/for-recruiters"
                  className="block py-2 px-4 hover:text-purple-500 transition-colors"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  href="/signin"
                  className="block py-2 px-4 hover:bg-gray-50 rounded-xl"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="block mx-4 mt-2 text-center py-3 text-black bg-white font-medium rounded-2xl hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
