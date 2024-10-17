import { assertEquals } from "@std/assert";
import { helloWorldGuys } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(helloWorldGuys("Otávio"), "Have a nice week, Mr(s) Otávio");
});
