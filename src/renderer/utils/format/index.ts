export default {
  capitalizeName: (name: string): string => name.replace(/[a-z]/, (letter: string) => letter.toUpperCase()),
}
