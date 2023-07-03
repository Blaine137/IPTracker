/** @type {import('next').NextConfig} */
require("dotenv").config

const nextConfig = {
  reactStrictMode: true,
  env:{
    API_KEY: process.env.NEXT_PUBLIC_API_KEY
  }
}

module.exports = nextConfig
