import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyAiifjB3mXdQRpcUfmIIEazOu6r5goeC80",
      authDomain: "kaloz-19b9e.firebaseapp.com",
      projectId: "kaloz-19b9e",
      storageBucket: "kaloz-19b9e.firebasestorage.app",
      messagingSenderId: "970848731606",
      appId: "1:970848731606:web:91561933faa77d4b462477",
      measurementId: "G-035DR9HK98"
    })),
    provideFirestore(()=> getFirestore())
  ]
};


