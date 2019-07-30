'use strict';
const BinarySearchTree = require('./BinarySearchTree');


function main() {

  const BST = new BinarySearchTree();
  BST.insert(3, null);
  BST.insert(1, null);
  BST.insert(4, null);
  BST.insert(6, null);
  BST.insert(9, null);
  BST.insert(2, null);
  BST.insert(5, null);
  BST.insert(7, null);
  // console.log(BST);
  // BST.printValues(BST);
  const BSTEasy = new BinarySearchTree();
  BSTEasy.insert('E', null);
  BSTEasy.insert("A", null);
  BSTEasy.insert("S", null);
  BSTEasy.insert("Y", null);
  BSTEasy.insert("Q", null);
  BSTEasy.insert("U", null);
  BSTEasy.insert("E", null);
  BSTEasy.insert("S", null);
  BSTEasy.insert("T", null)
  BSTEasy.insert("I", null);
  BSTEasy.insert("O", null);
  BSTEasy.insert("N", null)

}

main();

// # 1-2
/* Drawing tree structures */
//         3
//      /     \
//    1         4
//     \          \
//       2          6
//                 / \
//                5    9
//                    / 
//                  7
//
//   below is modified from original.... the removal problem
//         I
//      /     \
//    A         S
//     \      /    \
//      E    Q      Y
//          /  \    / 
//        O    S   U      
//       /        /     
//      N        T  
//               
//               

/* Drawing removal of root */
//         4
//      /     \
//    1        6
//     2    5     9   \
//            7    
       
