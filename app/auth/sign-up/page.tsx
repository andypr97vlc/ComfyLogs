import {SignUpForm} from "@/components/sign-up-form";
import {HomeButton} from "@/components/home-button";
import {hasEnvVars} from "@/lib/utils";
import {EnvVarWarning} from "@/components/env-var-warning";
import {AuthButton} from "@/components/auth-button";
import {ThemeSwitcher} from "@/components/theme-switcher";

export default function Page() {
    return (
        <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
                <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                    <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                        <div className="flex gap-5 items-center font-semibold">
                            <div className="flex items-center gap-2">
                                <HomeButton />
                            </div>
                        </div>
                        {!hasEnvVars ? <EnvVarWarning /> : <AuthButton />}
                    </div>
                    <div className="flex items-center">
                        <ThemeSwitcher />
                    </div>
                </nav>

                <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
                    <div className="w-full max-w-sm">
                        <SignUpForm/>
                    </div>
                </div>

                <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-8">
                    <p>
                        Aplicación creada por{" "}
                        <a
                            href="https://x.com/ComfyPenguiin"
                            target="_blank"
                            className="font-bold hover:underline"
                            rel="noreferrer"
                        >
                            ComfyPenguin
                        </a>
                    </p>
                </footer>
            </div>
        </main>
    );
}
