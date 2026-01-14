import { Toaster } from '@/components/ui/sonner'
import '@/theme/index.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className="print:p-[1.5cm]">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
