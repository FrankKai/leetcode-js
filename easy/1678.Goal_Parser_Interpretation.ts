function interpret(command: string): string {
  enum Goal {
    "G" = "G",
    "()" = "o",
    "(al)" = "al",
  }
  let i = 0;
  let result = "";
  while (i < command.length) {
    if (command[i] === "(") {
      if (command[i + 1] === ")") {
        result += Goal["()"];
        i += 2;
      } else {
        result += Goal["(al)"];
        i += 4;
      }
      continue;
    }
    result += Goal["G"];
    i++;
  }
  return result;
}
