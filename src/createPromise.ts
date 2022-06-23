export function createPromise<T>(): {
  promise: Promise<T>
  resolve: (result: T) => void
  reject: (error: Error) => void
} {
  let promiseResolve, promiseReject
  const promise = new Promise<T>((resolve, reject) => {
    promiseResolve = resolve
    promiseReject = reject
  })

  return {
    promise,
    // @ts-ignore
    resolve: promiseResolve,
    // @ts-ignore
    reject: promiseReject,
  }
}