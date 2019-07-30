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
  console.log(BST);
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

// main();


// [3, 2, 4, 1, 6,5];

function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

const bst = new BinarySearchTree();
bst.insert(4, 4);
bst.insert(2, 2);
bst.insert(3, 3);
bst.insert(1, 1);
bst.insert(6, 6);
bst.insert(5, 5);
bst.insert(7, 7);
bst.insert(8, 8);

const notABinary = [1,2,3,4]

notABinary.left = 6;
notABinary.right = 2;


// console.log(tree(bst))


function maxHeight(binaryTree) {
  if (!binaryTree) {
    return 0;
  } else {
    let lHeight = maxHeight(binaryTree.left);
    let rHeight = maxHeight(binaryTree.right);
    if (lHeight > rHeight) {
      return lHeight + 1;
    } else {
      return rHeight + 1;
    }
  }
}

// console.log(maxHeight(bst));

function isBst(binaryTree, min, max) {
  if (min !== undefined && binaryTree.key < min) {
    return false;
  }

  if (max !== undefined && binaryTree.key > max) {
    return false;
  }

  if (binaryTree.left && !isBst(binaryTree.left, min, binaryTree.key)) {
    return false;
  }

  if (binaryTree.right && !isBst(binaryTree.right, binaryTree.key, max)) {
    return false;
  }

  return true;
  
}

console.log(isBst(bst, Number.MIN_VALUE, Number.MAX_VALUE));


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
       
