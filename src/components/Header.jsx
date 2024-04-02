'use client'

import Link from 'next/link';
import {useState} from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

export default function Header({submitSearch}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    // const [searchTerm, setSearchTerm] = useState("")

    // const submitSearchTerm = async () => {
    //     try {
    //         const normalizedSearchTerm = searchTerm.split(" ").join("+").toLowerCase()
    //         const requestUrl = `http://localhost:8000/api/swirl/search?q=${normalizedSearchTerm}`    
    //
    //         const response = await fetch(requestUrl, {
    //             cache: "no-store",
    //             headers: {
    //                 Authorization: "Basic YWRtaW46bmV3c2FmZXBhc3N3b3Jk",
    //                 Accept: "*/*",
    //                 "Cache-Control": "no-cache",
    //                 "Access-Control-Allow-Origin": "*",
    //             }
    //         })
    //         const results = await response.json()
    //
    //         console.log(results)
    //         passResults(results)
    //     } catch (e) {
    //         console.error("Error", e)
    //     }
    // }

    const handleSearch = (term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }



    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="container mx-auto px-4 py-5 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold">
                    Search Platform
                </Link>
                <div className="flex items-center gap-2">
                    <Input onChange={(e) => handleSearch(e.target.value)} placeholder="Enter search term"/>
                    <Button onClick={submitSearch}>Search</Button>
                </div>
                <nav className="hidden space-x-4 sm:flex">
                    <Link href="/about">

                    </Link>
                </nav>
            </div>
        </header>
    );
}