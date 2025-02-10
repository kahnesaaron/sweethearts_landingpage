import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
import imagemin from 'vite-plugin-imagemin'
import preload from 'vite-plugin-preload'
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  root: 'src',
  build: {
    minify: 'esbuild',
    cssMinify: 'lightningcss',
    outDir: '../build',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          lottie: ['@dotlottie/player-component'],
          fonts: [
            '@fontsource/quicksand',
            '@fontsource/josefin-sans',
            '@fontsource/nunito'
          ]
        }
      }
    }
  },
  plugins: [
    // Brotli compression
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br'
    }),
    // Gzip fallback
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz'
    }),
    // Image optimization
    imagemin({
      gifsicle: { optimizationLevel: 3 },
      mozjpeg: { quality: 75 },
      pngquant: { quality: [0.8, 0.9] },
      webp: { quality: 75 }
    }),
    // Preload critical assets
    preload(),
    // Bundle analyzer
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: 'bundle-analysis.html'
    })
  ],
  chunkSizeWarningLimit: 1000
})
