import { BookmarkProvider } from "./context/BookmarkContext";
import Home from "./pages/Home";
import EditBookmark from "./pages/EditBookmark";
import HistoryPage from "./pages/HistoryPage";
import { usePageContext } from "./context/PageContext";
import ExtensionPage from "./pages/ExtensionPage";
import { FormProvider } from "./context/from-Context";
import Downloads from "./pages/Downloads";
import Notes from "./pages/Notes";
import { MenuProvider } from "./context/MenuContext";
import { ThemeDropDownContextProvider } from "./context/ThemeDropDownContext";
import { HeaderProvider } from "./context/HeaderContext";

const App = () => {
  const { page, dialogOpen } = usePageContext();
  return (
    <BookmarkProvider>
      <HeaderProvider>
        <ThemeDropDownContextProvider>
          <MenuProvider>
            <FormProvider>
              {page === "bookmarks" && <Home />}
              {page === "edit" && <EditBookmark />}
              {page === "history" && <HistoryPage />}
              {page === "extensions" && <ExtensionPage />}
              {page === "downloads" && <Downloads />}
              {page === "notes" && <Notes />}
              {dialogOpen && (
                <div
                  className='fixed inset-0 bg-black/50  '
                  style={{ zIndex: 50 }}
                ></div>
              )}
            </FormProvider>
          </MenuProvider>
        </ThemeDropDownContextProvider>
      </HeaderProvider>
    </BookmarkProvider>
  );
};

export default App;
