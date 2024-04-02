'use client'
import SearchResults from "@/components/SearchResults"
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import Header from "@/components/Header"
import {useEffect, useState} from "react";


export default function Home({searchParams}) {
    const [results, setResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        // (async function () {
        //     const response = await fetch("http://localhost:8000/swirl/results?search_id=34", {
        //         headers: {
        //             Authorization: "Basic YWRtaW46bmV3c2FmZXBhc3N3b3Jk"
        //         }
        //     })
        //     const results = await response.json()
        //     setResults(results)
        // })()
    }, [results]);


    useEffect(() => {
        const query = searchParams?.query || '';
        setSearchTerm(query)

    }, [searchParams.query])


    const passResults = (searchResult) => {
        setResults(searchResult)
    }


    const submitSearchTerm = async () => {
        try {
            const normalizedSearchTerm = searchTerm.split(" ").join("+").toLowerCase()
            const requestUrl = `http://localhost:8000/api/swirl/search?q=${normalizedSearchTerm}`

            const response = await fetch(requestUrl, {
                cache: "no-store",
                headers: {
                    Authorization: "Basic YWRtaW46bmV3c2FmZXBhc3N3b3Jk",
                    Accept: "*/*",
                    "Cache-Control": "no-cache",
                    "Access-Control-Allow-Origin": "*",
                }
            })
            const results = await response.json()

            setResults(results)
        } catch (e) {
            console.error("Error", e)
        }
    }


    return (
        <>
            <Header submitSearch={submitSearchTerm}/>
            <main className="">
                <SearchResults searchResults={results} className=""/>

                {/*<Pagination>*/}
                {/*    <PaginationContent>*/}
                {/*        <PaginationItem>*/}
                {/*            <PaginationPrevious href="#"/>*/}
                {/*        </PaginationItem>*/}
                {/*        <PaginationItem>*/}
                {/*            <PaginationLink href="#">1</PaginationLink>*/}
                {/*        </PaginationItem>*/}
                {/*        <PaginationItem>*/}
                {/*            <PaginationEllipsis/>*/}
                {/*        </PaginationItem>*/}
                {/*        <PaginationItem>*/}
                {/*            <PaginationNext href="#"/>*/}
                {/*        </PaginationItem>*/}
                {/*    </PaginationContent>*/}
                {/*</Pagination>*/}
            </main>
        </>
    );
}
