export default {
  boolean: (value: any): boolean => ['true', 'false'].includes(String(value))
}
