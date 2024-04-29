// 1-misol

// let getTruthyFalsy(arr):
//     truthy = []
//     falsy = []

//     for element in arr:
//         if (element):
//             truthy.append(element)
//         else:
//             falsy.append(element)

//     return {"truthy": truthy, "falsy": falsy}

// arr = [false, 1, 10, "", null, "sultonqul", 1.13, 0]
// result = getTruthyFalsy(arr)
// print(result)




// 2-misol

// Array.prototype.sum = function() {
//     let sum = 0;
    
//     for (let i = 0; i < this.length; i++) {
//       if (typeof this[i] === 'number') {
//         sum += this[i];
//       }
//     }
    
//     return sum;
//   };
//   const arr = [1, 2, 3, 4, 5];
//   const result = arr.sum();
//   console.log(result); 




// 3-misol

// String.prototype.countVowels = function() {
//     let count = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
    
//     for (let i = 0; i < this.length; i++) {
//       const char = this[i].toLowerCase();
      
//       if (vowels.includes(char)) {
//         count++;
//       }
//     }
    
//     return count;
//   };
//   const str = 'Hello World';
//   const result = str.countVowels();
//   console.log(result);\







// 4-misol
  
// String.prototype.getLength = function() {
//     return this.length;
//   };
//   var s = "Salom dunyo!";
//   console.log(s.getLength()); 
  




// 6-misol

// function Matrix(matrix) {
//     const n = matrix.length;
//     const rotateMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n; j++) {
//             rotateMatrix[j][n - 1 - i] = matrix[i][j];
//         }
//     }
//     return rotateMatrix;
// }
// const testCases = [
//     [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]],
//     [[1,2,3],[4,5,6],[7,8,9]]
// ];
// testCases.forEach(matrix => {
//     console.log("Input:", matrix);
//     console.log("Output:", Matrix(matrix));
// });



// 7-misol



// function item(p, q) {
//     if (p.length !== q.length) {
//         return false;
//     }
//     for (let i = 0; i < p.length; i++) {
//         if (p[i] !== q[i]) {
//             return false;
//         }
//     }
//     return true;
// }
// const testCases = [
//     [[1,2,3], [1,2,3]],
//     [[1,2], [1,null,2]],
//     [[1,2,1], [1,1,2]]
// ];
// testCases.forEach(([p, q]) => {
//     console.log("Input: p =", p, "q =", q);
//     console.log("Output:", item(p, q));
// });