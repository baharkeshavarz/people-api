import { User } from "@/types";
import axios from "axios";

export async function getUsers() {
    try {
       const { data } = await axios.get("/api/users");
       console.log("try", data)
       return {
                users: data.data.items as User[],
              }
    } catch (error) {
        console.log("catch", error)
        return {
            users: [],
            error: true,
         }
    }}