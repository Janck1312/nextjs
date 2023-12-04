import "@/app/ui/global.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          Acme
        </header>
        {children}
        <footer>
          Desarrollado por Jancker Sepulveda &copy; 2023
        </footer>
        </body>
    </html>
  );
}
