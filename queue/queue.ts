export class Queue<T> {
  private queue: (T | undefined)[] = []

  constructor(length: number) {
    this.queue = [...new Array(length)]
  }

  public enqueue(element: T) {
    const firstEmptySpaceIndex = this.queue.indexOf(undefined)

    if(firstEmptySpaceIndex !== -1) {
      this.queue[firstEmptySpaceIndex] = element
      return
    }
  }

  public dequeue() {
    const removedItem = this.queue[0]

    if(removedItem == undefined) {
      return
    }

    for(let i = 0; i < this.queue.length; i++) {
      this.queue[i] = this.queue[i + 1]
    }
  
    return removedItem

  }
}