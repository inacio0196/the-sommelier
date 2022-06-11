import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

declare module 'yup' {
  interface StringSchema {
    name(message: string): StringSchema
    cep(message: string): StringSchema
    age(message: string): StringSchema
  }
}

function age(message: string) {
  return this.test('age', message, function(value: any) {
    const { path, createError } = this

    if (parseInt(value) > 9 && parseInt(value) < 100) {
      return createError({
        path,
        message,
      })
    }

    return true
  })
}

function cep(message: string) {
  return this.test('cep', message, function(value: any) {
    const { path, createError } = this

    if (!/[0-9]{5}-?[0-9]{3}/g.test(value)) {
      return createError({
        path,
        message,
      })
    }

    return true
  })
}

function name(message: string) {
  return this.test('name', message, function(value: any) {
    const { path, createError } = this

    if ((value?.match(/[^a-zA-Z]/g)?.length > 0)) {
      return createError({
        path,
        message,
      })
    }

    return true
  })
}

yup.addMethod(yup.string, "name", name);
yup.addMethod(yup.string, 'cep', cep)
yup.addMethod(yup.string, 'age', age)

export {
  yupResolver,
  yup
}

