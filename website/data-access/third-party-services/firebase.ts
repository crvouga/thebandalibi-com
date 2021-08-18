import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6Z0gAueBlLi1rKjuCFQRM2IziKPJK8VM",
  authDomain: "thebandalibi-com.firebaseapp.com",
  projectId: "thebandalibi-com",
  storageBucket: "thebandalibi-com.appspot.com",
  messagingSenderId: "228976937004",
  appId: "1:228976937004:web:861b6378e38e4f8f6f2989",
  measurementId: "G-VBV90BZPE9",
};

//why? https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices

declare const global: NodeJS.Global & { firebaseApp?: FirebaseApp };

const firebaseApp = global.firebaseApp ?? initializeApp(firebaseConfig);

if (process.env.NODE_ENV === "development") {
  global.firebaseApp = firebaseApp;
}

export const firebaseAuth = getAuth(firebaseApp);
