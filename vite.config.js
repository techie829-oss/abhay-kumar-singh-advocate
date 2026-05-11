import { defineConfig } from 'vite';

export default defineConfig({
  base: '/abhay-kumar-singh-advocate/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        practice: 'practice-areas.html',
        contact: 'contact.html',
      },
    },
  },
});
