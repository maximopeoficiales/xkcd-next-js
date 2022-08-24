import { useRouter } from "next/router";
import { createContext, useContext } from "react";
import en from "@/translations/en.json";
import es from "@/translations/es.json";
import { useCallback } from "react";
interface IContext {
  t: (key: string, ...args: any[]) => string
}

const defaultState: IContext = {
  t: () => ""
};

const I18nContext = createContext<IContext>(defaultState);

const languages: Record<string, Record<string, string>> = { es, en }

interface MyProps {
  children: React.ReactNode;
}
export const I18NProvider = ({ children }: MyProps) => {
  const { locale = "es" } = useRouter()

  // cuando cambia el locale se actualizara la definition de esta funcion
  const t = useCallback((key: string, ...args: string[]) => {
    let translation = languages[locale][key];
    if (args.length === 0) return translation;
    args.forEach((value, index) => {
      translation = translation.replace(`\${${index + 1}}`, value);
    });
    return translation;
  }, [locale]);

  return (
    <I18nContext.Provider
      value={{ t }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export const useI18N = () => {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18N must be used within I18nProvider");
  }

  return context;
}