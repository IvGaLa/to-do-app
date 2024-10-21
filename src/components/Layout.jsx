import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Layout;
