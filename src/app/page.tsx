import { supabase } from "@/utils/supabase"

export default async function Home() {
  const { data } = await supabase.from("jokes").select().limit(10)

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
