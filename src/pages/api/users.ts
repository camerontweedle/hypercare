import type { NextApiRequest, NextApiResponse } from "next";
// import * as data from "@/data/api_data.json" // dev api data

type ApiData = {
    data: {
        users: UserData[]
    }
}

export type UserData = {
    id: string
    username: string
    firstname: string
    lastname: string
    email: string
    avatar: string
    role: string
    join_date: string
    description: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserData[]>,
) {
    const apiResponse = await fetch('https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/users')
    const data = await apiResponse.json() as ApiData
    
    res.status(200).json(data.data.users);
}