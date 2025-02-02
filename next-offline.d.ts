declare module 'next-offline' {
    import { NextConfig } from 'next';
    export default function withOffline(config?: NextConfig): NextConfig;
  }