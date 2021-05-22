import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <div className="justify-between">
        <nav className="bg-white inline-flex items-center">
          {/* Logo */}
          <div className="flex-1 container">
            <a href="#">
              <img
                className="w-10 h-10"
                src="http://static1.squarespace.com/static/5b33ad559772aedf7cd44bf7/t/5b3fed222b6a28fc88a422f2/1530916131998/ms-icon-310x310.png?format=2w">
              </img>
            </a>
          </div>
          <div>
            <div className="flex-1">
              <a href="https://www.google.com">Lean Exo</a>
            </div>
          </div>
        </nav>
        {/* Sign In */}
        <div>
          <a
            className="border-4 "
            href="#">Sign in with Google</a>
        </div>
      </div>
      {/* Hero */}
      <div></div>
    </div>
  )
}
