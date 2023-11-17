import { AuthRequiredError } from "@/lib/exceptions";


export default function Dashboard() {
  const session = null;
  if (!session) throw new AuthRequiredError();
  
  return (
     <main className="flex min-h-screen flex-col items-center justify-between p-24">
     </main>
  )
}
