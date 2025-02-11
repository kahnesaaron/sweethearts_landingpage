import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  build: {
    minify: 'esbuild',
    cssMinify: 'lightningcss',
    outDir: '../build',
    emptyOutDir: true,
    output: {
        manualChunks: {
          lottie: ['@dotlottie/player-component']
        }
      },
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
  chunkSizeWarningLimit: 1000
})
