import { supabase } from "@/utils/supabase"
import { notFound } from "next/navigation"

export default async function ItemPage({ params }: { params: { id: string } }) {
  const { id } = params
  const { data } = await supabase.from("jokes").select().match({ id }).single()

  if (data == null) {
    return notFound()
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
