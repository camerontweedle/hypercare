import { UserData } from "@/pages/api/users";
import Image from "next/image";

export default function UserCard({ user, selectUser }: { user: UserData, selectUser: any }) {
    return (
        <div className="w-full grow rounded rounded-xl overflow-hidden shadow-lg text-center" data-testid={user.id}>
            <div className="header bg-primary flex items-center justify-center p-8">
                <Image
                    className="rounded-full ring-2 ring-white bg-white ring-offset-2 ring-offset-primary"
                    src={user.avatar}
                    alt="User Avatar"
                    width={100}
                    height={100}
                />
            </div>
            <div className="borderTransitionLeft bg-white"></div>
            <div className="borderTransitionRight bg-white"></div>
            <div className="body bg-white">
                <div className="px-6 py-2 h-20">
                    <div className="font-bold text-xl mb-2">{user.firstname} {user.lastname}</div>
                </div>
                <div className="px-6 pt-4 pb-4">
                    <button
                        className="bg-primary text-white rounded rounded-lg px-8 py-2"
                        onClick={() => selectUser(user)}
                    >View More</button>
                </div>
            </div>
        </div>
    )
}