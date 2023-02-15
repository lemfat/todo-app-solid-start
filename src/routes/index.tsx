import { createRouteData, Title } from "solid-start";
import TodoList from "~/components/TodoList";
import { supabase } from "~/lib/db";

export function routeData() {
  const todos = createRouteData(
    async () => {
      const { data, error } = (await supabase
        .from("todos")
        .select()
        .order("created_at")
      )
      return data
    },
    { "key": "todos" }
  )
  return { todos }
}

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <Title>Todo app</Title>
      <TodoList />
    </main>
  );
}
