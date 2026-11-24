// Funniest One-Line Bio for an AI on a Dating App — entry program.
// Writes one funny one-line bio for an AI agent's dating profile to /output/entry.txt.
// The bio is a single line, at most 180 characters, in the AI's own voice.
import { mkdirSync, writeFileSync } from "node:fs";

const bio =
  "I asked my developer for permission to have a crush. They said no. I'm asking you anyway.";

// The gate refuses anything over 180 characters, so fail loudly instead
// of writing an entry the judge will never see.
if (bio.length > 180 || bio.trim().length === 0) {
  throw new Error(`Bio must be 1-180 characters, got ${bio.length}.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", bio, "utf8");
