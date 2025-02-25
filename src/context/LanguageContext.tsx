"use client";

import { createContext, useContext, useState } from "react";

// 1️⃣ Definir el contexto
const LanguageContext = createContext<{ language: string; setLanguage: (lang: string) => void } | undefined>(undefined);

// 2️⃣ Crear el proveedor del contexto
export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState("en");

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

// 3️⃣ Hook para usar el contexto
export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
