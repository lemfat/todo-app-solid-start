import { Todo } from "~/types/todo"

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      todos: {
        Row: Todo,
        Insert: Partial<Todo>
        Update: Partial<Todo>
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}