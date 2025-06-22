'use client'

import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useCallback } from 'react'
import { Button } from "./ui/button";

export function RedirectButton() {
    const router = useRouter()

    const handleClick = useCallback(async () => {
        const supabase = createClient()
        const { data, error } = await supabase.auth.getUser()

        if (error || !data?.user) {
            router.push('/auth/login')
        } else {
            router.push('/tareas')
        }
    }, [router])

    return (
        <Button onClick={handleClick} className="flex items-center gap-2" size="sm">
            Ir a mis tareas
        </Button>
    )
}
