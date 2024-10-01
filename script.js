function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Tukar elemen jika urutannya salah
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  // Contoh penggunaan
  const array = [64, 34, 25, 12, 22, 11, 90];
  console.log("Array sebelum diurutkan:", array);
  console.log("Array setelah diurutkan:", bubbleSort(array));
  