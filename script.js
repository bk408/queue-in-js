let queue = [];
let currentSize = queue.length;
let maxSize = 5;

function enqueue(newVal) {
  if (currentSize >= maxSize) {
    alert("queue is currently full");
  } else {
    queue[currentSize] = newVal;
    currentSize++;
  }
}

function display() {
  console.log(queue);
}

function dequeue() {
  if (currentSize > 0) {
    for (let i = 0; i < queue.length; i++) {
      queue[i] = queue[i + 1];
    }
    currentSize--;
    queue.length = currentSize;
  } else {
    alert("queue is already empty");
  }
}

// enqueue(10);
// display();
