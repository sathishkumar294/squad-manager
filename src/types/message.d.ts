interface AppMessage {
  message: string;
  type?: "info" | "success" | "error" | "warning" | "loading";
}
