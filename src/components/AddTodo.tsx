import { Component, For } from 'solid-js';
import { createRouteMultiAction } from 'solid-start';

const AddTodo: Component = () => {
  const [addingTodo, { Form }] = createRouteMultiAction(async (form: FormData) => {
    return await (await fetch('/api/todo', {
      "method": "POST",
      "body": JSON.stringify({ title: form.get("title") as string })
    })).json()
  }, { "invalidate": [] });

  return (
    <>
      <Form>
        <input type="text" name="title" required />
        <button type="submit">ADD</button>
      </Form>

      <ul class='flex flex-col-reverse'>
        <For each={addingTodo}>
          {todo => <li>{todo.result?.title ?? "pending..."}</li>}
        </For>
      </ul>
    </>
  );
}

export default AddTodo;