import Link from "next/link";
import {Button} from "./ui/button";
import {createClient} from "@/lib/supabase/server";
import {LogoutButton} from "./logout-button";

export async function AuthButton() {
    const supabase = await createClient();

    const {
        data: {user},
    } = await supabase.auth.getUser();


    const {data: profile} = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user?.id)
        .single();

        return user ? (
            <div className="flex items-center gap-4">
                Bienvenido, {profile.username}!
                <LogoutButton/>
            </div>
        ) : (
            <div className="flex gap-2">
                <Button asChild size="sm" variant={"outline"}>
                    <Link href="/auth/login">Iniciar Sesión</Link>
                </Button>
                <Button asChild size="sm" variant={"default"}>
                    <Link href="/auth/sign-up">Registrarse</Link>
                </Button>
            </div>
        );
}
