import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "./theme-provider"

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <ThemeProvider
             attribute="class"
             defaultTheme="system"
             enableSystem
             disableTransitionOnChange >
                {children}
            </ThemeProvider>
            <Toaster />
        </>
    )
}
export default Providers