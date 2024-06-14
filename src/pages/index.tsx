// import { Inter } from "next/font/google";
import useSWR from "swr";
import { UserData } from "@/pages/api/users";
import UserCard from "@/components/user_card";
import { useState } from "react";
import UserModal from "@/components/user_modal";

// const inter = Inter({ subsets: ["latin"] });
const fetcher = (url: string) => fetch(url).then((res) => res.json())
const pageSize = 10

export default function Home() {
    const { data, error } = useSWR('/api/users', fetcher)
    const [selectedUser, setSelectedUser] = useState<UserData | null>(null)
    const [showModal, setShowModal] = useState(false)
    const [page, setPage] = useState(1)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const selectUser = (user: UserData) => {
        setSelectedUser(user)
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
        setSelectedUser(null)
    }

    const paginationClasses = "bg-gray-600 rounded text-white px-4 py-1 m-2"

    const changePage = (direction: string) => {
        const maxPages = Math.ceil(data.length / pageSize)

        switch (direction) {
            case 'first':
                setPage(1)
                break
            case 'prev':
                if (page > 1) setPage(page - 1)
                break
            case 'next':
                if (page < maxPages) setPage(page + 1)
                break
            case 'last':
                setPage(maxPages)
                break
        }
    }

    const pageBound = () => pageSize * page > data.length ? data.length : pageSize * page
    const firstItem = () => (page - 1) * pageSize + 1

    return (
        <main className="flex flex-wrap flex-none justify-center pt-24">
            <h1 className="font-bold text-4xl mb-8">Users</h1>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 w-full px-8">
                {
                    data.slice(firstItem() - 1, firstItem() + pageSize - 1).map((user: UserData) => {
                        return (
                            <UserCard user={user} selectUser={selectUser} key={user.id} />
                        )
                    })
                }
            </section>
            {showModal && <UserModal user={selectedUser} closeModal={closeModal} />}
            <nav className="w-full flex flex-wrap justify-center items-center my-8 font-semibold">
                <a href="#" onClick={() => changePage('first')} className={paginationClasses + ' order-1'}>First</a>
                <a href="#" onClick={() => changePage('prev')} className={paginationClasses + ' order-2'}>Prev</a>
                <span className="order-first md:order-3 w-full text-center md:w-auto">
                    {firstItem().toLocaleString()} - {pageBound().toLocaleString()} of {data.length.toLocaleString()}
                </span>
                <a href="#" onClick={() => changePage('next')} className={paginationClasses + ' order-4'}>Next</a>
                <a href="#" onClick={() => changePage('last')} className={paginationClasses + ' order-5'}>Last</a>
            </nav>
        </main>
    )
}