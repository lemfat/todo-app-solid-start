import { APIEvent, json } from "solid-start/api";
import { supabase } from "~/lib/db";

export async function GET() {
  const todos = (await supabase.from("todos").select()).data
  return json(todos)
}

export async function POST({ request }: APIEvent) {
  const { title } = await new Response(request.body).json()

  const todo = (await supabase.from("todos").insert({ "title": title }).select("*")).data![0]
  return json(todo)
}