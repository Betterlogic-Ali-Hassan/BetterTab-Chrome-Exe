import { createContext, useContext, useState } from "react";

type PageContextProps = {
  page: string;
  setPage: (page: string) => void;
};

const PageContext = createContext<PageContextProps | undefined>(undefined);

export const PageContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [page, setPage] = useState<string>("home");
  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageContextProvider");
  }
  return context;
};
