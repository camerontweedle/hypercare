import { UserData } from "@/pages/api/users"
import Image from "next/image"

export default function UserModal({ user, closeModal }: { user: UserData | null, closeModal: any }) {
    return (
        <div className={"relative z-20"} aria-labelledby="modal-title" role="dialog" aria-modal="true" data-testid="user_modal">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <button className="float-right font-semibold text-2xl" type="button" onClick={() => closeModal()}>X</button>
                            <div className="sm:flex sm:items-start my-4">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <Image
                                        className="rounded-full ring-2 ring-white bg-white ring-offset-2 ring-offset-primary"
                                        src={user?.avatar || ''}
                                        alt="User Avatar"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 className="text-xl font-bold leading-6 text-gray-900" id="modal-title">{user?.firstname} {user?.lastname}</h3>
                                    <div className="mt-2 font-normal text-md">
                                        <ul className="my-4">
                                            <li><span className="font-semibold">Role:</span> {user?.role}</li>
                                            <li><span className="font-semibold">Joined: </span> {user?.join_date}</li>
                                        </ul>
                                        <p>{user?.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
