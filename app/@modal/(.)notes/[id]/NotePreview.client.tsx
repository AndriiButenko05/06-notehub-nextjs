'use client'

import css from './NotePreview.module.css'
import { Note } from '@/types/note'
import Modal from '@/components/Modal/Modal'
import { useRouter } from 'next/navigation'

interface NotePreviewProps {
    note: Note
}

export default function NotePreview({ note }: NotePreviewProps) {
    const router = useRouter()

    const close = () => router.back()
    return (
        <Modal onClose={close}>
            <div className={css.item}>
                <button onClick={close} className={css.backBtn}>
                    Close
                </button>
                <h2 className={`${css.header} ${css.h2}`}>{note.title}</h2>
                <p className={css.content}>{note.content}</p>
                <p className={css.date}>Created:{note.createdAt}</p>
                <p className={css.date}>Updated: {note.updatedAt}</p>
                <p className={css.tag}>{note.tag}</p>
            </div>
        </Modal>
    )
}
