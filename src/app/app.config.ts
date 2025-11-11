import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { providePrimeNG } from "primeng/config";
import Nora from '@primeuix/themes/nora';
import {definePreset} from '@primeuix/themes';

const MyPreset = definePreset(Nora, {
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}'
    },
    colorScheme: {
      light: {
        semantic: {
          highlight: {
            background: '{primary.50}',
            color: '{primary.700}',
          }
        }
      },
      dark: {
        semantic: {
          highlight: {
            background: '{primary.200}',
            color: '{primary.900}',
          }
        }
      }
    }
  },
  components: {
    menubar :{
      root: {
        gap: '0'
      },
      submenu:{
        padding: '0'
      }
    }
  }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          prefix: 'p',
          darkModeSelector: 'false',
          cssLayer: false
        }
      }
    })
  ]
};
