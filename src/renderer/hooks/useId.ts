const useId = (): string => {
  let id = ''
  const lengthOfId = 100
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_+'
  const characterLength = characters.length

  for (let i = 0; i < lengthOfId; i++) {
    id += characters.charAt(Math.floor(Math.random() * characterLength));
  }

  return id;
}

export default useId
