import CustomLayout from '@/components/Layout';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
}