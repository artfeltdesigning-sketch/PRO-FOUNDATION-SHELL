import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-primary"
});

export const metadata = {
  title: "CTPRO.ai",
  description:
    "AI Creative Production OS",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={
          jakarta.variable
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
