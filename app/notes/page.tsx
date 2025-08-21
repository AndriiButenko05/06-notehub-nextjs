import NotesClient from './Notes.client'
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from '@tanstack/react-query'
import { fetchNotes } from '@/lib/api'

async function Notes() {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['notes', 1, ''],
        queryFn: () => fetchNotes(1, undefined),
    })
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NotesClient />
        </HydrationBoundary>
    )
}
export default Notes
