import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function SearchResults({searchResults}) {
    return (
        <div className="my-24 w-3/5 mx-auto">
            {
                searchResults?.results?.map(s => (
                    <Card key={s.id} className={"mb-1"}>
                        <CardHeader>
                            <CardTitle>
                                <div dangerouslySetInnerHTML={{ __html: s.title }}></div>
                            </CardTitle>
                            <CardDescription>
                                <p dangerouslySetInnerHTML={{__html: s.body}}></p>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <a href={s.url} target={"_blank"} >{s.url}</a>
                        </CardContent>
                    </Card>
                ))
            }
        </div>
    )
}