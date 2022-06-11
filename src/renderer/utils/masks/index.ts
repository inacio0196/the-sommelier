interface IMasks {
  cep: string[]
  phone: string[]
  date: string[]
}

const masks: IMasks = {
  cep: ['#####-###'],
  phone: ['(##) #####-####', '(##) ####-####'],
  date: ['##/##/####']
}

export default masks
