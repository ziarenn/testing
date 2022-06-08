import { it, expect, vi } from "vitest";
import { x } from "./script2.js";

import fs from "fs";
import path from "path";
import { Window } from "happy-dom";

const window = new Window();
const document = window.document;
const htmlDocumentPath = path.join(process.cwd(), "index.html");

const htmlContent = fs.readFileSync(htmlDocumentPath).toString();
document.write(htmlContent);
vi.stubGlobal("document", document);

it("should render an option element", () => {
  // zasymuluj input
  const input = [{ currency: "bat (Tajlandia)", code: "THB", mid: 0.1246 }];
  x(input);
  const optionElement = document.querySelector("option");
  expect(optionElement).not.toBeNull();
});
