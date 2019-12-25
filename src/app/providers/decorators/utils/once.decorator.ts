import * as onceFn from 'lodash.once';

export function CmOnce( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {

  const originalMethod = descriptor.value;

  descriptor.value = onceFn(originalMethod);

  return descriptor;
}
