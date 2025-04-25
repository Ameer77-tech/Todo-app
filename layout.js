

import "./globals.css";




export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className='relative h-full w-full'>
      
        {children}
      </body>
    </html>
  );
}
