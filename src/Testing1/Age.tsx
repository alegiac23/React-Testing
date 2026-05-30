// Crea un componente Age che riceve una prop age.

import { type WelcomeProps } from "./Welcome";

export function Age({ age }: WelcomeProps) {
  return <p>Your age is {age}</p>;
}
